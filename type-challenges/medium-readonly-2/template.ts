type MyReadonly2<T, K = keyof T> = {
  readonly [key in keyof T as key extends K ? key : never ]: T[key]
} & {
  [key in keyof T as key extends K ? never : key]: T[key]
}

