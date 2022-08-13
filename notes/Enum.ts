/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

// UP是1，其后的从1开始自增，如果不指定Up是1，则Up从0开始自增
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // some codes
}

respond('Princess Caroline', UserResponse.Yes)

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length,
}

// 联合枚举和枚举成员类型
// 枚举的成员也可以是类型
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle
  radius: number
}

interface Square {
  kind: ShapeKind.Square
  sideLength: number
}

let c: Circle = {
  kind: ShapeKind.Square,
  radius: 100,
}

// 枚举也可以作为联合类型
enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar)
    console.log('aaa')
}

// 枚举在运行时是真实的对象
enum E2 {
  X,
  Y,
  Z,
}

function f2(obj: { X: number }) {
  return obj.X
}

// Works, since 'E' has a property named 'X' which is a number
f2(E2)

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG'
 */
type LogLevelStrings = keyof typeof LogLevel

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key]
  if (num <= LogLevel.WARN) {
    console.log('Log level key is: ', key)
    console.log('Log level value is:', num)
    console.log('Log level message is:', message)
  }
}
printImportant('ERROR', 'This is a message')

// 枚举的反向映射
enum Enum {
  A,
}

let a = Enum.A
let nameOfA = Enum[a] // 'A'

// 以上代码会被编译为
'use strict'
var Enum;
(function (Enum) {
  Enum[Enum.A = 0] = 'A'
})(Enum || (Enum = {}))
let a = Enum.A
let nameOfA = Enum[a]

const enum EnumC {
  A = 1,
  B = A * 2,
}

declare enum Enum {
  A = 1,
  B,
  C = 2,
}
