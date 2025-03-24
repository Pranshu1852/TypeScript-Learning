type user1={name: string,age:number};

type userkey=keyof user1;

let keys: userkey;
keys='age'


//keyof is useful in function when we have object and key as parameter
function getProp<T extends object,U extends keyof T>(obj: T, key: U){
    const val=obj[key];

    return val;
}