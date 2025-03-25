// One way to create class and initialize variables in typescript
class User{
    name: string;
    age: number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
}

//another way to initialize variables in typescript classes
// here we can use public variable_name syntax to initialize the variable and it will store it.
class User1{
    constructor(public name:string,public age:number){}
}

const user=new User('John',20);
const user1=new User1('John',20);