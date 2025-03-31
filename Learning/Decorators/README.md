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

## Manipulate class using decorators
We have to give class type```new (...args: any[])=>any``` to the target.
We can return class extends target and define new property in that.

Ex:-
```ts
function logger<T extends new (...args: any[]) => any>(target: T,ctx: ClassDecoratorContext){
    console.log('Logger Decorator');
    console.log(target);
    console.log(ctx);

    return class extends target{
        age=35;
    };
}

@logger
class Person{
    name="John";

    greet(){
        console.log('Hi ',this.name);
    }
}

const p1=new Person();
console.log(p1);
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
Person { name: 'John', age: 35 }
```

## Class constructor in decorator
Class constructor in decorator will run every time new instance of the base class is created.

Ex:-
```ts
function logger<T extends new (...args: any[]) => any>(target: T,ctx: ClassDecoratorContext){
    console.log('Logger Decorator');
    console.log(target);
    console.log(ctx);

    return class extends target{
        constructor(...args:any[]){
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    };
}

@logger
class Person{
    name="John";

    greet(){
        console.log('Hi ',this.name);
    }
}

const p1=new Person();
const p2=new Person();
console.log(p1);
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
class constructor
Person { name: 'John' }
class constructor
Person { name: 'John' }
```