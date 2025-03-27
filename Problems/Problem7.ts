// create fibonaacci type wich return fibon

type createArray<T,Z extends number[]=[]>=Z['length'] extends T?Z:createArray<T,[...Z,0]>;

type lengthArray<T extends any[]>=T['length'];

type addition<T extends number,U extends number>=lengthArray<[...createArray<T>,...createArray<U>]>;
type subtractOne<T extends number>=createArray<T> extends [infer A,...infer K]? K['length']:0;
type subtractTwo<T extends number>=createArray<T> extends [infer A,infer B,...infer K]? K['length']:0;


type Fibonacci<T extends number>=T extends 0|1? T:addition<Fibonacci<subtractOne<T>>,Fibonacci<subtractTwo<T>>>;
type Fib5 = Fibonacci<5>;
type Fib8 = Fibonacci<8>; 
type Fib10 = Fibonacci<10>; 