根据一种类型的type,映射(map)出来另一种类型

```typescript
// 类型OnlyBoolsAndHorses属性的值是boolean或者是Horse

type OnlyBoolsAndHorses = {
	[key: string]: boolean | Horse;
}

const conforms: OnlyBoolsAndHorses = {
	del: true,
	rodney: false,
}
```

----

### 转换type类型

```typescript
// 类型OptionsFlags将类型转为全boolean类型

type OptionsFlags<Type> = {
	[Property in keyof Type]: boolean;
}

type FeatureFlags = {
	darkMode: () => void;
	newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<FeatureFlags>;
/**
type FeatureOptions = {
	darkMode: boolean;
	newUserProfile： boolean;
}
*/
```

-----

### 移除只读

```typescript
// 可以额外增加+或者-来影响可选和只读
// 以下，移除属性中的只读

type CreateMutable<Type> = {
	-readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
	readonly id: string;
	readonly name: string;
}

type UnlockAccount = CreateMutable<LockedAccount>

/**
type UnlockAccount = {
	id: string;
	name: string;
}
*/
```


------

### 移除可选属性

```typescript
// 移除可选属性
type Concrete<Type> = {
	[Property in keyof Type]-?: Type[Property]
}

type MaybeUser = {
	id: string;
	name?: string;
	age?: number
}

type User = Concrete<MaybeUser>

/**
type User = {
	id: string;
	name: string;
	age: number;
}
*/
```

------

### key重命名

```typescript
// key也可以重命名
// Capitalize是TS自带的，大写首字母
type Getters<Type> = {
	[Property in keyof Type as `get${Capitalize<string Property>}`]
}

interface Person {
	name: string;
	age：number;
	location: string;
}

type LazyPerson = Getters<Person>;

/**
type LazyPerson = {
	getName: () => string;
	getAge: () => number;
	getLocation: () => string;
}

*/
```

----

### 删除(过滤排除某属性)

```typescript
// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;

/**           
type KindlessCircle = {
    radius: number;
}
*/
```

