type UnwrapPromise<T>=T extends Promise<infer U>? U:T;

type Test12 = UnwrapPromise<Promise<number>>;
type Test13 = UnwrapPromise<Promise<string>>;
type Test14 = UnwrapPromise<number>;