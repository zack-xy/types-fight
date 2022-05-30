// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// js
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function myPick(todo, keys) {
  const obj = {}
  keys.forEach((key) => {
    if (key in todo)

      obj[key] = todo[key]
  })
  return obj
}
