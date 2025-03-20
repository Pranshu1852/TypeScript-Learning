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

## Functions Overload
In Function even if we narrow the type using type guards but still at the time of the function call the variable in which we are storing the ans fill show the all union type to solve that issue we can declare function multiple times with one type with returning type.

Ex:-
```ts
function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string|any[]){
    if(typeof val==="string"){
        const numberOfwords=val.split(' ').length;
        return `${numberOfwords} words`;
    }

    return val.length;
}


const numberOfwords=getLength('Does this work?')
numberOfwords.length;

const numItems=getLength(['Sports','Cookies']);
```

## Index Types
Index type is used to make dynamic property in object with specific types.

Ex:-
```ts
type Datastore={
    [prop: string]: number | boolean;
};

let store: Datastore={

};

store.id=2;
store.amound=5;
store.isOpen=false;
```

## Constant Types with "as const"
In typescript type of the const variable is the value provided. ```as const``` is used to make any variable act like const in code.

Ex:-
```ts
let role=['admin','guest','editor'] as const;
```

## Record Type 
It work same as index type just syntax is different.

Ex:-
```ts
let someObj: Record<string, number | string>= {
    name:"asdsad"
};

someObj[2]="jkdkjs";
```

## satisfies Keyword
It checks if the object follows that type and do not allow to add another property after that.

Ex:-
```ts
let obj={
    entry1:2,
    entry2:3,
} satisfies Record<string,number>

// obj.entry3=5 Not allow
```