# TypeScript Compiler

## Learn Commands

 1. ``` tsc --init ``` command is used to initialize the typescript repository and we get tsconfig.json file.
 2. ``` tsc -w script.js ``` command is used to compile the file automatically whenever it gets saved.
 3. ``` tsc ``` command compile all file in same folder.
 4. ``` tsc -w ``` command is used to compile all the file in same folder automatically whenever it gets saved.

## tsconfig Properties

1. ``` files ``` takes an array of file name which will be compiled using tsc command.
2. ``` include `` takes the directory name or multiple files that will be compiled using tsc command.
3. ``` exclude ``` takes the directory name or multiple files that will be not compiled using tsc command.
4. ``` outDir ``` in this we can specify our compiled file in js will store in which directory.
5. ``` target ``` specify which JS version is using.
6. ``` strict ``` specify strict mode is on or not. 