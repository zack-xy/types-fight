#### keyof操作符
keyof连接一个对象类型，根据对象的key产生一个字符或数字的联合类型

```typescript
type Point = { x: number; y: number };
type P = keyof Point;
// 这里P等同于'x'|'y'
```

如果keyof是一个数组的话，得到的是索引
