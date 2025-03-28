type GetFirstWord<T>=T extends `${infer A} ${infer B}`? A:never;
type A = GetFirstWord<"Hello World">;    // Expected: "Hello"
type B = GetFirstWord<"TypeScript Fun">; // Expected: "TypeScript"
type C = GetFirstWord<"SingleWord">;     // Expected: "SingleWord"