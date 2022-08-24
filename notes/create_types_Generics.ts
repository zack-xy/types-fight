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


function indentity2<Type>(arg: Type): Type {
  return arg
}

let myIdentity2: { <Type>(arg: Type): Type } = indentity2


interface GenericIdentityFn {
  <Type>(arg: Type): Type
}

function indentity3<Type>(arg: Type):Type {
  return arg
}


let myIdentity3: GenericIdentityFn = indentity

interface GenericIndentityFn<Type> {
  (arg: Type): Type
}

function indentity4<Type>(arg: Type): Type {
  return arg;
}

let myIdentity4: GenericIndentityFn<number> = indentity



interface GenericIdentityFn<Type> {
  (arg: Type): Type
}

function identity<Type>(arg: Type): Type {
  return arg
}

const myIdentity: GenericIdentityFn<number> = identity

// Generic Classes
class GenericNumber<NumType> {
  zeroValue: NumType
  add: (x: NumType, y: NumType) => NumType
}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

// Generic Constraints
interface LengthWise {
  length: number
}

function loggingIdentity<Type extends LengthWise>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

// Using Type Parameters in Generic Constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

// Using Class Types in Generics
function create<Type>(c: { new (): Type }): Type {
  return new c()
}

class BeeKeeper {
  hasMask = true
}

class ZooKeeper {
  nametag = 'Mikle'
}

class Animal {
  numLegs = 4
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper()
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c: new() => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask
