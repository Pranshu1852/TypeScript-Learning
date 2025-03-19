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