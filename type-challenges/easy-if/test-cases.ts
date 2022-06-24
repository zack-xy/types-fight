import type { Equal, Expect } from '@type-challenges/utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error aaaa
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type error = If<null, 'a', 'b'>
