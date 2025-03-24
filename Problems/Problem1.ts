//1) Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 };// Expected Result:["name", "age"]// When you get the result, try to check it's type, it shouldn't be the type of `string[]`. Instead it should be ("name" | "age")[].

let arrKey: string[]=[];

for(let key in user){
    arrKey.push(key);
}

console.log(arrKey);
