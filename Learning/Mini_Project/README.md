# Mini Project

## Working with The DOM
Typescript have built in type for the document object and it's methods. It automatically detect the type of the DOM object.

## Lib
TypeScript includes a default set of type definitions for built-in JS APIs (like Math), as well as type definitions for things found in browser environments (like document). TypeScript also includes APIs for newer JS features matching the target you specify; for example the definition for Map is available if target is ES6 or newer.

You may want to change these for a few reasons:

- Your program doesn’t run in a browser, so you don’t want the "dom" type definitions
- Your runtime platform provides certain JavaScript API objects (maybe through polyfills), but doesn’t yet support the full syntax of a given ECMAScript version
- You have polyfills or native implementations for some, but not all, of a higher level ECMAScript version

## Non-Null Assertion Operator
The Non-Null Assertion Operator in TypeScript is a powerful tool that allows developers to bypass compile-time null and undefined checks when they are certain that a value is not null or undefined. This operator is denoted by an exclamation mark (!) placed after the variable or object being asserted as non-null.

Ex:-
```ts
const btn=document.getElementById('btn')!;
btn.addEventListener('click',(e)=>{

})
console.log(btn);
```

## Type Assertions
Sometimes we might have more specific information about a value's type and you want to make sure Typescript knows it too.

We can assert a value's type by using the ```as``` keyword followed by specific type.

Ex:-
```ts
let mystery:unknown = "Hello";
let charlength=(mystery as string).length;
```

## Type Assertions with DOM

Ex:-
```ts
const btn=document.getElementById('btn')! as HTMLButtonElement;
const input=document.getElementById('todoinput')! as HTMLInputElement;

btn.addEventListener('click',(e)=>{
    alert(input.value);
    input.value="";
});
```