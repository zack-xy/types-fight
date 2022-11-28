// type LookUp<U, T> = U extends {type: T, [propName: string]: any}
// ? U : never

type LookUp<U, T> = U extends { type: T } ? U : never;
