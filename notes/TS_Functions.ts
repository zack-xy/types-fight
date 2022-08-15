// Function Type Expressions
function greeter(fn:(a:string)=> void) {
  fn('Hello, World')
}

function printToConsole(s:string){
  console.log(s)
}

greeter(printToConsole)



// type alias
type GreetFunction = (a:string) => void
function greeter2(fn: GreetFunction) {
  // some codes
}


// Call signatures
// describe something callable with properties
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned" + fn(6))
}


// Construct Signatures

type SomeConstuctor = {
  new (s: string): SomeObject;
}

function fn(ctor: SomeConstuctor) {
  return new ctor('hello')
}

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}



// Generic Functions
// the types of the input ralate to the type of the output

function firstElement(arr: any[]){
  return arr[0]
}


function firstElement2<Type>(arr: Type[]):Type | undefined {
  return arr[0]
}

// s is of type 'string'
const s = firstElement2(['a','b','c'])
// n is of type 'number'
const n = firstElement2([1,2,4])
// u is of type undefined
const u = firstElement2([])


// use multiple type parameters
function map<Input,Output>(arr: Input[], func: (arg: Input) => Output):Output[] {
  return arr.map(func)
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(['1','2','3'], (n)=> parseInt(n))


// Constaints
// use `extends` clause

function longer<Type extends {length: number}>(a: Type,b: Type) {
  if(a.length >= b.length) {
    return a
  } else {
    return b
  }
}


// longerArray is of type 'number[]'
const longerArray = longer([1,2],[1,2,3])
// longerString is of typr 'allice' | 'bob'
const longerString = longer('alice','bob')
// Error! Numbers don't have a 'length' property
const notOK = longer(10,100)


// common error when working with generic constraints
function minimumLength<Type extends {length: number}>(
  obj: Type,
  minimum: number
): Type {
  if(obj.length >= minimum) {
    return obj
  } else {
    return {length: minimum}
  }
}

function combine<Type>(arr1: Type[],arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}

const srr = combine<string | number>([1,2,3],['hello'])


// Guidelines for Writiting Good Generic Functions
// 1.Push Type Parameters Down
// Rule: When possible, use the type paramter itself rather than constraining it
function firstElement3<Type>(arr: Type[]) {
  return arr[0]
}

function firstElement4<Type extends any[]>(arr: Type) {
  return arr[0]
}

// a: number (good)
const a2 = firstElement3([1,2,4])
// b: any(bad)
const b2 = firstElement4([1,2,3])


// 2. Use Fewer Type Parameters
// Rule: Always use as few type parameters as possible
function filter2<Type>(arr: Type[], func:(arg: Type) => boolean): Type[] {
  return arr.filter(func)
}

function filter3<Type, Func extends (arg: Type)=> boolean> (
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func)
}


// might not need to be generic
function greet<Str extends string>(s: Str) {
  console.log('Hello, ' + s)
}


// simpler version
// Rule: if a type paramter only appears in one location, strongly reconsider if you actually need it
function greet2(s: string) {
  console.log('Hello, ' + s)
}
