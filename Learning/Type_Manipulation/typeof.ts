const username='max';
console.log(typeof username) // string
type UserName=typeof username; // 'max'


//get type from existing object using typeof
let obj1={
    name:"john",
    age:20
}

type user=typeof obj1;