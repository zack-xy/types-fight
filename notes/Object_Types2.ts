interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

const shape = getShape()
paintShape({shape})


// readonly Properties
interface SomeType {
  readonly prop: string
}


interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42
}

let readonlyPerson: ReadonlyPerson = writablePerson
console.log(readonlyPerson.age)


// Index Signatures
interface StringArray {
  [index: number]: string
}

const myArray: StringArray = getStringArray()
const secondItem = myArray[1]


interface NumberDictionaty {
  [index: string]: number;
  length: number;
  name: string;
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}
