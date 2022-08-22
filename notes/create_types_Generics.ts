function identify<Type>(arg: Type):Type {
  return arg;
}

let output = identify<string>('myString')
let output2 = identify('myString')

function loggingIdentify<Type>(arg: Type[]): Type[] {
  console.log(arg.length)
  return arg
}

function loggingIdentity2<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length)
  return arg
}

function indentity<Type>(arg: Type): Type {
  return arg
}

// 前半段是泛型类型声明，后半段是赋值
let myIdentity: <Input>(arg: Input) => Input = indentity
