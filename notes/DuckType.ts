interface Point {
  x: number;
  y: number;
}

function logPoint(p:Point) {
  console.log(`${p.x},${p.y}`)
}

// The `point` variable is never declared to be a 'Point'
const point = {x:12,y:26}
logPoint(point)


const point3 = {x:12,y:26,z:89}
logPoint(point3)

const rect = {x:33,y:3,width:30,height:80}
logPoint(rect)

const color = {hex: 'E187ABF'}
logPoint(color)

// There is no defference between how classes and objects conform to shapes

class VirtualPoint {
  x: number;
  y: number;

  constructor(x:number,y:number) {
    this.x = x
    this.y = y
  }
}

const newVPoint = new VirtualPoint(23,45)
logPoint(newVPoint)
