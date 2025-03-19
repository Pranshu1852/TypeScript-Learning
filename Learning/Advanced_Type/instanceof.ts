class User{
    constructor(public name:string){}

    join(){

    }
}

class Admin{
    constructor(permissions: string[]){}

    scan(){
        
    }
}

const user=new User("Jhon");
const admin=new Admin(['read','write']);

type Entity= User | Admin;

function init(entity: Entity){
    if(entity instanceof User){
        entity.join();
    }
    else{
        entity.scan();
    }

}