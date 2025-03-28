type SplitString<T,U extends string>=T extends `${infer A}${U}${infer B}`? [A,...SplitString<B,U>]:[T];
type S1 = SplitString<"a,b,c", ",">;        // Expected: ["a", "b", "c"]
type S2 = SplitString<"foo-bar-baz", "-">;  // Expected: ["foo", "bar", "baz"]
type S3 = SplitString<"hello", ",">;        // Expected: ["hello"]