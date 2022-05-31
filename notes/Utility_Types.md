实用程序类型（使用它进行类型转换），ts提供的全局可使用

### 1. `Partial<Type>`
将类型所有types属性转为可选

```typescript
interface Todo {
	title: string;
	desxription: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return {...todo, ...fieldsToUpdate};
}

const todo1 = {
	title: "organize desk",
	description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
	description: "throw out trash",
})
```
### 2. `Required<Type>`

将类型所有types属性转为必须

```typescript
interface Props {
	a?: number;
	b?: string;
}

const obj: Props = {a:5};

const obj2: Required<Props> = {a:5};

// 报错
// Property 'b' is missing in type '{a: number;}' bu required in type 'Required<Props>'
```

### 3. `Readonly<Type>`

```typescript
interface Todo {
	title: string;
}

const todo: Readonly<Todo> = {
	title: "Delete inactive users"
}

todo.title = "Hello";

// 报错
// Cannot assign to 'title' because it is a read-only property

```

### 4. `Record<Keys, Type>`
构造一个对象类型，属性key是Keys，属性的值是Type

```typescript
interface CatInfo {
	age: number;
	breed: string;
}

type CatName = "miffy" | "boris" | "mordred"

const cats: Record<CatName, CatInfo> = {
	miffy: {age: 10,  breed: "Persian"},
	boris: {age: 5, bread: "Maine Coon"},
	mordred: {age: 16, bread: "British Shorthair"}
}

cats.boris;
// const cats: Record<CatName，CatInfo>
```

### 5. `Pick<Type, Keys>`
从Type里选一些Keys组成新的类型


```typescript
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
	title: "Clean room",
	completed: false,
}


```

### 6. `Omit<Type, Keys>`
从Type里去除Keys的属性组成的新类型

```typescript
interface Todo {
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
	title: "Clean room",
	completed: false,
	createdAt: 1615544252770,
}
```

### 7. `Exclude<UnionType, ExcludeMembers>`
排除UnionType里ExcludeMembers的项

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">
 
 // type T0 = "b" | "c"
 
 type T1 = Exclude<"a" | "b" | "c", "a" | "b">
 
 // type T1 = "c"
 
 type T2 = Exclude<string | number | (()=>void), Function>
 
 // type T2 = string | number
 
```

### 8. `Extract<Type, Union>`
提取Type和Union交叉的部分

```typescript
type T0 = Extract<"a" | "b" | "c", "a" | "f">

// type T0 = "a"

type T1 = Extract<string | number | (()=>void), Function>

// T1 = () => void
```

### 9. `NonNullable<Type>`

排除null和undefined

```typescript
type T0 = NonNullable<string | number | undefined>

// type T0 = string | number

type T1 = NonNullable<string[] | null | undefined>

// type T1 = string[]
```

### 10. `Parameters<Type>`
从一个函数的参数的类型中构造一个元组

```typescript
declare function f1(arg: { a: number; b: string }): void;
 
type T0 = Parameters<() => string>;
     
// type T0 = []
type T1 = Parameters<(s: string) => void>;
     
// type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
     
//type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;


/** type T3 = [arg: {
    a: number;
    b: string;
}] */
type T4 = Parameters<any>;
     
// type T4 = unknown[]
type T5 = Parameters<never>;
     
// type T5 = never
type T6 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
type T6 = never
type T7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
     
// type T7 = never
```

### 11. `ConstructorParameters<Type>`
从函数类型的构造器里构造一个元组或者数组类型

```typescript
type T0 = ConstructorParameters<ErrorConstructor>;
     
// type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;
     
// type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;
     
// type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;
     
// type T3 = unknown[]
 
type T4 = ConstructorParameters<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
     
// type T4 = never
```

### 12. `ReturnType<Type>`
从函数返回构建一个类型

```typescript
declare function f1(): { a: number; b: string };
 
type T0 = ReturnType<() => string>;
     
//type T0 = string
type T1 = ReturnType<(s: string) => void>;
     
//type T1 = void
type T2 = ReturnType<<T>() => T>;
     
//type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
     
//type T3 = number[]
type T4 = ReturnType<typeof f1>;

/**     
type T4 = {
    a: number;
    b: string;
}
*/
type T5 = ReturnType<any>;
     
// type T5 = any
type T6 = ReturnType<never>;
     
// type T6 = never

type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
// type T7 = any
type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
     
// type T8 = any
```
### 13. `InstanceType<Type>`
构造Type构造函数的实例类型

```typescript
class C {
  x = 0;
  y = 0;
}
 
type T0 = InstanceType<typeof C>;

```

### 14. `ThisParameterType<Type>`
提取函数的this，如果没有this，则是unknown

```typescript
function toHex(this: Number) {
  return this.toString(16);
}
 
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
```

### 15. `OmitThisParameter<Type>`
移除this

```typescript
function toHex(this: Number) {
  return this.toString(16);
}
 
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
 
console.log(fiveToHex());

```

### 16. `ThisType<Type>`

```typescript
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};
 
function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}
 
let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});
 
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

### 其他

```typescript
Uppercase<StringType>
Lowercase<StringType>
Capitalize<StringType>
Uncapitalize<StringType>
```
