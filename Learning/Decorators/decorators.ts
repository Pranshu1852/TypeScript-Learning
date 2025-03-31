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
