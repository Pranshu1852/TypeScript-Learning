//4) Create a generic type that extracts the argument type from a function?
// type Fn = (name: string, age: number) => void;type A = ArgumentType<Fn>;  // Expected: [string, number]// Bonus challenge:// Modify it to extract only the first argument type
type FirstArgumentType<T>=T extends (name: infer U,...args: any[])=>any?U:never;
type ArgumentType<T>=T extends (...args: infer U)=>any? U:never;

type Fn = (name: string, age: number) => void;
type Ab = ArgumentType<Fn>;

type NotName<T>=T extends [infer A,...infer U]?[A,...NotName<U>]:[];
type abc=NotName<Ab>


// type abc=removekey<[name: string,age: number]>;