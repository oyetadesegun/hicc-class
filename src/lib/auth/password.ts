import { randomBytes, scrypt as nodeScrypt, timingSafeEqual } from 'node:crypto';
const KEY_LENGTH = 64;
const COST = 2 ** 15;
const BLOCK_SIZE = 8;
const PARALLELIZATION = 3;
const MAX_MEMORY = 64 * 1024 * 1024;
const PREFIX = 'scrypt';

export const MIN_PASSWORD_LENGTH = 12;
export const MAX_PASSWORD_LENGTH = 128;

export function validateNewPassword(password: string) {
  if (password.length < MIN_PASSWORD_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
    throw new Error(`Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters`);
  }
}

async function derive(password: string, salt: Buffer) {
  return new Promise<Buffer>((resolve, reject) => {
    nodeScrypt(password, salt, KEY_LENGTH, {
      N: COST,
      r: BLOCK_SIZE,
      p: PARALLELIZATION,
      maxmem: MAX_MEMORY,
    }, (error, derivedKey) => {
      if (error) reject(error);
      else resolve(Buffer.from(derivedKey));
    });
  });
}

export function isPasswordHash(value: string) {
  return value.startsWith(`${PREFIX}$`);
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const hash = await derive(password, salt);
  return [PREFIX, COST, BLOCK_SIZE, PARALLELIZATION, salt.toString('base64url'), hash.toString('base64url')].join('$');
}

export async function verifyPassword(password: string, storedValue: string) {
  if (!isPasswordHash(storedValue)) {
    // Compatibility path for existing users. A successful login immediately
    // upgrades this value to scrypt in the authentication action.
    const supplied = Buffer.from(password);
    const stored = Buffer.from(storedValue);
    return supplied.length === stored.length && timingSafeEqual(supplied, stored);
  }

  const [prefix, cost, blockSize, parallelization, encodedSalt, encodedHash] = storedValue.split('$');
  if (
    prefix !== PREFIX ||
    Number(cost) !== COST ||
    Number(blockSize) !== BLOCK_SIZE ||
    Number(parallelization) !== PARALLELIZATION ||
    !encodedSalt ||
    !encodedHash
  ) {
    return false;
  }

  const expected = Buffer.from(encodedHash, 'base64url');
  const actual = await derive(password, Buffer.from(encodedSalt, 'base64url'));
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function performDummyPasswordCheck(password: string) {
  await derive(password, Buffer.from('hicc-login-dummy-salt-v1'));
}
