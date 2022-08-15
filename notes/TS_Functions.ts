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
