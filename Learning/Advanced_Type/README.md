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