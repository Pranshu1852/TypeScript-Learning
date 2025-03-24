# Type Manipulation

## typeof
typeof operator output is depend on where it is used.

Ex:-
```ts
const username='max';
console.log(typeof username) // string because when it is converted to js it show string
type UserName=typeof username; // 'max'
```

Another useful feature of typeof is useful to get the type of existing thing and use it somewhere else.

Ex:-
```ts
let obj1={
    name:"john",
    age:20
}

type user=typeof obj1;
```

## keyof
keyof operator is used to get the key of object type.

Ex:-
```ts
type user1={name: string,age:number};

type userkey=keyof user1;

let keys: userkey;
keys='age'
```

keyof is useful in function when we have object and key as parameter

Ex:-
```ts
function getProp<T extends object,U extends keyof T>(obj: T, key: U){
    const val=obj[key];

    return val;
}
```

## Indexed Access Type
indexed access type is used to get the type of particular property of object type.

Ex:-
```ts
type Appuser={
    name: string;
    age: number;
    permission:{
        id: string;
        title: string;
        description: string;
    }[];
};

type permission=Appuser['permission']
```