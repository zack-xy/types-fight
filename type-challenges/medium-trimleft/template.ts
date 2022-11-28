type TrimLeft<S extends string> = S extends ''
  ? ''
  : S extends `${infer H}${infer Rest}`
  ? H extends ' ' | '\n' | '\t'
    ? TrimLeft<Rest>
    : S
  : never
