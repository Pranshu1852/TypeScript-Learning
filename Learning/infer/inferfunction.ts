type FirstParam<T>=T extends (name:infer U,...args: any[])=> any ? U:never;


type Test4 = FirstParam<(x: string, y: number) => void>;
type Test5 = FirstParam<(flag: boolean) => number>; 
type Test6 = FirstParam<() => void>;






type ReturnTypeOf<T>=T extends (...args: any[])=>infer U ? U:never;

type Test9 = ReturnTypeOf<() => number>;
type Test10 = ReturnTypeOf<() => Promise<string>>;
type Test11 = ReturnTypeOf<(x: number) => boolean>;