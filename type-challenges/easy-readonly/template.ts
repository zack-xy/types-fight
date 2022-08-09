// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// js实现
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function readonly(obj) {
  const result = {}

  for (const key in obj)
    result[`readonly${key}`] = obj[key]

  return result
}

// 1.返回1个对象
// 2.遍历obj(js对象，ts接口)
// 3.加上readonly关键字
// 4.通过key来获取obj(接口)里面的值
