// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyParameters<T extends (...args: any[]) => any> = T extends (...arg: infer R) => any ? [...R] : never
