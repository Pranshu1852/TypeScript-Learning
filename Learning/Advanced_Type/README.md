# Advanced Type

## Intersection Type
An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.

Ex:-
```ts
type FileData={
    path: string;
    content: string;
}

type DatabaseData={
    connectionUrl: string;
    credentials: string;
}

type Status={
    isOpen: boolean;
    errorMessage?:string;
}

type AccessedFileData=FileData & Status;
type AccessedDatabaseData=DatabaseData & Status;
```

## Type Guards

Ex1:- (Using conditional statement)
```ts
type FileSource={
    path: string
};

type DBSource={
    connectionUrl: string
};

type Source = FileSource | DBSource;

function loadData(source: Source){
    if('path' in source){
        console.log(source.path);
    }
    else{
        console.log(source.connectionUrl);
    }
}
```

## Discriminated union
It have union of multiple type but all type share one same property based on the value of that property we can differentiate between types.

Ex:-
```ts
interface ShapeBase {
    getArea(): number;
}
   
interface Circle extends ShapeBase {
    radius: number;
}

interface Square extends ShapeBase {
    side: number;
}

type Shape =
| { kind: Circle; data: { radius: number } }
| { kind: Square; data: { side: number } };

function calculateArea(shape: Shape) {
    if("radius" in shape.data){
        return Math.PI * shape.data.radius ** 2;
    }else{
        return shape.data.side * shape.data.side;
    }
}
```

## TypeGuards using instanceof

Ex:-
```ts
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
```