/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ts V4.7.4
// There are two main tools to declare the shape of an object: interfaces and type aliases.
//
// They are very similar, and for the most common cases act the same

type BirdType = {
  wings: 2
}

interface BirdInterface {
  wings: 2
}

const bird1: BirdType = { wings: 2 }
const bird2: BirdInterface = { wings: 2 }

// Because TypeScript is a structural type system,
// it's possible to intermix their use too

const bird3: BirdInterface = bird1

// They both support extending other interfaces and types.
// They aliases do this via intersection types, while interfaces have a keyword

type Owl = { nocturnal: true } & BirdType
type Robin = { noctural: true } & BirdInterface

interface Peacock extends BirdType {
  colurful: true
  flies: false
}

interface Chicken extends BirdInterface {
  colourful: false
  flies: false
}

let owl: Owl = { wings: 2, nocturnal: true }
let chicken: Chicken = { wings: 2, colourful: false, flies: false }

// That said, we recommend you use interfaces over type aliases.
// Specifically, because you will get better error messages.
// If you hover over the following errors, you can see how TypeSctript can provide terser and more focused messages when working with interfaces like Chicken.

owl = chicken
chicken = owl

// One major difference between type aliases vs interfaces are that interfaces are open and type aliases are close.
// This means you can extend an interface by declaring it a second time.

interface Kitten {
  purrs: boolean
}

interface Kitten {
  colour: string
}

// In the other case a type cannot be changed outside of its declaration.

type Puppy = {
  color: string
}

type Puppy = {
  toys: number
}
