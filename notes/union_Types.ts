/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

// A function can operate on strings or numbers
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`)
  // Error
  console.log(id.toUpperCase())

  // Narrowing
  if (typeof id === 'string') {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase())
  }
  else {
    // Here, id is of type 'number'
    console.log(id)
  }
}
// OK
printId(101)
// ok
printId('202')
// Error
printId({ myID: 22342 })

// Another Narrowing
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log(`Hello, ${x.join(' and ')}`)
  }
  else {
    // Here: "x" is 'string'
    console.log(`Welcome lone traveler ${x}`)
  }
}
