type DeepReadonly<T> = T extends Function ? T : { readonly [x in keyof T]: DeepReadonly<T[x]> }
