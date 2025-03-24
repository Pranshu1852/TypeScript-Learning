//2) Extract First and Last Element of Tuple using Generic.

type First<T>=T extends [infer U,...any[]]?U:T;
type Last<T>=T extends [...any[],infer U]?U:T;
type A = First<[1, 2, 3]>;
type B = Last<[1, 2, 3]>;