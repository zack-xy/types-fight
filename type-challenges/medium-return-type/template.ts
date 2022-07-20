/* eslint-disable @typescript-eslint/no-unused-vars */
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : never
