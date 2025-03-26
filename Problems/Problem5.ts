//5) Create a function that takes an object and a key, then returns the corresponding value?
// const user = { name: "John", age: 30 };console.log(getValue(user, "name")); // Expected: "John"console.log(getValue(user, "age"));  // Expected: 30
const user1 = { name: "John", age: 30 };

function getValue<T extends object,U extends keyof T>(obj: T, key: U){
    return obj[key];
}

// can't use this
function getv(obj:object,key:keyof object):any{
    if(key in obj){
        return obj[key] ;
    }
}

console.log(getv(user1, "name"));