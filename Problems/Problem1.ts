//1) Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 };// Expected Result:["name", "age"]// When you get the result, try to check it's type, it shouldn't be the type of `string[]`. Instead it should be ("name" | "age")[].

type keyo<T>=T extends Record<infer U,any>? U[]:T;
type keytype=keyo<{ name: "John", age: 30 }>;

let arr:keytype=[];
for(let a in user){
    if(Object.keys(user).includes(a)){
        arr.push(a as keyof typeof user);
    }
}

console.log(arr);
