// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// ja的实现
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function tupleToObject(array) {
  const obj = {}

  array.forEach((val) => {
    obj[val] = val
  })
  return obj
}

// 1.返回一个对象
// 2.遍历array
