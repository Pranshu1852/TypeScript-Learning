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