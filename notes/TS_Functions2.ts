// Function Overloads

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?:number): Date {
  if(d!==undefined && y!==undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}

const d1 = makeDate(12345678)
const d2 = makeDate(5,5,5)
const d3 = makeDate(1,3)


// The signature of the implementation is not visible from the outside. when writing an overloaded function, you should always have two or more signatures above the implementation of the function
// The implementation signature must also be compatible with the overload signatures

function fn(x:string): string;
function fn(x:number): boolean;
function fn(x: string | number ){
  return 'oops'
}


// Declaring this in a Function
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB()
const admins = db.filterUsers(function (this: User) {
  return this.admin
})
