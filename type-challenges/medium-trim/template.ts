type Trim<S extends string> =  S extends `${' ' | '\t' | '\n'}${infer R}` | `${infer R}${' ' | '\t' | '\n'}`
  ? Trim<R>
  : S
