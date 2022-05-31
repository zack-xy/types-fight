import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error 33333
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type error = TupleToObject<[[1, 2], {}]>
