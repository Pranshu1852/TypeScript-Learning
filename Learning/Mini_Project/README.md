# Mini Project

## Working with The DOM
Typescript have built in type for the document object and it's methods. It automatically detect the type of the DOM object.

## Lib
TypeScript includes a default set of type definitions for built-in JS APIs (like Math), as well as type definitions for things found in browser environments (like document). TypeScript also includes APIs for newer JS features matching the target you specify; for example the definition for Map is available if target is ES6 or newer.

You may want to change these for a few reasons:

- Your program doesn’t run in a browser, so you don’t want the "dom" type definitions
- Your runtime platform provides certain JavaScript API objects (maybe through polyfills), but doesn’t yet support the full syntax of a given ECMAScript version
- You have polyfills or native implementations for some, but not all, of a higher level ECMAScript version
