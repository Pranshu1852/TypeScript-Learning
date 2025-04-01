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

function autobind(target: (...args: any[])=>any,ctx: ClassMethodDecoratorContext){
    ctx.addInitializer(function(this: any) {
        this[ctx.name]=this[ctx.name].bind(this);
    });
}

@logger
class Person{
    name="John";

    @autobind
    greet(){
        console.log('Hi ',this.name);
    }
}

const p1=new Person();
const p2=new Person();
console.log(p1);

let greeting=p1.greet;
greeting();