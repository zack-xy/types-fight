/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

let x: 'hello' = 'hello'
// OK
x = 'hello'
// No Ok
x = 'Zack'

function printText(s: string, alignment: 'left' | 'right' | 'center') {
  // some codes
}

printText('Hello, world', 'left')
printText('A', 'centre')

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}

// combine with non-literal types
interface Options {
  width: number
}

function configure(x: Options | 'auto') {
  // some codes
}

configure({ width: 100 })
configure('auto')
configure('automatic')

