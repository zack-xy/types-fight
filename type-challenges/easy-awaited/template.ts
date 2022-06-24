type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ? MyAwaited<X> : X
  : never
