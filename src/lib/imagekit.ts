import { createHmac } from 'node:crypto';

export function signMediaUrl(url: string | null | undefined, expiresInSeconds = 60 * 60) {
  if (!url) return url;

  const endpointValue = process.env.IMAGEKIT_URL_ENDPOINT;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!endpointValue || !privateKey) throw new Error('Missing ImageKit environment variables');

  const endpoint = endpointValue.endsWith('/') ? endpointValue : `${endpointValue}/`;
  if (!url.startsWith(endpoint)) return url;

  const expiry = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const relativeUrl = url.slice(endpoint.length);
  const signature = createHmac('sha1', privateKey)
    .update(`${relativeUrl}${expiry}`)
    .digest('hex');
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}ik-t=${expiry}&ik-s=${signature}`;
}
