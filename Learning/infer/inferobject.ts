type KeyTyp<T> = T extends Record<infer K, any> ? K : never;
type ValueType<T>=T extends Record<string ,infer U> ? U:never;

type Test7 = KeyTyp<{ id: number; name: string }>; 

type Test8 = ValueType<{ id: number; name: string }>;