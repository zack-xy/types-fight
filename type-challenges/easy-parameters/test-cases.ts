import type { Equal, Expect } from '@type-challenges/utils'

const foo = (_arg1: string, _arg2: number): void => {}
const bar = (_arg1: boolean, _arg2: { a: 'A' }): void => {}
const baz = (): void => {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]
