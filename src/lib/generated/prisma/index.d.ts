
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model UserCourse
 * 
 */
export type UserCourse = $Result.DefaultSelection<Prisma.$UserCoursePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LiveSession
 * 
 */
export type LiveSession = $Result.DefaultSelection<Prisma.$LiveSessionPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCourse`: Exposes CRUD operations for the **UserCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCourses
    * const userCourses = await prisma.userCourse.findMany()
    * ```
    */
  get userCourse(): Prisma.UserCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveSession`: Exposes CRUD operations for the **LiveSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveSessions
    * const liveSessions = await prisma.liveSession.findMany()
    * ```
    */
  get liveSession(): Prisma.LiveSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    UserCourse: 'UserCourse',
    Lesson: 'Lesson',
    LiveSession: 'LiveSession',
    Quiz: 'Quiz',
    Assignment: 'Assignment',
    Exam: 'Exam',
    Submission: 'Submission',
    Certificate: 'Certificate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "userCourse" | "lesson" | "liveSession" | "quiz" | "assignment" | "exam" | "submission" | "certificate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      UserCourse: {
        payload: Prisma.$UserCoursePayload<ExtArgs>
        fields: Prisma.UserCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>
          }
          findFirst: {
            args: Prisma.UserCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>
          }
          findMany: {
            args: Prisma.UserCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>[]
          }
          create: {
            args: Prisma.UserCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>
          }
          createMany: {
            args: Prisma.UserCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>[]
          }
          delete: {
            args: Prisma.UserCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>
          }
          update: {
            args: Prisma.UserCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>
          }
          deleteMany: {
            args: Prisma.UserCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>[]
          }
          upsert: {
            args: Prisma.UserCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoursePayload>
          }
          aggregate: {
            args: Prisma.UserCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCourse>
          }
          groupBy: {
            args: Prisma.UserCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCourseCountArgs<ExtArgs>
            result: $Utils.Optional<UserCourseCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LiveSession: {
        payload: Prisma.$LiveSessionPayload<ExtArgs>
        fields: Prisma.LiveSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>
          }
          findFirst: {
            args: Prisma.LiveSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>
          }
          findMany: {
            args: Prisma.LiveSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>[]
          }
          create: {
            args: Prisma.LiveSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>
          }
          createMany: {
            args: Prisma.LiveSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>[]
          }
          delete: {
            args: Prisma.LiveSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>
          }
          update: {
            args: Prisma.LiveSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>
          }
          deleteMany: {
            args: Prisma.LiveSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>[]
          }
          upsert: {
            args: Prisma.LiveSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveSessionPayload>
          }
          aggregate: {
            args: Prisma.LiveSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveSession>
          }
          groupBy: {
            args: Prisma.LiveSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveSessionCountArgs<ExtArgs>
            result: $Utils.Optional<LiveSessionCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    userCourse?: UserCourseOmit
    lesson?: LessonOmit
    liveSession?: LiveSessionOmit
    quiz?: QuizOmit
    assignment?: AssignmentOmit
    exam?: ExamOmit
    submission?: SubmissionOmit
    certificate?: CertificateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrolledCourses: number
    submissions: number
    certificates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledCourses?: boolean | UserCountOutputTypeCountEnrolledCoursesArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrolledCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    lessons: number
    liveSessions: number
    assignments: number
    quizzes: number
    exams: number
    enrolledUsers: number
    certificates: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseCountOutputTypeCountLessonsArgs
    liveSessions?: boolean | CourseCountOutputTypeCountLiveSessionsArgs
    assignments?: boolean | CourseCountOutputTypeCountAssignmentsArgs
    quizzes?: boolean | CourseCountOutputTypeCountQuizzesArgs
    exams?: boolean | CourseCountOutputTypeCountExamsArgs
    enrolledUsers?: boolean | CourseCountOutputTypeCountEnrolledUsersArgs
    certificates?: boolean | CourseCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLiveSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveSessionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrolledUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    submissions: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | QuizCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    submissions: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    submissions: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ExamCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phoneNumber: string | null
    role: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phoneNumber: string | null
    role: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phoneNumber: number
    role: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phoneNumber?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phoneNumber?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phoneNumber?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    phoneNumber: string | null
    role: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrolledCourses?: boolean | User$enrolledCoursesArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "phoneNumber" | "role" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledCourses?: boolean | User$enrolledCoursesArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      enrolledCourses: Prisma.$UserCoursePayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      phoneNumber: string | null
      role: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrolledCourses<T extends User$enrolledCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$enrolledCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.enrolledCourses
   */
  export type User$enrolledCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    where?: UserCourseWhereInput
    orderBy?: UserCourseOrderByWithRelationInput | UserCourseOrderByWithRelationInput[]
    cursor?: UserCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseScalarFieldEnum | UserCourseScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    category: string | null
    instructor: string | null
    level: string | null
    duration: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    category: string | null
    instructor: string | null
    level: string | null
    duration: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    thumbnail: number
    category: number
    instructor: number
    level: number
    duration: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    category?: true
    instructor?: true
    level?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    category?: true
    instructor?: true
    level?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    category?: true
    instructor?: true
    level?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    category?: boolean
    instructor?: boolean
    level?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    liveSessions?: boolean | Course$liveSessionsArgs<ExtArgs>
    assignments?: boolean | Course$assignmentsArgs<ExtArgs>
    quizzes?: boolean | Course$quizzesArgs<ExtArgs>
    exams?: boolean | Course$examsArgs<ExtArgs>
    enrolledUsers?: boolean | Course$enrolledUsersArgs<ExtArgs>
    certificates?: boolean | Course$certificatesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    category?: boolean
    instructor?: boolean
    level?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    category?: boolean
    instructor?: boolean
    level?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    category?: boolean
    instructor?: boolean
    level?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "thumbnail" | "category" | "instructor" | "level" | "duration" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    liveSessions?: boolean | Course$liveSessionsArgs<ExtArgs>
    assignments?: boolean | Course$assignmentsArgs<ExtArgs>
    quizzes?: boolean | Course$quizzesArgs<ExtArgs>
    exams?: boolean | Course$examsArgs<ExtArgs>
    enrolledUsers?: boolean | Course$enrolledUsersArgs<ExtArgs>
    certificates?: boolean | Course$certificatesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      liveSessions: Prisma.$LiveSessionPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      exams: Prisma.$ExamPayload<ExtArgs>[]
      enrolledUsers: Prisma.$UserCoursePayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      thumbnail: string
      category: string
      instructor: string
      level: string
      duration: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends Course$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Course$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    liveSessions<T extends Course$liveSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$liveSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Course$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends Course$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Course$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends Course$examsArgs<ExtArgs> = {}>(args?: Subset<T, Course$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrolledUsers<T extends Course$enrolledUsersArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrolledUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends Course$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Course$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly thumbnail: FieldRef<"Course", 'String'>
    readonly category: FieldRef<"Course", 'String'>
    readonly instructor: FieldRef<"Course", 'String'>
    readonly level: FieldRef<"Course", 'String'>
    readonly duration: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.lessons
   */
  export type Course$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Course.liveSessions
   */
  export type Course$liveSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    where?: LiveSessionWhereInput
    orderBy?: LiveSessionOrderByWithRelationInput | LiveSessionOrderByWithRelationInput[]
    cursor?: LiveSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiveSessionScalarFieldEnum | LiveSessionScalarFieldEnum[]
  }

  /**
   * Course.assignments
   */
  export type Course$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Course.quizzes
   */
  export type Course$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Course.exams
   */
  export type Course$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Course.enrolledUsers
   */
  export type Course$enrolledUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    where?: UserCourseWhereInput
    orderBy?: UserCourseOrderByWithRelationInput | UserCourseOrderByWithRelationInput[]
    cursor?: UserCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseScalarFieldEnum | UserCourseScalarFieldEnum[]
  }

  /**
   * Course.certificates
   */
  export type Course$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model UserCourse
   */

  export type AggregateUserCourse = {
    _count: UserCourseCountAggregateOutputType | null
    _avg: UserCourseAvgAggregateOutputType | null
    _sum: UserCourseSumAggregateOutputType | null
    _min: UserCourseMinAggregateOutputType | null
    _max: UserCourseMaxAggregateOutputType | null
  }

  export type UserCourseAvgAggregateOutputType = {
    progress: number | null
  }

  export type UserCourseSumAggregateOutputType = {
    progress: number | null
  }

  export type UserCourseMinAggregateOutputType = {
    userId: string | null
    courseId: string | null
    progress: number | null
    attendedLive: boolean | null
    enrolledAt: Date | null
  }

  export type UserCourseMaxAggregateOutputType = {
    userId: string | null
    courseId: string | null
    progress: number | null
    attendedLive: boolean | null
    enrolledAt: Date | null
  }

  export type UserCourseCountAggregateOutputType = {
    userId: number
    courseId: number
    progress: number
    watchedLessons: number
    attendedLive: number
    enrolledAt: number
    _all: number
  }


  export type UserCourseAvgAggregateInputType = {
    progress?: true
  }

  export type UserCourseSumAggregateInputType = {
    progress?: true
  }

  export type UserCourseMinAggregateInputType = {
    userId?: true
    courseId?: true
    progress?: true
    attendedLive?: true
    enrolledAt?: true
  }

  export type UserCourseMaxAggregateInputType = {
    userId?: true
    courseId?: true
    progress?: true
    attendedLive?: true
    enrolledAt?: true
  }

  export type UserCourseCountAggregateInputType = {
    userId?: true
    courseId?: true
    progress?: true
    watchedLessons?: true
    attendedLive?: true
    enrolledAt?: true
    _all?: true
  }

  export type UserCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourse to aggregate.
     */
    where?: UserCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourses to fetch.
     */
    orderBy?: UserCourseOrderByWithRelationInput | UserCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCourses
    **/
    _count?: true | UserCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCourseMaxAggregateInputType
  }

  export type GetUserCourseAggregateType<T extends UserCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCourse[P]>
      : GetScalarType<T[P], AggregateUserCourse[P]>
  }




  export type UserCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseWhereInput
    orderBy?: UserCourseOrderByWithAggregationInput | UserCourseOrderByWithAggregationInput[]
    by: UserCourseScalarFieldEnum[] | UserCourseScalarFieldEnum
    having?: UserCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCourseCountAggregateInputType | true
    _avg?: UserCourseAvgAggregateInputType
    _sum?: UserCourseSumAggregateInputType
    _min?: UserCourseMinAggregateInputType
    _max?: UserCourseMaxAggregateInputType
  }

  export type UserCourseGroupByOutputType = {
    userId: string
    courseId: string
    progress: number
    watchedLessons: JsonValue
    attendedLive: boolean
    enrolledAt: Date
    _count: UserCourseCountAggregateOutputType | null
    _avg: UserCourseAvgAggregateOutputType | null
    _sum: UserCourseSumAggregateOutputType | null
    _min: UserCourseMinAggregateOutputType | null
    _max: UserCourseMaxAggregateOutputType | null
  }

  type GetUserCourseGroupByPayload<T extends UserCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCourseGroupByOutputType[P]>
            : GetScalarType<T[P], UserCourseGroupByOutputType[P]>
        }
      >
    >


  export type UserCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    watchedLessons?: boolean
    attendedLive?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourse"]>

  export type UserCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    watchedLessons?: boolean
    attendedLive?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourse"]>

  export type UserCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    watchedLessons?: boolean
    attendedLive?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourse"]>

  export type UserCourseSelectScalar = {
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    watchedLessons?: boolean
    attendedLive?: boolean
    enrolledAt?: boolean
  }

  export type UserCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "courseId" | "progress" | "watchedLessons" | "attendedLive" | "enrolledAt", ExtArgs["result"]["userCourse"]>
  export type UserCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type UserCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type UserCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $UserCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCourse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      courseId: string
      progress: number
      watchedLessons: Prisma.JsonValue
      attendedLive: boolean
      enrolledAt: Date
    }, ExtArgs["result"]["userCourse"]>
    composites: {}
  }

  type UserCourseGetPayload<S extends boolean | null | undefined | UserCourseDefaultArgs> = $Result.GetResult<Prisma.$UserCoursePayload, S>

  type UserCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCourseCountAggregateInputType | true
    }

  export interface UserCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCourse'], meta: { name: 'UserCourse' } }
    /**
     * Find zero or one UserCourse that matches the filter.
     * @param {UserCourseFindUniqueArgs} args - Arguments to find a UserCourse
     * @example
     * // Get one UserCourse
     * const userCourse = await prisma.userCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCourseFindUniqueArgs>(args: SelectSubset<T, UserCourseFindUniqueArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCourseFindUniqueOrThrowArgs} args - Arguments to find a UserCourse
     * @example
     * // Get one UserCourse
     * const userCourse = await prisma.userCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseFindFirstArgs} args - Arguments to find a UserCourse
     * @example
     * // Get one UserCourse
     * const userCourse = await prisma.userCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCourseFindFirstArgs>(args?: SelectSubset<T, UserCourseFindFirstArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseFindFirstOrThrowArgs} args - Arguments to find a UserCourse
     * @example
     * // Get one UserCourse
     * const userCourse = await prisma.userCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCourses
     * const userCourses = await prisma.userCourse.findMany()
     * 
     * // Get first 10 UserCourses
     * const userCourses = await prisma.userCourse.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userCourseWithUserIdOnly = await prisma.userCourse.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserCourseFindManyArgs>(args?: SelectSubset<T, UserCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCourse.
     * @param {UserCourseCreateArgs} args - Arguments to create a UserCourse.
     * @example
     * // Create one UserCourse
     * const UserCourse = await prisma.userCourse.create({
     *   data: {
     *     // ... data to create a UserCourse
     *   }
     * })
     * 
     */
    create<T extends UserCourseCreateArgs>(args: SelectSubset<T, UserCourseCreateArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCourses.
     * @param {UserCourseCreateManyArgs} args - Arguments to create many UserCourses.
     * @example
     * // Create many UserCourses
     * const userCourse = await prisma.userCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCourseCreateManyArgs>(args?: SelectSubset<T, UserCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCourses and returns the data saved in the database.
     * @param {UserCourseCreateManyAndReturnArgs} args - Arguments to create many UserCourses.
     * @example
     * // Create many UserCourses
     * const userCourse = await prisma.userCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCourses and only return the `userId`
     * const userCourseWithUserIdOnly = await prisma.userCourse.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCourse.
     * @param {UserCourseDeleteArgs} args - Arguments to delete one UserCourse.
     * @example
     * // Delete one UserCourse
     * const UserCourse = await prisma.userCourse.delete({
     *   where: {
     *     // ... filter to delete one UserCourse
     *   }
     * })
     * 
     */
    delete<T extends UserCourseDeleteArgs>(args: SelectSubset<T, UserCourseDeleteArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCourse.
     * @param {UserCourseUpdateArgs} args - Arguments to update one UserCourse.
     * @example
     * // Update one UserCourse
     * const userCourse = await prisma.userCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCourseUpdateArgs>(args: SelectSubset<T, UserCourseUpdateArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCourses.
     * @param {UserCourseDeleteManyArgs} args - Arguments to filter UserCourses to delete.
     * @example
     * // Delete a few UserCourses
     * const { count } = await prisma.userCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCourseDeleteManyArgs>(args?: SelectSubset<T, UserCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCourses
     * const userCourse = await prisma.userCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCourseUpdateManyArgs>(args: SelectSubset<T, UserCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourses and returns the data updated in the database.
     * @param {UserCourseUpdateManyAndReturnArgs} args - Arguments to update many UserCourses.
     * @example
     * // Update many UserCourses
     * const userCourse = await prisma.userCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCourses and only return the `userId`
     * const userCourseWithUserIdOnly = await prisma.userCourse.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCourse.
     * @param {UserCourseUpsertArgs} args - Arguments to update or create a UserCourse.
     * @example
     * // Update or create a UserCourse
     * const userCourse = await prisma.userCourse.upsert({
     *   create: {
     *     // ... data to create a UserCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCourse we want to update
     *   }
     * })
     */
    upsert<T extends UserCourseUpsertArgs>(args: SelectSubset<T, UserCourseUpsertArgs<ExtArgs>>): Prisma__UserCourseClient<$Result.GetResult<Prisma.$UserCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseCountArgs} args - Arguments to filter UserCourses to count.
     * @example
     * // Count the number of UserCourses
     * const count = await prisma.userCourse.count({
     *   where: {
     *     // ... the filter for the UserCourses we want to count
     *   }
     * })
    **/
    count<T extends UserCourseCountArgs>(
      args?: Subset<T, UserCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCourseAggregateArgs>(args: Subset<T, UserCourseAggregateArgs>): Prisma.PrismaPromise<GetUserCourseAggregateType<T>>

    /**
     * Group by UserCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCourseGroupByArgs['orderBy'] }
        : { orderBy?: UserCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCourse model
   */
  readonly fields: UserCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCourse model
   */
  interface UserCourseFieldRefs {
    readonly userId: FieldRef<"UserCourse", 'String'>
    readonly courseId: FieldRef<"UserCourse", 'String'>
    readonly progress: FieldRef<"UserCourse", 'Float'>
    readonly watchedLessons: FieldRef<"UserCourse", 'Json'>
    readonly attendedLive: FieldRef<"UserCourse", 'Boolean'>
    readonly enrolledAt: FieldRef<"UserCourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCourse findUnique
   */
  export type UserCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * Filter, which UserCourse to fetch.
     */
    where: UserCourseWhereUniqueInput
  }

  /**
   * UserCourse findUniqueOrThrow
   */
  export type UserCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * Filter, which UserCourse to fetch.
     */
    where: UserCourseWhereUniqueInput
  }

  /**
   * UserCourse findFirst
   */
  export type UserCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * Filter, which UserCourse to fetch.
     */
    where?: UserCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourses to fetch.
     */
    orderBy?: UserCourseOrderByWithRelationInput | UserCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourses.
     */
    cursor?: UserCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourses.
     */
    distinct?: UserCourseScalarFieldEnum | UserCourseScalarFieldEnum[]
  }

  /**
   * UserCourse findFirstOrThrow
   */
  export type UserCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * Filter, which UserCourse to fetch.
     */
    where?: UserCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourses to fetch.
     */
    orderBy?: UserCourseOrderByWithRelationInput | UserCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourses.
     */
    cursor?: UserCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourses.
     */
    distinct?: UserCourseScalarFieldEnum | UserCourseScalarFieldEnum[]
  }

  /**
   * UserCourse findMany
   */
  export type UserCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * Filter, which UserCourses to fetch.
     */
    where?: UserCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourses to fetch.
     */
    orderBy?: UserCourseOrderByWithRelationInput | UserCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCourses.
     */
    cursor?: UserCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourses.
     */
    distinct?: UserCourseScalarFieldEnum | UserCourseScalarFieldEnum[]
  }

  /**
   * UserCourse create
   */
  export type UserCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCourse.
     */
    data: XOR<UserCourseCreateInput, UserCourseUncheckedCreateInput>
  }

  /**
   * UserCourse createMany
   */
  export type UserCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCourses.
     */
    data: UserCourseCreateManyInput | UserCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCourse createManyAndReturn
   */
  export type UserCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * The data used to create many UserCourses.
     */
    data: UserCourseCreateManyInput | UserCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCourse update
   */
  export type UserCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCourse.
     */
    data: XOR<UserCourseUpdateInput, UserCourseUncheckedUpdateInput>
    /**
     * Choose, which UserCourse to update.
     */
    where: UserCourseWhereUniqueInput
  }

  /**
   * UserCourse updateMany
   */
  export type UserCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCourses.
     */
    data: XOR<UserCourseUpdateManyMutationInput, UserCourseUncheckedUpdateManyInput>
    /**
     * Filter which UserCourses to update
     */
    where?: UserCourseWhereInput
    /**
     * Limit how many UserCourses to update.
     */
    limit?: number
  }

  /**
   * UserCourse updateManyAndReturn
   */
  export type UserCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * The data used to update UserCourses.
     */
    data: XOR<UserCourseUpdateManyMutationInput, UserCourseUncheckedUpdateManyInput>
    /**
     * Filter which UserCourses to update
     */
    where?: UserCourseWhereInput
    /**
     * Limit how many UserCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCourse upsert
   */
  export type UserCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCourse to update in case it exists.
     */
    where: UserCourseWhereUniqueInput
    /**
     * In case the UserCourse found by the `where` argument doesn't exist, create a new UserCourse with this data.
     */
    create: XOR<UserCourseCreateInput, UserCourseUncheckedCreateInput>
    /**
     * In case the UserCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCourseUpdateInput, UserCourseUncheckedUpdateInput>
  }

  /**
   * UserCourse delete
   */
  export type UserCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
    /**
     * Filter which UserCourse to delete.
     */
    where: UserCourseWhereUniqueInput
  }

  /**
   * UserCourse deleteMany
   */
  export type UserCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourses to delete
     */
    where?: UserCourseWhereInput
    /**
     * Limit how many UserCourses to delete.
     */
    limit?: number
  }

  /**
   * UserCourse without action
   */
  export type UserCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourse
     */
    select?: UserCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourse
     */
    omit?: UserCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    title: string | null
    duration: string | null
    videoUrl: string | null
    order: number | null
    courseId: string | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    duration: string | null
    videoUrl: string | null
    order: number | null
    courseId: string | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    duration: number
    videoUrl: number
    order: number
    courseId: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    videoUrl?: true
    order?: true
    courseId?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    videoUrl?: true
    order?: true
    courseId?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    videoUrl?: true
    order?: true
    courseId?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    title: string
    duration: string
    videoUrl: string
    order: number
    courseId: string
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    duration?: boolean
    videoUrl?: boolean
    order?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    duration?: boolean
    videoUrl?: boolean
    order?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    duration?: boolean
    videoUrl?: boolean
    order?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    duration?: boolean
    videoUrl?: boolean
    order?: boolean
    courseId?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "duration" | "videoUrl" | "order" | "courseId", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      duration: string
      videoUrl: string
      order: number
      courseId: string
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly duration: FieldRef<"Lesson", 'String'>
    readonly videoUrl: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly courseId: FieldRef<"Lesson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LiveSession
   */

  export type AggregateLiveSession = {
    _count: LiveSessionCountAggregateOutputType | null
    _min: LiveSessionMinAggregateOutputType | null
    _max: LiveSessionMaxAggregateOutputType | null
  }

  export type LiveSessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    duration: string | null
    instructor: string | null
    link: string | null
    courseId: string | null
  }

  export type LiveSessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    duration: string | null
    instructor: string | null
    link: string | null
    courseId: string | null
  }

  export type LiveSessionCountAggregateOutputType = {
    id: number
    title: number
    date: number
    duration: number
    instructor: number
    link: number
    courseId: number
    _all: number
  }


  export type LiveSessionMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    duration?: true
    instructor?: true
    link?: true
    courseId?: true
  }

  export type LiveSessionMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    duration?: true
    instructor?: true
    link?: true
    courseId?: true
  }

  export type LiveSessionCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    duration?: true
    instructor?: true
    link?: true
    courseId?: true
    _all?: true
  }

  export type LiveSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveSession to aggregate.
     */
    where?: LiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: LiveSessionOrderByWithRelationInput | LiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveSessions
    **/
    _count?: true | LiveSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveSessionMaxAggregateInputType
  }

  export type GetLiveSessionAggregateType<T extends LiveSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveSession[P]>
      : GetScalarType<T[P], AggregateLiveSession[P]>
  }




  export type LiveSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveSessionWhereInput
    orderBy?: LiveSessionOrderByWithAggregationInput | LiveSessionOrderByWithAggregationInput[]
    by: LiveSessionScalarFieldEnum[] | LiveSessionScalarFieldEnum
    having?: LiveSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveSessionCountAggregateInputType | true
    _min?: LiveSessionMinAggregateInputType
    _max?: LiveSessionMaxAggregateInputType
  }

  export type LiveSessionGroupByOutputType = {
    id: string
    title: string
    date: Date
    duration: string
    instructor: string
    link: string
    courseId: string
    _count: LiveSessionCountAggregateOutputType | null
    _min: LiveSessionMinAggregateOutputType | null
    _max: LiveSessionMaxAggregateOutputType | null
  }

  type GetLiveSessionGroupByPayload<T extends LiveSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveSessionGroupByOutputType[P]>
            : GetScalarType<T[P], LiveSessionGroupByOutputType[P]>
        }
      >
    >


  export type LiveSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    duration?: boolean
    instructor?: boolean
    link?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveSession"]>

  export type LiveSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    duration?: boolean
    instructor?: boolean
    link?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveSession"]>

  export type LiveSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    duration?: boolean
    instructor?: boolean
    link?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveSession"]>

  export type LiveSessionSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    duration?: boolean
    instructor?: boolean
    link?: boolean
    courseId?: boolean
  }

  export type LiveSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "duration" | "instructor" | "link" | "courseId", ExtArgs["result"]["liveSession"]>
  export type LiveSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LiveSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LiveSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LiveSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveSession"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: Date
      duration: string
      instructor: string
      link: string
      courseId: string
    }, ExtArgs["result"]["liveSession"]>
    composites: {}
  }

  type LiveSessionGetPayload<S extends boolean | null | undefined | LiveSessionDefaultArgs> = $Result.GetResult<Prisma.$LiveSessionPayload, S>

  type LiveSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveSessionCountAggregateInputType | true
    }

  export interface LiveSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveSession'], meta: { name: 'LiveSession' } }
    /**
     * Find zero or one LiveSession that matches the filter.
     * @param {LiveSessionFindUniqueArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveSessionFindUniqueArgs>(args: SelectSubset<T, LiveSessionFindUniqueArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveSessionFindUniqueOrThrowArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionFindFirstArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveSessionFindFirstArgs>(args?: SelectSubset<T, LiveSessionFindFirstArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionFindFirstOrThrowArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveSessions
     * const liveSessions = await prisma.liveSession.findMany()
     * 
     * // Get first 10 LiveSessions
     * const liveSessions = await prisma.liveSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveSessionWithIdOnly = await prisma.liveSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveSessionFindManyArgs>(args?: SelectSubset<T, LiveSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveSession.
     * @param {LiveSessionCreateArgs} args - Arguments to create a LiveSession.
     * @example
     * // Create one LiveSession
     * const LiveSession = await prisma.liveSession.create({
     *   data: {
     *     // ... data to create a LiveSession
     *   }
     * })
     * 
     */
    create<T extends LiveSessionCreateArgs>(args: SelectSubset<T, LiveSessionCreateArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveSessions.
     * @param {LiveSessionCreateManyArgs} args - Arguments to create many LiveSessions.
     * @example
     * // Create many LiveSessions
     * const liveSession = await prisma.liveSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveSessionCreateManyArgs>(args?: SelectSubset<T, LiveSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveSessions and returns the data saved in the database.
     * @param {LiveSessionCreateManyAndReturnArgs} args - Arguments to create many LiveSessions.
     * @example
     * // Create many LiveSessions
     * const liveSession = await prisma.liveSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveSessions and only return the `id`
     * const liveSessionWithIdOnly = await prisma.liveSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiveSession.
     * @param {LiveSessionDeleteArgs} args - Arguments to delete one LiveSession.
     * @example
     * // Delete one LiveSession
     * const LiveSession = await prisma.liveSession.delete({
     *   where: {
     *     // ... filter to delete one LiveSession
     *   }
     * })
     * 
     */
    delete<T extends LiveSessionDeleteArgs>(args: SelectSubset<T, LiveSessionDeleteArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveSession.
     * @param {LiveSessionUpdateArgs} args - Arguments to update one LiveSession.
     * @example
     * // Update one LiveSession
     * const liveSession = await prisma.liveSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveSessionUpdateArgs>(args: SelectSubset<T, LiveSessionUpdateArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveSessions.
     * @param {LiveSessionDeleteManyArgs} args - Arguments to filter LiveSessions to delete.
     * @example
     * // Delete a few LiveSessions
     * const { count } = await prisma.liveSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveSessionDeleteManyArgs>(args?: SelectSubset<T, LiveSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveSessions
     * const liveSession = await prisma.liveSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveSessionUpdateManyArgs>(args: SelectSubset<T, LiveSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveSessions and returns the data updated in the database.
     * @param {LiveSessionUpdateManyAndReturnArgs} args - Arguments to update many LiveSessions.
     * @example
     * // Update many LiveSessions
     * const liveSession = await prisma.liveSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiveSessions and only return the `id`
     * const liveSessionWithIdOnly = await prisma.liveSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LiveSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiveSession.
     * @param {LiveSessionUpsertArgs} args - Arguments to update or create a LiveSession.
     * @example
     * // Update or create a LiveSession
     * const liveSession = await prisma.liveSession.upsert({
     *   create: {
     *     // ... data to create a LiveSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveSession we want to update
     *   }
     * })
     */
    upsert<T extends LiveSessionUpsertArgs>(args: SelectSubset<T, LiveSessionUpsertArgs<ExtArgs>>): Prisma__LiveSessionClient<$Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionCountArgs} args - Arguments to filter LiveSessions to count.
     * @example
     * // Count the number of LiveSessions
     * const count = await prisma.liveSession.count({
     *   where: {
     *     // ... the filter for the LiveSessions we want to count
     *   }
     * })
    **/
    count<T extends LiveSessionCountArgs>(
      args?: Subset<T, LiveSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiveSessionAggregateArgs>(args: Subset<T, LiveSessionAggregateArgs>): Prisma.PrismaPromise<GetLiveSessionAggregateType<T>>

    /**
     * Group by LiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiveSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveSessionGroupByArgs['orderBy'] }
        : { orderBy?: LiveSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiveSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveSession model
   */
  readonly fields: LiveSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LiveSession model
   */
  interface LiveSessionFieldRefs {
    readonly id: FieldRef<"LiveSession", 'String'>
    readonly title: FieldRef<"LiveSession", 'String'>
    readonly date: FieldRef<"LiveSession", 'DateTime'>
    readonly duration: FieldRef<"LiveSession", 'String'>
    readonly instructor: FieldRef<"LiveSession", 'String'>
    readonly link: FieldRef<"LiveSession", 'String'>
    readonly courseId: FieldRef<"LiveSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LiveSession findUnique
   */
  export type LiveSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which LiveSession to fetch.
     */
    where: LiveSessionWhereUniqueInput
  }

  /**
   * LiveSession findUniqueOrThrow
   */
  export type LiveSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which LiveSession to fetch.
     */
    where: LiveSessionWhereUniqueInput
  }

  /**
   * LiveSession findFirst
   */
  export type LiveSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which LiveSession to fetch.
     */
    where?: LiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: LiveSessionOrderByWithRelationInput | LiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveSessions.
     */
    cursor?: LiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveSessions.
     */
    distinct?: LiveSessionScalarFieldEnum | LiveSessionScalarFieldEnum[]
  }

  /**
   * LiveSession findFirstOrThrow
   */
  export type LiveSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which LiveSession to fetch.
     */
    where?: LiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: LiveSessionOrderByWithRelationInput | LiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveSessions.
     */
    cursor?: LiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveSessions.
     */
    distinct?: LiveSessionScalarFieldEnum | LiveSessionScalarFieldEnum[]
  }

  /**
   * LiveSession findMany
   */
  export type LiveSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * Filter, which LiveSessions to fetch.
     */
    where?: LiveSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: LiveSessionOrderByWithRelationInput | LiveSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveSessions.
     */
    cursor?: LiveSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveSessions.
     */
    distinct?: LiveSessionScalarFieldEnum | LiveSessionScalarFieldEnum[]
  }

  /**
   * LiveSession create
   */
  export type LiveSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a LiveSession.
     */
    data: XOR<LiveSessionCreateInput, LiveSessionUncheckedCreateInput>
  }

  /**
   * LiveSession createMany
   */
  export type LiveSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveSessions.
     */
    data: LiveSessionCreateManyInput | LiveSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveSession createManyAndReturn
   */
  export type LiveSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * The data used to create many LiveSessions.
     */
    data: LiveSessionCreateManyInput | LiveSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LiveSession update
   */
  export type LiveSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a LiveSession.
     */
    data: XOR<LiveSessionUpdateInput, LiveSessionUncheckedUpdateInput>
    /**
     * Choose, which LiveSession to update.
     */
    where: LiveSessionWhereUniqueInput
  }

  /**
   * LiveSession updateMany
   */
  export type LiveSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveSessions.
     */
    data: XOR<LiveSessionUpdateManyMutationInput, LiveSessionUncheckedUpdateManyInput>
    /**
     * Filter which LiveSessions to update
     */
    where?: LiveSessionWhereInput
    /**
     * Limit how many LiveSessions to update.
     */
    limit?: number
  }

  /**
   * LiveSession updateManyAndReturn
   */
  export type LiveSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * The data used to update LiveSessions.
     */
    data: XOR<LiveSessionUpdateManyMutationInput, LiveSessionUncheckedUpdateManyInput>
    /**
     * Filter which LiveSessions to update
     */
    where?: LiveSessionWhereInput
    /**
     * Limit how many LiveSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LiveSession upsert
   */
  export type LiveSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the LiveSession to update in case it exists.
     */
    where: LiveSessionWhereUniqueInput
    /**
     * In case the LiveSession found by the `where` argument doesn't exist, create a new LiveSession with this data.
     */
    create: XOR<LiveSessionCreateInput, LiveSessionUncheckedCreateInput>
    /**
     * In case the LiveSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveSessionUpdateInput, LiveSessionUncheckedUpdateInput>
  }

  /**
   * LiveSession delete
   */
  export type LiveSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
    /**
     * Filter which LiveSession to delete.
     */
    where: LiveSessionWhereUniqueInput
  }

  /**
   * LiveSession deleteMany
   */
  export type LiveSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveSessions to delete
     */
    where?: LiveSessionWhereInput
    /**
     * Limit how many LiveSessions to delete.
     */
    limit?: number
  }

  /**
   * LiveSession without action
   */
  export type LiveSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: LiveSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: LiveSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveSessionInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    title: string | null
    courseId: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    title: string | null
    courseId: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    questions: number
    courseId: number
    _all: number
  }


  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    courseId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    courseId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    questions?: true
    courseId?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    title: string
    questions: JsonValue
    courseId: string
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    questions?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Quiz$submissionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    questions?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    questions?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    questions?: boolean
    courseId?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "questions" | "courseId", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Quiz$submissionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      questions: Prisma.JsonValue
      courseId: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Quiz$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly questions: FieldRef<"Quiz", 'Json'>
    readonly courseId: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.submissions
   */
  export type Quiz$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    courseId: string | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    courseId: string | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    courseId: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    courseId?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    courseId?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    courseId?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    title: string
    description: string
    dueDate: Date
    courseId: string
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    courseId?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "courseId", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      dueDate: Date
      courseId: string
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly dueDate: FieldRef<"Assignment", 'DateTime'>
    readonly courseId: FieldRef<"Assignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    duration: number | null
  }

  export type ExamSumAggregateOutputType = {
    duration: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    duration: number | null
    courseId: string | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    duration: number | null
    courseId: string | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    questions: number
    duration: number
    courseId: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    duration?: true
  }

  export type ExamSumAggregateInputType = {
    duration?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    courseId?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    courseId?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    questions?: true
    duration?: true
    courseId?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    questions: JsonValue
    duration: number
    courseId: string
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    questions?: boolean
    duration?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Exam$submissionsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    questions?: boolean
    duration?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    questions?: boolean
    duration?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    questions?: boolean
    duration?: boolean
    courseId?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "questions" | "duration" | "courseId", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Exam$submissionsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      questions: Prisma.JsonValue
      duration: number
      courseId: string
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Exam$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly questions: FieldRef<"Exam", 'Json'>
    readonly duration: FieldRef<"Exam", 'Int'>
    readonly courseId: FieldRef<"Exam", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.submissions
   */
  export type Exam$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    score: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    score: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    type: string | null
    score: number | null
    status: string | null
    userId: string | null
    quizId: string | null
    assignmentId: string | null
    examId: string | null
    submittedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    score: number | null
    status: string | null
    userId: string | null
    quizId: string | null
    assignmentId: string | null
    examId: string | null
    submittedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    type: number
    score: number
    content: number
    answers: number
    status: number
    userId: number
    quizId: number
    assignmentId: number
    examId: number
    submittedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    score?: true
  }

  export type SubmissionSumAggregateInputType = {
    score?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    type?: true
    score?: true
    status?: true
    userId?: true
    quizId?: true
    assignmentId?: true
    examId?: true
    submittedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    type?: true
    score?: true
    status?: true
    userId?: true
    quizId?: true
    assignmentId?: true
    examId?: true
    submittedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    type?: true
    score?: true
    content?: true
    answers?: true
    status?: true
    userId?: true
    quizId?: true
    assignmentId?: true
    examId?: true
    submittedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    type: string
    score: number | null
    content: JsonValue | null
    answers: JsonValue | null
    status: string
    userId: string
    quizId: string | null
    assignmentId: string | null
    examId: string | null
    submittedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    score?: boolean
    content?: boolean
    answers?: boolean
    status?: boolean
    userId?: boolean
    quizId?: boolean
    assignmentId?: boolean
    examId?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | Submission$quizArgs<ExtArgs>
    assignment?: boolean | Submission$assignmentArgs<ExtArgs>
    exam?: boolean | Submission$examArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    score?: boolean
    content?: boolean
    answers?: boolean
    status?: boolean
    userId?: boolean
    quizId?: boolean
    assignmentId?: boolean
    examId?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | Submission$quizArgs<ExtArgs>
    assignment?: boolean | Submission$assignmentArgs<ExtArgs>
    exam?: boolean | Submission$examArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    score?: boolean
    content?: boolean
    answers?: boolean
    status?: boolean
    userId?: boolean
    quizId?: boolean
    assignmentId?: boolean
    examId?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | Submission$quizArgs<ExtArgs>
    assignment?: boolean | Submission$assignmentArgs<ExtArgs>
    exam?: boolean | Submission$examArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    type?: boolean
    score?: boolean
    content?: boolean
    answers?: boolean
    status?: boolean
    userId?: boolean
    quizId?: boolean
    assignmentId?: boolean
    examId?: boolean
    submittedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "score" | "content" | "answers" | "status" | "userId" | "quizId" | "assignmentId" | "examId" | "submittedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | Submission$quizArgs<ExtArgs>
    assignment?: boolean | Submission$assignmentArgs<ExtArgs>
    exam?: boolean | Submission$examArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | Submission$quizArgs<ExtArgs>
    assignment?: boolean | Submission$assignmentArgs<ExtArgs>
    exam?: boolean | Submission$examArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | Submission$quizArgs<ExtArgs>
    assignment?: boolean | Submission$assignmentArgs<ExtArgs>
    exam?: boolean | Submission$examArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs> | null
      assignment: Prisma.$AssignmentPayload<ExtArgs> | null
      exam: Prisma.$ExamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      score: number | null
      content: Prisma.JsonValue | null
      answers: Prisma.JsonValue | null
      status: string
      userId: string
      quizId: string | null
      assignmentId: string | null
      examId: string | null
      submittedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends Submission$quizArgs<ExtArgs> = {}>(args?: Subset<T, Submission$quizArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignment<T extends Submission$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, Submission$assignmentArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exam<T extends Submission$examArgs<ExtArgs> = {}>(args?: Subset<T, Submission$examArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly type: FieldRef<"Submission", 'String'>
    readonly score: FieldRef<"Submission", 'Float'>
    readonly content: FieldRef<"Submission", 'Json'>
    readonly answers: FieldRef<"Submission", 'Json'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly quizId: FieldRef<"Submission", 'String'>
    readonly assignmentId: FieldRef<"Submission", 'String'>
    readonly examId: FieldRef<"Submission", 'String'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.quiz
   */
  export type Submission$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
  }

  /**
   * Submission.assignment
   */
  export type Submission$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
  }

  /**
   * Submission.exam
   */
  export type Submission$examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    certificateNumber: string | null
    issuedDate: Date | null
    userId: string | null
    courseId: string | null
    studentName: string | null
    courseName: string | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    certificateNumber: string | null
    issuedDate: Date | null
    userId: string | null
    courseId: string | null
    studentName: string | null
    courseName: string | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    certificateNumber: number
    issuedDate: number
    userId: number
    courseId: number
    studentName: number
    courseName: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    certificateNumber?: true
    issuedDate?: true
    userId?: true
    courseId?: true
    studentName?: true
    courseName?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    certificateNumber?: true
    issuedDate?: true
    userId?: true
    courseId?: true
    studentName?: true
    courseName?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    certificateNumber?: true
    issuedDate?: true
    userId?: true
    courseId?: true
    studentName?: true
    courseName?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    certificateNumber: string
    issuedDate: Date
    userId: string
    courseId: string
    studentName: string
    courseName: string
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateNumber?: boolean
    issuedDate?: boolean
    userId?: boolean
    courseId?: boolean
    studentName?: boolean
    courseName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateNumber?: boolean
    issuedDate?: boolean
    userId?: boolean
    courseId?: boolean
    studentName?: boolean
    courseName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateNumber?: boolean
    issuedDate?: boolean
    userId?: boolean
    courseId?: boolean
    studentName?: boolean
    courseName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    certificateNumber?: boolean
    issuedDate?: boolean
    userId?: boolean
    courseId?: boolean
    studentName?: boolean
    courseName?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "certificateNumber" | "issuedDate" | "userId" | "courseId" | "studentName" | "courseName", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      certificateNumber: string
      issuedDate: Date
      userId: string
      courseId: string
      studentName: string
      courseName: string
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly certificateNumber: FieldRef<"Certificate", 'String'>
    readonly issuedDate: FieldRef<"Certificate", 'DateTime'>
    readonly userId: FieldRef<"Certificate", 'String'>
    readonly courseId: FieldRef<"Certificate", 'String'>
    readonly studentName: FieldRef<"Certificate", 'String'>
    readonly courseName: FieldRef<"Certificate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phoneNumber: 'phoneNumber',
    role: 'role',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    category: 'category',
    instructor: 'instructor',
    level: 'level',
    duration: 'duration',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const UserCourseScalarFieldEnum: {
    userId: 'userId',
    courseId: 'courseId',
    progress: 'progress',
    watchedLessons: 'watchedLessons',
    attendedLive: 'attendedLive',
    enrolledAt: 'enrolledAt'
  };

  export type UserCourseScalarFieldEnum = (typeof UserCourseScalarFieldEnum)[keyof typeof UserCourseScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    duration: 'duration',
    videoUrl: 'videoUrl',
    order: 'order',
    courseId: 'courseId'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LiveSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    duration: 'duration',
    instructor: 'instructor',
    link: 'link',
    courseId: 'courseId'
  };

  export type LiveSessionScalarFieldEnum = (typeof LiveSessionScalarFieldEnum)[keyof typeof LiveSessionScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    questions: 'questions',
    courseId: 'courseId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    courseId: 'courseId'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    questions: 'questions',
    duration: 'duration',
    courseId: 'courseId'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    score: 'score',
    content: 'content',
    answers: 'answers',
    status: 'status',
    userId: 'userId',
    quizId: 'quizId',
    assignmentId: 'assignmentId',
    examId: 'examId',
    submittedAt: 'submittedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    certificateNumber: 'certificateNumber',
    issuedDate: 'issuedDate',
    userId: 'userId',
    courseId: 'courseId',
    studentName: 'studentName',
    courseName: 'courseName'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    enrolledCourses?: UserCourseListRelationFilter
    submissions?: SubmissionListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enrolledCourses?: UserCourseOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    enrolledCourses?: UserCourseListRelationFilter
    submissions?: SubmissionListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    thumbnail?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    level?: StringFilter<"Course"> | string
    duration?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    lessons?: LessonListRelationFilter
    liveSessions?: LiveSessionListRelationFilter
    assignments?: AssignmentListRelationFilter
    quizzes?: QuizListRelationFilter
    exams?: ExamListRelationFilter
    enrolledUsers?: UserCourseListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessons?: LessonOrderByRelationAggregateInput
    liveSessions?: LiveSessionOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
    enrolledUsers?: UserCourseOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    thumbnail?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    level?: StringFilter<"Course"> | string
    duration?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    lessons?: LessonListRelationFilter
    liveSessions?: LiveSessionListRelationFilter
    assignments?: AssignmentListRelationFilter
    quizzes?: QuizListRelationFilter
    exams?: ExamListRelationFilter
    enrolledUsers?: UserCourseListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    thumbnail?: StringWithAggregatesFilter<"Course"> | string
    category?: StringWithAggregatesFilter<"Course"> | string
    instructor?: StringWithAggregatesFilter<"Course"> | string
    level?: StringWithAggregatesFilter<"Course"> | string
    duration?: StringWithAggregatesFilter<"Course"> | string
    price?: FloatWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type UserCourseWhereInput = {
    AND?: UserCourseWhereInput | UserCourseWhereInput[]
    OR?: UserCourseWhereInput[]
    NOT?: UserCourseWhereInput | UserCourseWhereInput[]
    userId?: StringFilter<"UserCourse"> | string
    courseId?: StringFilter<"UserCourse"> | string
    progress?: FloatFilter<"UserCourse"> | number
    watchedLessons?: JsonFilter<"UserCourse">
    attendedLive?: BoolFilter<"UserCourse"> | boolean
    enrolledAt?: DateTimeFilter<"UserCourse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type UserCourseOrderByWithRelationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    watchedLessons?: SortOrder
    attendedLive?: SortOrder
    enrolledAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type UserCourseWhereUniqueInput = Prisma.AtLeast<{
    userId_courseId?: UserCourseUserIdCourseIdCompoundUniqueInput
    AND?: UserCourseWhereInput | UserCourseWhereInput[]
    OR?: UserCourseWhereInput[]
    NOT?: UserCourseWhereInput | UserCourseWhereInput[]
    userId?: StringFilter<"UserCourse"> | string
    courseId?: StringFilter<"UserCourse"> | string
    progress?: FloatFilter<"UserCourse"> | number
    watchedLessons?: JsonFilter<"UserCourse">
    attendedLive?: BoolFilter<"UserCourse"> | boolean
    enrolledAt?: DateTimeFilter<"UserCourse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "userId_courseId">

  export type UserCourseOrderByWithAggregationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    watchedLessons?: SortOrder
    attendedLive?: SortOrder
    enrolledAt?: SortOrder
    _count?: UserCourseCountOrderByAggregateInput
    _avg?: UserCourseAvgOrderByAggregateInput
    _max?: UserCourseMaxOrderByAggregateInput
    _min?: UserCourseMinOrderByAggregateInput
    _sum?: UserCourseSumOrderByAggregateInput
  }

  export type UserCourseScalarWhereWithAggregatesInput = {
    AND?: UserCourseScalarWhereWithAggregatesInput | UserCourseScalarWhereWithAggregatesInput[]
    OR?: UserCourseScalarWhereWithAggregatesInput[]
    NOT?: UserCourseScalarWhereWithAggregatesInput | UserCourseScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserCourse"> | string
    courseId?: StringWithAggregatesFilter<"UserCourse"> | string
    progress?: FloatWithAggregatesFilter<"UserCourse"> | number
    watchedLessons?: JsonWithAggregatesFilter<"UserCourse">
    attendedLive?: BoolWithAggregatesFilter<"UserCourse"> | boolean
    enrolledAt?: DateTimeWithAggregatesFilter<"UserCourse"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    duration?: StringFilter<"Lesson"> | string
    videoUrl?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    courseId?: StringFilter<"Lesson"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    duration?: StringFilter<"Lesson"> | string
    videoUrl?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    courseId?: StringFilter<"Lesson"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    duration?: StringWithAggregatesFilter<"Lesson"> | string
    videoUrl?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    courseId?: StringWithAggregatesFilter<"Lesson"> | string
  }

  export type LiveSessionWhereInput = {
    AND?: LiveSessionWhereInput | LiveSessionWhereInput[]
    OR?: LiveSessionWhereInput[]
    NOT?: LiveSessionWhereInput | LiveSessionWhereInput[]
    id?: StringFilter<"LiveSession"> | string
    title?: StringFilter<"LiveSession"> | string
    date?: DateTimeFilter<"LiveSession"> | Date | string
    duration?: StringFilter<"LiveSession"> | string
    instructor?: StringFilter<"LiveSession"> | string
    link?: StringFilter<"LiveSession"> | string
    courseId?: StringFilter<"LiveSession"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type LiveSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    link?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type LiveSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveSessionWhereInput | LiveSessionWhereInput[]
    OR?: LiveSessionWhereInput[]
    NOT?: LiveSessionWhereInput | LiveSessionWhereInput[]
    title?: StringFilter<"LiveSession"> | string
    date?: DateTimeFilter<"LiveSession"> | Date | string
    duration?: StringFilter<"LiveSession"> | string
    instructor?: StringFilter<"LiveSession"> | string
    link?: StringFilter<"LiveSession"> | string
    courseId?: StringFilter<"LiveSession"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type LiveSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    link?: SortOrder
    courseId?: SortOrder
    _count?: LiveSessionCountOrderByAggregateInput
    _max?: LiveSessionMaxOrderByAggregateInput
    _min?: LiveSessionMinOrderByAggregateInput
  }

  export type LiveSessionScalarWhereWithAggregatesInput = {
    AND?: LiveSessionScalarWhereWithAggregatesInput | LiveSessionScalarWhereWithAggregatesInput[]
    OR?: LiveSessionScalarWhereWithAggregatesInput[]
    NOT?: LiveSessionScalarWhereWithAggregatesInput | LiveSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LiveSession"> | string
    title?: StringWithAggregatesFilter<"LiveSession"> | string
    date?: DateTimeWithAggregatesFilter<"LiveSession"> | Date | string
    duration?: StringWithAggregatesFilter<"LiveSession"> | string
    instructor?: StringWithAggregatesFilter<"LiveSession"> | string
    link?: StringWithAggregatesFilter<"LiveSession"> | string
    courseId?: StringWithAggregatesFilter<"LiveSession"> | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    questions?: JsonFilter<"Quiz">
    courseId?: StringFilter<"Quiz"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    questions?: JsonFilter<"Quiz">
    courseId?: StringFilter<"Quiz"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    courseId?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    questions?: JsonWithAggregatesFilter<"Quiz">
    courseId?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    courseId?: StringFilter<"Assignment"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    courseId?: StringFilter<"Assignment"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    courseId?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringWithAggregatesFilter<"Assignment"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    courseId?: StringWithAggregatesFilter<"Assignment"> | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    questions?: JsonFilter<"Exam">
    duration?: IntFilter<"Exam"> | number
    courseId?: StringFilter<"Exam"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    questions?: JsonFilter<"Exam">
    duration?: IntFilter<"Exam"> | number
    courseId?: StringFilter<"Exam"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    questions?: JsonWithAggregatesFilter<"Exam">
    duration?: IntWithAggregatesFilter<"Exam"> | number
    courseId?: StringWithAggregatesFilter<"Exam"> | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    type?: StringFilter<"Submission"> | string
    score?: FloatNullableFilter<"Submission"> | number | null
    content?: JsonNullableFilter<"Submission">
    answers?: JsonNullableFilter<"Submission">
    status?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    quizId?: StringNullableFilter<"Submission"> | string | null
    assignmentId?: StringNullableFilter<"Submission"> | string | null
    examId?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
    exam?: XOR<ExamNullableScalarRelationFilter, ExamWhereInput> | null
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    score?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    quizId?: SortOrderInput | SortOrder
    assignmentId?: SortOrderInput | SortOrder
    examId?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    assignment?: AssignmentOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    type?: StringFilter<"Submission"> | string
    score?: FloatNullableFilter<"Submission"> | number | null
    content?: JsonNullableFilter<"Submission">
    answers?: JsonNullableFilter<"Submission">
    status?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    quizId?: StringNullableFilter<"Submission"> | string | null
    assignmentId?: StringNullableFilter<"Submission"> | string | null
    examId?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
    exam?: XOR<ExamNullableScalarRelationFilter, ExamWhereInput> | null
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    score?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    quizId?: SortOrderInput | SortOrder
    assignmentId?: SortOrderInput | SortOrder
    examId?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    type?: StringWithAggregatesFilter<"Submission"> | string
    score?: FloatNullableWithAggregatesFilter<"Submission"> | number | null
    content?: JsonNullableWithAggregatesFilter<"Submission">
    answers?: JsonNullableWithAggregatesFilter<"Submission">
    status?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    quizId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    assignmentId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    examId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    certificateNumber?: StringFilter<"Certificate"> | string
    issuedDate?: DateTimeFilter<"Certificate"> | Date | string
    userId?: StringFilter<"Certificate"> | string
    courseId?: StringFilter<"Certificate"> | string
    studentName?: StringFilter<"Certificate"> | string
    courseName?: StringFilter<"Certificate"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    certificateNumber?: SortOrder
    issuedDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    studentName?: SortOrder
    courseName?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    certificateNumber?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    issuedDate?: DateTimeFilter<"Certificate"> | Date | string
    userId?: StringFilter<"Certificate"> | string
    courseId?: StringFilter<"Certificate"> | string
    studentName?: StringFilter<"Certificate"> | string
    courseName?: StringFilter<"Certificate"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "certificateNumber">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    certificateNumber?: SortOrder
    issuedDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    studentName?: SortOrder
    courseName?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    certificateNumber?: StringWithAggregatesFilter<"Certificate"> | string
    issuedDate?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    userId?: StringWithAggregatesFilter<"Certificate"> | string
    courseId?: StringWithAggregatesFilter<"Certificate"> | string
    studentName?: StringWithAggregatesFilter<"Certificate"> | string
    courseName?: StringWithAggregatesFilter<"Certificate"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: UserCourseCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: UserCourseUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: UserCourseUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: UserCourseUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionCreateNestedManyWithoutCourseInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    quizzes?: QuizCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseCreateNestedManyWithoutCourseInput
    certificates?: CertificateCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionUncheckedCreateNestedManyWithoutCourseInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseUncheckedCreateNestedManyWithoutCourseInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUncheckedUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUncheckedUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseCreateInput = {
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
    user: UserCreateNestedOneWithoutEnrolledCoursesInput
    course: CourseCreateNestedOneWithoutEnrolledUsersInput
  }

  export type UserCourseUncheckedCreateInput = {
    userId: string
    courseId: string
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
  }

  export type UserCourseUpdateInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolledCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrolledUsersNestedInput
  }

  export type UserCourseUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseCreateManyInput = {
    userId: string
    courseId: string
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
  }

  export type UserCourseUpdateManyMutationInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    duration: string
    videoUrl: string
    order: number
    course: CourseCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    title: string
    duration: string
    videoUrl: string
    order: number
    courseId: string
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonCreateManyInput = {
    id?: string
    title: string
    duration: string
    videoUrl: string
    order: number
    courseId: string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type LiveSessionCreateInput = {
    id?: string
    title: string
    date: Date | string
    duration: string
    instructor: string
    link: string
    course: CourseCreateNestedOneWithoutLiveSessionsInput
  }

  export type LiveSessionUncheckedCreateInput = {
    id?: string
    title: string
    date: Date | string
    duration: string
    instructor: string
    link: string
    courseId: string
  }

  export type LiveSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutLiveSessionsNestedInput
  }

  export type LiveSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type LiveSessionCreateManyInput = {
    id?: string
    title: string
    date: Date | string
    duration: string
    instructor: string
    link: string
    courseId: string
  }

  export type LiveSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type LiveSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    course: CourseCreateNestedOneWithoutQuizzesInput
    submissions?: SubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    courseId: string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    course?: CourseUpdateOneRequiredWithoutQuizzesNestedInput
    submissions?: SubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    courseId?: StringFieldUpdateOperationsInput | string
    submissions?: SubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    courseId: string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    course: CourseCreateNestedOneWithoutAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    courseId: string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    courseId: string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
    course: CourseCreateNestedOneWithoutExamsInput
    submissions?: SubmissionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
    courseId: string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutExamsNestedInput
    submissions?: SubmissionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    submissions?: SubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
    courseId: string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    quiz?: QuizCreateNestedOneWithoutSubmissionsInput
    assignment?: AssignmentCreateNestedOneWithoutSubmissionsInput
    exam?: ExamCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    quizId?: string | null
    assignmentId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    quiz?: QuizUpdateOneWithoutSubmissionsNestedInput
    assignment?: AssignmentUpdateOneWithoutSubmissionsNestedInput
    exam?: ExamUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    quizId?: string | null
    assignmentId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    studentName: string
    courseName: string
    user: UserCreateNestedOneWithoutCertificatesInput
    course: CourseCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    userId: string
    courseId: string
    studentName: string
    courseName: string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
    course?: CourseUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    userId: string
    courseId: string
    studentName: string
    courseName: string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCourseListRelationFilter = {
    every?: UserCourseWhereInput
    some?: UserCourseWhereInput
    none?: UserCourseWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LiveSessionListRelationFilter = {
    every?: LiveSessionWhereInput
    some?: LiveSessionWhereInput
    none?: LiveSessionWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LiveSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type UserCourseUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type UserCourseCountOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    watchedLessons?: SortOrder
    attendedLive?: SortOrder
    enrolledAt?: SortOrder
  }

  export type UserCourseAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserCourseMaxOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    attendedLive?: SortOrder
    enrolledAt?: SortOrder
  }

  export type UserCourseMinOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    attendedLive?: SortOrder
    enrolledAt?: SortOrder
  }

  export type UserCourseSumOrderByAggregateInput = {
    progress?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    videoUrl?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LiveSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    link?: SortOrder
    courseId?: SortOrder
  }

  export type LiveSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    link?: SortOrder
    courseId?: SortOrder
  }

  export type LiveSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    instructor?: SortOrder
    link?: SortOrder
    courseId?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    courseId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    courseId?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    courseId?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    courseId?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    questions?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuizNullableScalarRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type AssignmentNullableScalarRelationFilter = {
    is?: AssignmentWhereInput | null
    isNot?: AssignmentWhereInput | null
  }

  export type ExamNullableScalarRelationFilter = {
    is?: ExamWhereInput | null
    isNot?: ExamWhereInput | null
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    content?: SortOrder
    answers?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    assignmentId?: SortOrder
    examId?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    assignmentId?: SortOrder
    examId?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    assignmentId?: SortOrder
    examId?: SortOrder
    submittedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    certificateNumber?: SortOrder
    issuedDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    studentName?: SortOrder
    courseName?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    certificateNumber?: SortOrder
    issuedDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    studentName?: SortOrder
    courseName?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    certificateNumber?: SortOrder
    issuedDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    studentName?: SortOrder
    courseName?: SortOrder
  }

  export type UserCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseCreateWithoutUserInput, UserCourseUncheckedCreateWithoutUserInput> | UserCourseCreateWithoutUserInput[] | UserCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutUserInput | UserCourseCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseCreateManyUserInputEnvelope
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type UserCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseCreateWithoutUserInput, UserCourseUncheckedCreateWithoutUserInput> | UserCourseCreateWithoutUserInput[] | UserCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutUserInput | UserCourseCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseCreateManyUserInputEnvelope
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseCreateWithoutUserInput, UserCourseUncheckedCreateWithoutUserInput> | UserCourseCreateWithoutUserInput[] | UserCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutUserInput | UserCourseCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseUpsertWithWhereUniqueWithoutUserInput | UserCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseCreateManyUserInputEnvelope
    set?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    disconnect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    delete?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    update?: UserCourseUpdateWithWhereUniqueWithoutUserInput | UserCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseUpdateManyWithWhereWithoutUserInput | UserCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseScalarWhereInput | UserCourseScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseCreateWithoutUserInput, UserCourseUncheckedCreateWithoutUserInput> | UserCourseCreateWithoutUserInput[] | UserCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutUserInput | UserCourseCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseUpsertWithWhereUniqueWithoutUserInput | UserCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseCreateManyUserInputEnvelope
    set?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    disconnect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    delete?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    update?: UserCourseUpdateWithWhereUniqueWithoutUserInput | UserCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseUpdateManyWithWhereWithoutUserInput | UserCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseScalarWhereInput | UserCourseScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type LessonCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LiveSessionCreateNestedManyWithoutCourseInput = {
    create?: XOR<LiveSessionCreateWithoutCourseInput, LiveSessionUncheckedCreateWithoutCourseInput> | LiveSessionCreateWithoutCourseInput[] | LiveSessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LiveSessionCreateOrConnectWithoutCourseInput | LiveSessionCreateOrConnectWithoutCourseInput[]
    createMany?: LiveSessionCreateManyCourseInputEnvelope
    connect?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutCourseInput = {
    create?: XOR<QuizCreateWithoutCourseInput, QuizUncheckedCreateWithoutCourseInput> | QuizCreateWithoutCourseInput[] | QuizUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCourseInput | QuizCreateOrConnectWithoutCourseInput[]
    createMany?: QuizCreateManyCourseInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type UserCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseCreateWithoutCourseInput, UserCourseUncheckedCreateWithoutCourseInput> | UserCourseCreateWithoutCourseInput[] | UserCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutCourseInput | UserCourseCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseCreateManyCourseInputEnvelope
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutCourseInput = {
    create?: XOR<CertificateCreateWithoutCourseInput, CertificateUncheckedCreateWithoutCourseInput> | CertificateCreateWithoutCourseInput[] | CertificateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCourseInput | CertificateCreateOrConnectWithoutCourseInput[]
    createMany?: CertificateCreateManyCourseInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LiveSessionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LiveSessionCreateWithoutCourseInput, LiveSessionUncheckedCreateWithoutCourseInput> | LiveSessionCreateWithoutCourseInput[] | LiveSessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LiveSessionCreateOrConnectWithoutCourseInput | LiveSessionCreateOrConnectWithoutCourseInput[]
    createMany?: LiveSessionCreateManyCourseInputEnvelope
    connect?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<QuizCreateWithoutCourseInput, QuizUncheckedCreateWithoutCourseInput> | QuizCreateWithoutCourseInput[] | QuizUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCourseInput | QuizCreateOrConnectWithoutCourseInput[]
    createMany?: QuizCreateManyCourseInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type UserCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseCreateWithoutCourseInput, UserCourseUncheckedCreateWithoutCourseInput> | UserCourseCreateWithoutCourseInput[] | UserCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutCourseInput | UserCourseCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseCreateManyCourseInputEnvelope
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CertificateCreateWithoutCourseInput, CertificateUncheckedCreateWithoutCourseInput> | CertificateCreateWithoutCourseInput[] | CertificateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCourseInput | CertificateCreateOrConnectWithoutCourseInput[]
    createMany?: CertificateCreateManyCourseInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LessonUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LiveSessionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LiveSessionCreateWithoutCourseInput, LiveSessionUncheckedCreateWithoutCourseInput> | LiveSessionCreateWithoutCourseInput[] | LiveSessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LiveSessionCreateOrConnectWithoutCourseInput | LiveSessionCreateOrConnectWithoutCourseInput[]
    upsert?: LiveSessionUpsertWithWhereUniqueWithoutCourseInput | LiveSessionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LiveSessionCreateManyCourseInputEnvelope
    set?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    disconnect?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    delete?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    connect?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    update?: LiveSessionUpdateWithWhereUniqueWithoutCourseInput | LiveSessionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LiveSessionUpdateManyWithWhereWithoutCourseInput | LiveSessionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LiveSessionScalarWhereInput | LiveSessionScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutCourseInput | AssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutCourseInput | AssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutCourseInput | AssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutCourseNestedInput = {
    create?: XOR<QuizCreateWithoutCourseInput, QuizUncheckedCreateWithoutCourseInput> | QuizCreateWithoutCourseInput[] | QuizUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCourseInput | QuizCreateOrConnectWithoutCourseInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCourseInput | QuizUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: QuizCreateManyCourseInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCourseInput | QuizUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCourseInput | QuizUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCourseInput | ExamUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCourseInput | ExamUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCourseInput | ExamUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type UserCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseCreateWithoutCourseInput, UserCourseUncheckedCreateWithoutCourseInput> | UserCourseCreateWithoutCourseInput[] | UserCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutCourseInput | UserCourseCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseUpsertWithWhereUniqueWithoutCourseInput | UserCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseCreateManyCourseInputEnvelope
    set?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    disconnect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    delete?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    update?: UserCourseUpdateWithWhereUniqueWithoutCourseInput | UserCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseUpdateManyWithWhereWithoutCourseInput | UserCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseScalarWhereInput | UserCourseScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CertificateCreateWithoutCourseInput, CertificateUncheckedCreateWithoutCourseInput> | CertificateCreateWithoutCourseInput[] | CertificateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCourseInput | CertificateCreateOrConnectWithoutCourseInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutCourseInput | CertificateUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CertificateCreateManyCourseInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutCourseInput | CertificateUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutCourseInput | CertificateUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LiveSessionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LiveSessionCreateWithoutCourseInput, LiveSessionUncheckedCreateWithoutCourseInput> | LiveSessionCreateWithoutCourseInput[] | LiveSessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LiveSessionCreateOrConnectWithoutCourseInput | LiveSessionCreateOrConnectWithoutCourseInput[]
    upsert?: LiveSessionUpsertWithWhereUniqueWithoutCourseInput | LiveSessionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LiveSessionCreateManyCourseInputEnvelope
    set?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    disconnect?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    delete?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    connect?: LiveSessionWhereUniqueInput | LiveSessionWhereUniqueInput[]
    update?: LiveSessionUpdateWithWhereUniqueWithoutCourseInput | LiveSessionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LiveSessionUpdateManyWithWhereWithoutCourseInput | LiveSessionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LiveSessionScalarWhereInput | LiveSessionScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutCourseInput | AssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutCourseInput | AssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutCourseInput | AssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<QuizCreateWithoutCourseInput, QuizUncheckedCreateWithoutCourseInput> | QuizCreateWithoutCourseInput[] | QuizUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCourseInput | QuizCreateOrConnectWithoutCourseInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCourseInput | QuizUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: QuizCreateManyCourseInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCourseInput | QuizUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCourseInput | QuizUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCourseInput | ExamUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCourseInput | ExamUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCourseInput | ExamUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type UserCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseCreateWithoutCourseInput, UserCourseUncheckedCreateWithoutCourseInput> | UserCourseCreateWithoutCourseInput[] | UserCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseCreateOrConnectWithoutCourseInput | UserCourseCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseUpsertWithWhereUniqueWithoutCourseInput | UserCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseCreateManyCourseInputEnvelope
    set?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    disconnect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    delete?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    connect?: UserCourseWhereUniqueInput | UserCourseWhereUniqueInput[]
    update?: UserCourseUpdateWithWhereUniqueWithoutCourseInput | UserCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseUpdateManyWithWhereWithoutCourseInput | UserCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseScalarWhereInput | UserCourseScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CertificateCreateWithoutCourseInput, CertificateUncheckedCreateWithoutCourseInput> | CertificateCreateWithoutCourseInput[] | CertificateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCourseInput | CertificateCreateOrConnectWithoutCourseInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutCourseInput | CertificateUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CertificateCreateManyCourseInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutCourseInput | CertificateUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutCourseInput | CertificateUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEnrolledCoursesInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrolledUsersInput = {
    create?: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledUsersInput
    connect?: CourseWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutEnrolledCoursesNestedInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput
    upsert?: UserUpsertWithoutEnrolledCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrolledCoursesInput, UserUpdateWithoutEnrolledCoursesInput>, UserUncheckedUpdateWithoutEnrolledCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrolledUsersNestedInput = {
    create?: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledUsersInput
    upsert?: CourseUpsertWithoutEnrolledUsersInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrolledUsersInput, CourseUpdateWithoutEnrolledUsersInput>, CourseUncheckedUpdateWithoutEnrolledUsersInput>
  }

  export type CourseCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    connect?: CourseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    upsert?: CourseUpsertWithoutLessonsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLessonsInput, CourseUpdateWithoutLessonsInput>, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseCreateNestedOneWithoutLiveSessionsInput = {
    create?: XOR<CourseCreateWithoutLiveSessionsInput, CourseUncheckedCreateWithoutLiveSessionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLiveSessionsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutLiveSessionsNestedInput = {
    create?: XOR<CourseCreateWithoutLiveSessionsInput, CourseUncheckedCreateWithoutLiveSessionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLiveSessionsInput
    upsert?: CourseUpsertWithoutLiveSessionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLiveSessionsInput, CourseUpdateWithoutLiveSessionsInput>, CourseUncheckedUpdateWithoutLiveSessionsInput>
  }

  export type CourseCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<CourseCreateWithoutQuizzesInput, CourseUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutQuizzesInput
    connect?: CourseWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutQuizInput = {
    create?: XOR<SubmissionCreateWithoutQuizInput, SubmissionUncheckedCreateWithoutQuizInput> | SubmissionCreateWithoutQuizInput[] | SubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuizInput | SubmissionCreateOrConnectWithoutQuizInput[]
    createMany?: SubmissionCreateManyQuizInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<SubmissionCreateWithoutQuizInput, SubmissionUncheckedCreateWithoutQuizInput> | SubmissionCreateWithoutQuizInput[] | SubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuizInput | SubmissionCreateOrConnectWithoutQuizInput[]
    createMany?: SubmissionCreateManyQuizInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<CourseCreateWithoutQuizzesInput, CourseUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutQuizzesInput
    upsert?: CourseUpsertWithoutQuizzesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutQuizzesInput, CourseUpdateWithoutQuizzesInput>, CourseUncheckedUpdateWithoutQuizzesInput>
  }

  export type SubmissionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<SubmissionCreateWithoutQuizInput, SubmissionUncheckedCreateWithoutQuizInput> | SubmissionCreateWithoutQuizInput[] | SubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuizInput | SubmissionCreateOrConnectWithoutQuizInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutQuizInput | SubmissionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: SubmissionCreateManyQuizInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutQuizInput | SubmissionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutQuizInput | SubmissionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<SubmissionCreateWithoutQuizInput, SubmissionUncheckedCreateWithoutQuizInput> | SubmissionCreateWithoutQuizInput[] | SubmissionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuizInput | SubmissionCreateOrConnectWithoutQuizInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutQuizInput | SubmissionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: SubmissionCreateManyQuizInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutQuizInput | SubmissionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutQuizInput | SubmissionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAssignmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAssignmentsInput
    upsert?: CourseUpsertWithoutAssignmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutAssignmentsInput, CourseUpdateWithoutAssignmentsInput>, CourseUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutExamsInput = {
    create?: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamsInput
    connect?: CourseWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutExamInput = {
    create?: XOR<SubmissionCreateWithoutExamInput, SubmissionUncheckedCreateWithoutExamInput> | SubmissionCreateWithoutExamInput[] | SubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutExamInput | SubmissionCreateOrConnectWithoutExamInput[]
    createMany?: SubmissionCreateManyExamInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<SubmissionCreateWithoutExamInput, SubmissionUncheckedCreateWithoutExamInput> | SubmissionCreateWithoutExamInput[] | SubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutExamInput | SubmissionCreateOrConnectWithoutExamInput[]
    createMany?: SubmissionCreateManyExamInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamsInput
    upsert?: CourseUpsertWithoutExamsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutExamsInput, CourseUpdateWithoutExamsInput>, CourseUncheckedUpdateWithoutExamsInput>
  }

  export type SubmissionUpdateManyWithoutExamNestedInput = {
    create?: XOR<SubmissionCreateWithoutExamInput, SubmissionUncheckedCreateWithoutExamInput> | SubmissionCreateWithoutExamInput[] | SubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutExamInput | SubmissionCreateOrConnectWithoutExamInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutExamInput | SubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: SubmissionCreateManyExamInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutExamInput | SubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutExamInput | SubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<SubmissionCreateWithoutExamInput, SubmissionUncheckedCreateWithoutExamInput> | SubmissionCreateWithoutExamInput[] | SubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutExamInput | SubmissionCreateOrConnectWithoutExamInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutExamInput | SubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: SubmissionCreateManyExamInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutExamInput | SubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutExamInput | SubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSubmissionsInput
    connect?: QuizWhereUniqueInput
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutSubmissionsInput
    connect?: ExamWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuizUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSubmissionsInput
    upsert?: QuizUpsertWithoutSubmissionsInput
    disconnect?: QuizWhereInput | boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutSubmissionsInput, QuizUpdateWithoutSubmissionsInput>, QuizUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    disconnect?: AssignmentWhereInput | boolean
    delete?: AssignmentWhereInput | boolean
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, AssignmentUpdateWithoutSubmissionsInput>, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ExamUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutSubmissionsInput
    upsert?: ExamUpsertWithoutSubmissionsInput
    disconnect?: ExamWhereInput | boolean
    delete?: ExamWhereInput | boolean
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutSubmissionsInput, ExamUpdateWithoutSubmissionsInput>, ExamUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<CourseCreateWithoutCertificatesInput, CourseUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCertificatesInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type CourseUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<CourseCreateWithoutCertificatesInput, CourseUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCertificatesInput
    upsert?: CourseUpsertWithoutCertificatesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCertificatesInput, CourseUpdateWithoutCertificatesInput>, CourseUncheckedUpdateWithoutCertificatesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCourseCreateWithoutUserInput = {
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrolledUsersInput
  }

  export type UserCourseUncheckedCreateWithoutUserInput = {
    courseId: string
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
  }

  export type UserCourseCreateOrConnectWithoutUserInput = {
    where: UserCourseWhereUniqueInput
    create: XOR<UserCourseCreateWithoutUserInput, UserCourseUncheckedCreateWithoutUserInput>
  }

  export type UserCourseCreateManyUserInputEnvelope = {
    data: UserCourseCreateManyUserInput | UserCourseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    submittedAt?: Date | string
    quiz?: QuizCreateNestedOneWithoutSubmissionsInput
    assignment?: AssignmentCreateNestedOneWithoutSubmissionsInput
    exam?: ExamCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    quizId?: string | null
    assignmentId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutUserInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    studentName: string
    courseName: string
    course: CourseCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    courseId: string
    studentName: string
    courseName: string
  }

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCourseWhereUniqueInput
    update: XOR<UserCourseUpdateWithoutUserInput, UserCourseUncheckedUpdateWithoutUserInput>
    create: XOR<UserCourseCreateWithoutUserInput, UserCourseUncheckedCreateWithoutUserInput>
  }

  export type UserCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCourseWhereUniqueInput
    data: XOR<UserCourseUpdateWithoutUserInput, UserCourseUncheckedUpdateWithoutUserInput>
  }

  export type UserCourseUpdateManyWithWhereWithoutUserInput = {
    where: UserCourseScalarWhereInput
    data: XOR<UserCourseUpdateManyMutationInput, UserCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCourseScalarWhereInput = {
    AND?: UserCourseScalarWhereInput | UserCourseScalarWhereInput[]
    OR?: UserCourseScalarWhereInput[]
    NOT?: UserCourseScalarWhereInput | UserCourseScalarWhereInput[]
    userId?: StringFilter<"UserCourse"> | string
    courseId?: StringFilter<"UserCourse"> | string
    progress?: FloatFilter<"UserCourse"> | number
    watchedLessons?: JsonFilter<"UserCourse">
    attendedLive?: BoolFilter<"UserCourse"> | boolean
    enrolledAt?: DateTimeFilter<"UserCourse"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    type?: StringFilter<"Submission"> | string
    score?: FloatNullableFilter<"Submission"> | number | null
    content?: JsonNullableFilter<"Submission">
    answers?: JsonNullableFilter<"Submission">
    status?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    quizId?: StringNullableFilter<"Submission"> | string | null
    assignmentId?: StringNullableFilter<"Submission"> | string | null
    examId?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
  }

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    certificateNumber?: StringFilter<"Certificate"> | string
    issuedDate?: DateTimeFilter<"Certificate"> | Date | string
    userId?: StringFilter<"Certificate"> | string
    courseId?: StringFilter<"Certificate"> | string
    studentName?: StringFilter<"Certificate"> | string
    courseName?: StringFilter<"Certificate"> | string
  }

  export type LessonCreateWithoutCourseInput = {
    id?: string
    title: string
    duration: string
    videoUrl: string
    order: number
  }

  export type LessonUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    duration: string
    videoUrl: string
    order: number
  }

  export type LessonCreateOrConnectWithoutCourseInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonCreateManyCourseInputEnvelope = {
    data: LessonCreateManyCourseInput | LessonCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type LiveSessionCreateWithoutCourseInput = {
    id?: string
    title: string
    date: Date | string
    duration: string
    instructor: string
    link: string
  }

  export type LiveSessionUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    date: Date | string
    duration: string
    instructor: string
    link: string
  }

  export type LiveSessionCreateOrConnectWithoutCourseInput = {
    where: LiveSessionWhereUniqueInput
    create: XOR<LiveSessionCreateWithoutCourseInput, LiveSessionUncheckedCreateWithoutCourseInput>
  }

  export type LiveSessionCreateManyCourseInputEnvelope = {
    data: LiveSessionCreateManyCourseInput | LiveSessionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutCourseInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutCourseInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput>
  }

  export type AssignmentCreateManyCourseInputEnvelope = {
    data: AssignmentCreateManyCourseInput | AssignmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutCourseInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    submissions?: SubmissionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    submissions?: SubmissionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCourseInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCourseInput, QuizUncheckedCreateWithoutCourseInput>
  }

  export type QuizCreateManyCourseInputEnvelope = {
    data: QuizCreateManyCourseInput | QuizCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutCourseInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
    submissions?: SubmissionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutCourseInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput>
  }

  export type ExamCreateManyCourseInputEnvelope = {
    data: ExamCreateManyCourseInput | ExamCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserCourseCreateWithoutCourseInput = {
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
    user: UserCreateNestedOneWithoutEnrolledCoursesInput
  }

  export type UserCourseUncheckedCreateWithoutCourseInput = {
    userId: string
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
  }

  export type UserCourseCreateOrConnectWithoutCourseInput = {
    where: UserCourseWhereUniqueInput
    create: XOR<UserCourseCreateWithoutCourseInput, UserCourseUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseCreateManyCourseInputEnvelope = {
    data: UserCourseCreateManyCourseInput | UserCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutCourseInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    studentName: string
    courseName: string
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutCourseInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    userId: string
    studentName: string
    courseName: string
  }

  export type CertificateCreateOrConnectWithoutCourseInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutCourseInput, CertificateUncheckedCreateWithoutCourseInput>
  }

  export type CertificateCreateManyCourseInputEnvelope = {
    data: CertificateCreateManyCourseInput | CertificateCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourseInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourseInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    duration?: StringFilter<"Lesson"> | string
    videoUrl?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    courseId?: StringFilter<"Lesson"> | string
  }

  export type LiveSessionUpsertWithWhereUniqueWithoutCourseInput = {
    where: LiveSessionWhereUniqueInput
    update: XOR<LiveSessionUpdateWithoutCourseInput, LiveSessionUncheckedUpdateWithoutCourseInput>
    create: XOR<LiveSessionCreateWithoutCourseInput, LiveSessionUncheckedCreateWithoutCourseInput>
  }

  export type LiveSessionUpdateWithWhereUniqueWithoutCourseInput = {
    where: LiveSessionWhereUniqueInput
    data: XOR<LiveSessionUpdateWithoutCourseInput, LiveSessionUncheckedUpdateWithoutCourseInput>
  }

  export type LiveSessionUpdateManyWithWhereWithoutCourseInput = {
    where: LiveSessionScalarWhereInput
    data: XOR<LiveSessionUpdateManyMutationInput, LiveSessionUncheckedUpdateManyWithoutCourseInput>
  }

  export type LiveSessionScalarWhereInput = {
    AND?: LiveSessionScalarWhereInput | LiveSessionScalarWhereInput[]
    OR?: LiveSessionScalarWhereInput[]
    NOT?: LiveSessionScalarWhereInput | LiveSessionScalarWhereInput[]
    id?: StringFilter<"LiveSession"> | string
    title?: StringFilter<"LiveSession"> | string
    date?: DateTimeFilter<"LiveSession"> | Date | string
    duration?: StringFilter<"LiveSession"> | string
    instructor?: StringFilter<"LiveSession"> | string
    link?: StringFilter<"LiveSession"> | string
    courseId?: StringFilter<"LiveSession"> | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutCourseInput, AssignmentUncheckedUpdateWithoutCourseInput>
    create: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutCourseInput, AssignmentUncheckedUpdateWithoutCourseInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutCourseInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    courseId?: StringFilter<"Assignment"> | string
  }

  export type QuizUpsertWithWhereUniqueWithoutCourseInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCourseInput, QuizUncheckedUpdateWithoutCourseInput>
    create: XOR<QuizCreateWithoutCourseInput, QuizUncheckedCreateWithoutCourseInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCourseInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCourseInput, QuizUncheckedUpdateWithoutCourseInput>
  }

  export type QuizUpdateManyWithWhereWithoutCourseInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCourseInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    questions?: JsonFilter<"Quiz">
    courseId?: StringFilter<"Quiz"> | string
  }

  export type ExamUpsertWithWhereUniqueWithoutCourseInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutCourseInput, ExamUncheckedUpdateWithoutCourseInput>
    create: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutCourseInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutCourseInput, ExamUncheckedUpdateWithoutCourseInput>
  }

  export type ExamUpdateManyWithWhereWithoutCourseInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutCourseInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    questions?: JsonFilter<"Exam">
    duration?: IntFilter<"Exam"> | number
    courseId?: StringFilter<"Exam"> | string
  }

  export type UserCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: UserCourseWhereUniqueInput
    update: XOR<UserCourseUpdateWithoutCourseInput, UserCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCourseCreateWithoutCourseInput, UserCourseUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: UserCourseWhereUniqueInput
    data: XOR<UserCourseUpdateWithoutCourseInput, UserCourseUncheckedUpdateWithoutCourseInput>
  }

  export type UserCourseUpdateManyWithWhereWithoutCourseInput = {
    where: UserCourseScalarWhereInput
    data: XOR<UserCourseUpdateManyMutationInput, UserCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type CertificateUpsertWithWhereUniqueWithoutCourseInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutCourseInput, CertificateUncheckedUpdateWithoutCourseInput>
    create: XOR<CertificateCreateWithoutCourseInput, CertificateUncheckedCreateWithoutCourseInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutCourseInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutCourseInput, CertificateUncheckedUpdateWithoutCourseInput>
  }

  export type CertificateUpdateManyWithWhereWithoutCourseInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserCreateWithoutEnrolledCoursesInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrolledCoursesInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrolledCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
  }

  export type CourseCreateWithoutEnrolledUsersInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionCreateNestedManyWithoutCourseInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    quizzes?: QuizCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    certificates?: CertificateCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrolledUsersInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionUncheckedCreateNestedManyWithoutCourseInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrolledUsersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
  }

  export type UserUpsertWithoutEnrolledCoursesInput = {
    update: XOR<UserUpdateWithoutEnrolledCoursesInput, UserUncheckedUpdateWithoutEnrolledCoursesInput>
    create: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrolledCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrolledCoursesInput, UserUncheckedUpdateWithoutEnrolledCoursesInput>
  }

  export type UserUpdateWithoutEnrolledCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrolledCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutEnrolledUsersInput = {
    update: XOR<CourseUpdateWithoutEnrolledUsersInput, CourseUncheckedUpdateWithoutEnrolledUsersInput>
    create: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrolledUsersInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrolledUsersInput, CourseUncheckedUpdateWithoutEnrolledUsersInput>
  }

  export type CourseUpdateWithoutEnrolledUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrolledUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUncheckedUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    liveSessions?: LiveSessionCreateNestedManyWithoutCourseInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    quizzes?: QuizCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseCreateNestedManyWithoutCourseInput
    certificates?: CertificateCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    liveSessions?: LiveSessionUncheckedCreateNestedManyWithoutCourseInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseUncheckedCreateNestedManyWithoutCourseInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutLessonsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
  }

  export type CourseUpsertWithoutLessonsInput = {
    update: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveSessions?: LiveSessionUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveSessions?: LiveSessionUncheckedUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUncheckedUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutLiveSessionsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    quizzes?: QuizCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseCreateNestedManyWithoutCourseInput
    certificates?: CertificateCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutLiveSessionsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseUncheckedCreateNestedManyWithoutCourseInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutLiveSessionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLiveSessionsInput, CourseUncheckedCreateWithoutLiveSessionsInput>
  }

  export type CourseUpsertWithoutLiveSessionsInput = {
    update: XOR<CourseUpdateWithoutLiveSessionsInput, CourseUncheckedUpdateWithoutLiveSessionsInput>
    create: XOR<CourseCreateWithoutLiveSessionsInput, CourseUncheckedCreateWithoutLiveSessionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLiveSessionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLiveSessionsInput, CourseUncheckedUpdateWithoutLiveSessionsInput>
  }

  export type CourseUpdateWithoutLiveSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutLiveSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUncheckedUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionCreateNestedManyWithoutCourseInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseCreateNestedManyWithoutCourseInput
    certificates?: CertificateCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionUncheckedCreateNestedManyWithoutCourseInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseUncheckedCreateNestedManyWithoutCourseInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutQuizzesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutQuizzesInput, CourseUncheckedCreateWithoutQuizzesInput>
  }

  export type SubmissionCreateWithoutQuizInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    assignment?: AssignmentCreateNestedOneWithoutSubmissionsInput
    exam?: ExamCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutQuizInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    assignmentId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutQuizInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutQuizInput, SubmissionUncheckedCreateWithoutQuizInput>
  }

  export type SubmissionCreateManyQuizInputEnvelope = {
    data: SubmissionCreateManyQuizInput | SubmissionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutQuizzesInput = {
    update: XOR<CourseUpdateWithoutQuizzesInput, CourseUncheckedUpdateWithoutQuizzesInput>
    create: XOR<CourseCreateWithoutQuizzesInput, CourseUncheckedCreateWithoutQuizzesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutQuizzesInput, CourseUncheckedUpdateWithoutQuizzesInput>
  }

  export type CourseUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUncheckedUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUncheckedUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutQuizInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutQuizInput, SubmissionUncheckedUpdateWithoutQuizInput>
    create: XOR<SubmissionCreateWithoutQuizInput, SubmissionUncheckedCreateWithoutQuizInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutQuizInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutQuizInput, SubmissionUncheckedUpdateWithoutQuizInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutQuizInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutQuizInput>
  }

  export type CourseCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionCreateNestedManyWithoutCourseInput
    quizzes?: QuizCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseCreateNestedManyWithoutCourseInput
    certificates?: CertificateCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionUncheckedCreateNestedManyWithoutCourseInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseUncheckedCreateNestedManyWithoutCourseInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutAssignmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
  }

  export type SubmissionCreateWithoutAssignmentInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    quiz?: QuizCreateNestedOneWithoutSubmissionsInput
    exam?: ExamCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    quizId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionCreateManyAssignmentInputEnvelope = {
    data: SubmissionCreateManyAssignmentInput | SubmissionCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutAssignmentsInput = {
    update: XOR<CourseUpdateWithoutAssignmentsInput, CourseUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutAssignmentsInput, CourseUncheckedUpdateWithoutAssignmentsInput>
  }

  export type CourseUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUncheckedUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUncheckedUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type CourseCreateWithoutExamsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionCreateNestedManyWithoutCourseInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    quizzes?: QuizCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseCreateNestedManyWithoutCourseInput
    certificates?: CertificateCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutExamsInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionUncheckedCreateNestedManyWithoutCourseInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseUncheckedCreateNestedManyWithoutCourseInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutExamsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
  }

  export type SubmissionCreateWithoutExamInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    quiz?: QuizCreateNestedOneWithoutSubmissionsInput
    assignment?: AssignmentCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutExamInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    quizId?: string | null
    assignmentId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutExamInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutExamInput, SubmissionUncheckedCreateWithoutExamInput>
  }

  export type SubmissionCreateManyExamInputEnvelope = {
    data: SubmissionCreateManyExamInput | SubmissionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutExamsInput = {
    update: XOR<CourseUpdateWithoutExamsInput, CourseUncheckedUpdateWithoutExamsInput>
    create: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutExamsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutExamsInput, CourseUncheckedUpdateWithoutExamsInput>
  }

  export type CourseUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUncheckedUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUncheckedUpdateManyWithoutCourseNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutExamInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutExamInput, SubmissionUncheckedUpdateWithoutExamInput>
    create: XOR<SubmissionCreateWithoutExamInput, SubmissionUncheckedCreateWithoutExamInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutExamInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutExamInput, SubmissionUncheckedUpdateWithoutExamInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutExamInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutExamInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: UserCourseCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: UserCourseUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type QuizCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    course: CourseCreateNestedOneWithoutQuizzesInput
  }

  export type QuizUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    courseId: string
  }

  export type QuizCreateOrConnectWithoutSubmissionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    course: CourseCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    courseId: string
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type ExamCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
    course: CourseCreateNestedOneWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
    courseId: string
  }

  export type ExamCreateOrConnectWithoutSubmissionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: UserCourseUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: UserCourseUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutSubmissionsInput = {
    update: XOR<QuizUpdateWithoutSubmissionsInput, QuizUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<QuizCreateWithoutSubmissionsInput, QuizUncheckedCreateWithoutSubmissionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutSubmissionsInput, QuizUncheckedUpdateWithoutSubmissionsInput>
  }

  export type QuizUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    course?: CourseUpdateOneRequiredWithoutQuizzesNestedInput
  }

  export type QuizUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamUpsertWithoutSubmissionsInput = {
    update: XOR<ExamUpdateWithoutSubmissionsInput, ExamUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutSubmissionsInput, ExamUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ExamUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutCertificatesInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: UserCourseCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string
    email: string
    password: string
    name: string
    phoneNumber?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: UserCourseUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type CourseCreateWithoutCertificatesInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionCreateNestedManyWithoutCourseInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    quizzes?: QuizCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCertificatesInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    category: string
    instructor: string
    level: string
    duration: string
    price?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    liveSessions?: LiveSessionUncheckedCreateNestedManyWithoutCourseInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    enrolledUsers?: UserCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCertificatesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCertificatesInput, CourseUncheckedCreateWithoutCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: UserCourseUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: UserCourseUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutCertificatesInput = {
    update: XOR<CourseUpdateWithoutCertificatesInput, CourseUncheckedUpdateWithoutCertificatesInput>
    create: XOR<CourseCreateWithoutCertificatesInput, CourseUncheckedCreateWithoutCertificatesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCertificatesInput, CourseUncheckedUpdateWithoutCertificatesInput>
  }

  export type CourseUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    liveSessions?: LiveSessionUncheckedUpdateManyWithoutCourseNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    enrolledUsers?: UserCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCourseCreateManyUserInput = {
    courseId: string
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    quizId?: string | null
    assignmentId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type CertificateCreateManyUserInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    courseId: string
    studentName: string
    courseName: string
  }

  export type UserCourseUpdateWithoutUserInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrolledUsersNestedInput
  }

  export type UserCourseUncheckedUpdateWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseUncheckedUpdateManyWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneWithoutSubmissionsNestedInput
    assignment?: AssignmentUpdateOneWithoutSubmissionsNestedInput
    exam?: ExamUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type LessonCreateManyCourseInput = {
    id?: string
    title: string
    duration: string
    videoUrl: string
    order: number
  }

  export type LiveSessionCreateManyCourseInput = {
    id?: string
    title: string
    date: Date | string
    duration: string
    instructor: string
    link: string
  }

  export type AssignmentCreateManyCourseInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
  }

  export type QuizCreateManyCourseInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
  }

  export type ExamCreateManyCourseInput = {
    id?: string
    title: string
    questions: JsonNullValueInput | InputJsonValue
    duration: number
  }

  export type UserCourseCreateManyCourseInput = {
    userId: string
    progress?: number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: boolean
    enrolledAt?: Date | string
  }

  export type CertificateCreateManyCourseInput = {
    id?: string
    certificateNumber: string
    issuedDate?: Date | string
    userId: string
    studentName: string
    courseName: string
  }

  export type LessonUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LessonUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LessonUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LiveSessionUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type LiveSessionUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type LiveSessionUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    submissions?: SubmissionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    submissions?: SubmissionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
  }

  export type ExamUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type UserCourseUpdateWithoutCourseInput = {
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolledCoursesNestedInput
  }

  export type UserCourseUncheckedUpdateWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseUncheckedUpdateManyWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    watchedLessons?: JsonNullValueInput | InputJsonValue
    attendedLive?: BoolFieldUpdateOperationsInput | boolean
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    issuedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyQuizInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    assignmentId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    assignment?: AssignmentUpdateOneWithoutSubmissionsNestedInput
    exam?: ExamUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyAssignmentInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    quizId?: string | null
    examId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    quiz?: QuizUpdateOneWithoutSubmissionsNestedInput
    exam?: ExamUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyExamInput = {
    id?: string
    type: string
    score?: number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    userId: string
    quizId?: string | null
    assignmentId?: string | null
    submittedAt?: Date | string
  }

  export type SubmissionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    quiz?: QuizUpdateOneWithoutSubmissionsNestedInput
    assignment?: AssignmentUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    content?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}