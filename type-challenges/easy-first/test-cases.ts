import type { Equal, Expect } from '@type-challenges/utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type errors = [
  // @ts-expect-error aaa
  First<'notArray'>,
  // @ts-expect-error aaa
  First<{ 0: 'arrayLike' }>,
]
