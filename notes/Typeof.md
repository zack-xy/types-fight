#### Typeof操作符


```typescript
type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>
```
如上代码,`type K = boolean`


如果说代码这样写，使用`ReturnType`无法正常使用

```typescript
function f() {
  return {x: 10, y:3}
}

type P = ReturnType<f>

// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
```

==注意！！==
value和type不是一样的东西，为了获取value(值)f的type(类型)，需要使用typeof

```typescript
function f() {
  return {x: 10, y: 3}
}
type P = ReturnType<typeof f>

/**
 type P = {
   x: number;
   y: number;
 } 
*/
```

typeof只能用在标识符（进一步来说是变量名）或者它们的属性上，这个限制有助于避免让你认为你的代码正在执行
