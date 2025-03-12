# TypeScript Modules

## How JavaScript Modules are Defined
A file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

Modules are executed within their own scope, not in the global scope. This means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

## Non-modules
It’s important to understand what TypeScript considers a module. The JavaScript specification declares that any JavaScript files without an import declaration, export, or top-level await should be considered a script and not a module.

Inside a script file variables and types are declared to be in the shared global scope, and it’s assumed that you’ll either use the outFile compiler option to join multiple input files into one output file, or use multiple ```<script> tags in your HTML to load these files (in the correct order!)```.

## import and export in TypeScript
If we don't write export in utils file Typescript automatically find out the add and sub function but we get problem when we compile it and convert it into js.

To solve this issue we can export the function in utils file which we want to export. If we write export into the utils file then Typescript goes into module mode so it don't find automatically.

> ### Syntax
> - script.ts(file in which we import function)
> ```ts
>    import {add,sub} from './utils.js'
>
>    console.log(add(2,3));
>    console.log(sub(5,2));
> ```
> - utils.ts(file in which we export function)
> ```ts
>    export function add(x:number,y:number):number{
>        return x+y;
>    }
>
>    export function sub(a:number,b:number):number{
>        return a-b;
>    }
> ```

Corresponding output:-
- script.js(file in which we import function)
```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
console.log((0, utils_js_1.add)(2, 3));
console.log((0, utils_js_1.sub)(5, 2));
```
- utils.js(file in which we export function)
```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
function add(x, y) {
    return x + y;
}
function sub(a, b) {
    return a - b;
}
```

## Different behaviour in Node and browser
Above code will run in node but it will not run in the browser because it uses ```commonjs``` syntax for module if we use ```ES6``` it will preserve import and export module syntax like Typescript in Javascript file. we can change that in tsconfig.json file.

If above solution not work maybe we need to use lite-server for that. we can install it using npm.