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