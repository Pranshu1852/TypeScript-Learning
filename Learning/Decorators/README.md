# Decorators

Decorators are things we have written that can be attached to our code to manipulate how that code works.
Decorators are function that can be attached with using ```@```;

## Simple decorator that attach with class
Decorator function take two parameters one is target it will be our class and ctx(context) it will be our context of class;

Code:-
```ts
function logger(target: any,ctx: ClassDecoratorContext){
    console.log('Logger Decorator');
    console.log(target);
    console.log(ctx);
}

@logger
class Person{
    name="John";

    greet(){
        console.log('Hi ',this.name);
    }
}
```

Output:-
```js
Logger Decorator
[class Person]
{
  kind: 'class',
  name: 'Person',
  metadata: undefined,
  addInitializer: [Function (anonymous)]
}
```