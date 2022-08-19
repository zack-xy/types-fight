// Parameter type annotation
function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()}!!`)
}

// Return type annotations
function getFavoriteNumber(): number {
  return 26
}

// No type annotations here, but TypeSCript can spot the bug
const names = ['Alice', 'Bob', 'Eve']

// Contextual typing for function
names.forEach((s) => {
  console.log(s.toUpperCase())
})
