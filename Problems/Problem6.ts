// Create a type to perform addition operation

type createArray<T,Z extends number[]=[]>=Z['length'] extends T?Z:createArray<T,[...Z,0]>;

type lengthArray<T extends any[]>=T['length'];

type addition<T extends number,U extends number>=lengthArray<[...createArray<T>,...createArray<U>]>;

type a1=addition<5,6>