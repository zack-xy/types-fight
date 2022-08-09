import type { Equal, Expect } from '@type-challenges/utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
