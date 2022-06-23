// 解法一：
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type First<T extends any[]> = T extends [] ? never : T[0]

// 解法二：
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 解法三：
// type First<T extends any[]> = T[0] extends T[number] ? T[0] :  never

// 解法四：
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
