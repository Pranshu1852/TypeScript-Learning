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
