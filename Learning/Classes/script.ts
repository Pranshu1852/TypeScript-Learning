// One way to create class and initialize variables in typescript
class User{
    // name: string;
    // age: number;
    readonly array:string[];

    constructor(private name:string,protected age:number){
    }

    show(){
        console.log('Hello');
    }
}

//another way to initialize variables in typescript classes
// here we can use public variable_name syntax to initialize the variable and it will store it.
class User1{
    constructor(public name:string,private age:number){}
}

class User2{
    constructor(private Firstname:string,private LastName:string){}

    set lastName(lastName:string){
        this.lastName=lastName;
    }

    get fullName(){
        return this.Firstname+' '+this.LastName;
    }

    static id="USER";

    static show(){
        console.log('Hello');
    }
}

class Employee extends User{
    constructor(n:string,a:number){
        super(n,a); // need to call before accessing the memeber of super class
        super.name // Not work because it is private
        super.age // Work because it is protected and can be accessible in sub class
    }
}

// Can't create the instance of abstract class first need to extend it with other class and then create the instance of that class
abstract class UIElements{
    id:string;
    constructor(id:string){
        this.id=id;
    }

    getElement(){

    }
}

// static method are accessible without creating a instance of class
User2.id;
User2.show();

const user=new User('John',20);
const user1=new User1('John',20);
const user2=new User2('John','John');
user2.fullName;
user2.lastName='wick';

user.age; // Public so it is accessible
user.array=['new']; // we can't reassign some value that is readonly
user.array.push('new'); // But we can push new value in array
user1.age; // Private so it is not accessible out side of he class
