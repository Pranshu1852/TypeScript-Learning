type StringLength<T,U extends number[]=[]>=T extends `${infer A}${infer B}`? StringLength<B,[...U,0]>:U['length'];
type L1 = StringLength<"hello">; // Expected: 5
type L2 = StringLength<"abc">;   // Expected: 3
type L3 = StringLength<"">;      // Expected: 0