type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? T[K] extends V ? never : K : K, value: V): 
            Chainable<{[Key in keyof T as Key extends K ? never : Key]: T[Key]} & {[key in K]: V}>
  get(): T
}

// type Chainable<T = {}> = {
//   option<K extends string, V>(key: K extends keyof T ? T[K] extends V ? never : K : K, value: V): 
//             Chainable<Omit<T, K> & Record<K, V>>
//   get(): T
// }
