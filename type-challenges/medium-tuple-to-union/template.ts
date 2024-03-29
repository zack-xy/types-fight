type TupleToUnion<T> =
  T extends [infer First, ...infer Rest] ?
  (First | TupleToUnion<Rest>)
  : never
