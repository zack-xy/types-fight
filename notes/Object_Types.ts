/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log(`The coordinate's x value is ${pt.x}`)
  console.log(`The coordiante's y value is ${pt.y}`)
}

printCoord({ x: 2, y: 7 })

function printName(obj: { first: string;last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided
  console.log(obj.last.toUpperCase())
  if (obj.last !== undefined) {
    // ok
    console.log(obj.last.toUpperCase())
  }
}
printName({ first: 'Bob' })
printName({ first: 'Alice', last: 'Alisson' })
