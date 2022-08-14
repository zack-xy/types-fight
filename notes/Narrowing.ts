function printAll(strs: string | string[] | null) {
  if(typeof strs === 'object') {
    // Object is possibly 'null'
    for(const s of strs) {
      console.log(s)
    }
  } else if(typeof strs === 'string') {
    console.log(strs)
  } else {
    // do nothing
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if(!values) {
    return values
  } else {
    return values.map((x)=> x*factor)
  }
}

function example(x:string | number,y: string | boolean) {
  if(x===y){
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}


function printAll(strs: string | string[] | null) {
  if(strs!==null){
    if(typeof strs === 'object') {
      for(const s of strs){
        console.log(s)
      }
    } else if(typeof strs === 'string'){
      console.log(strs)
    }
  }
}

interface Container {
  value: number | null | undefined
}

function multiplyValue(container: Container, factor: number) {
  if(container.value != null){
    console.log(container.value)
    container.value*=factor
  }
}

// The 'in' operator narrowing
type Fish = { swim: ()=> void }
type Bird = { fly: ()=> void }
type Human = { swim?: ()=> void;fly?:()=>void }

function move(animal: Fish | Bird){
  if('swim' in animal){
    // animal: Fish | Human
    return animal.swim()
  }
  return animal.fly()
}


// instanceof narrowing
function logValue(x: Date | string){
  if(x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}



// Assignments
let x2 = Math.random() < 0.5 ? 10 : 'hello world'

x2 = 1
console.log(x2)

x2 = 'goodbye'
console.log(x)

function example3 () {
  let x: string | number | boolean
  x = Math.random() < 0.5
  console.log(x)

  if(Math.random() < 0.5) {
    x = 'hello'
    console.log(x)
  } else {
    x = 100
    console.log(x)
  }
  return x
}



// Using type predicates
// pet is Fish is our type predicate
// A predicate takes the form `paramterName is Type`
// `parameterName` must be the name of a parameter from the current function signature
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

const zoo:(Fish | Bird)[] = [getSmallPet(),getSmallPet(),getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]

const underWater3: Fish[] = zoo.filter((pet):pet is Fish => {
  if(pet.name === 'sharkey') return false
  return isFish(pet)
})
