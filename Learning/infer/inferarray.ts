type FirstElement<T extends any[]>=T extends [infer U,...any[]] ? U : T

type Test1 = FirstElement<[string, number, boolean]>;
type Test2 = FirstElement<[42, "hello", true]>;
type Test3 = FirstElement<[]>;