
// ---: Spread Operator in JS - 3 :---

const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, id: 123, country: "India"};

console.log("data Object :",data);
console.log("dataCopy Object :",dataCopy);

let arr = [1, 2, 3, 4, 5];
let obj1 = { ...arr }; // ---> obj => key: val

console.log("obj1 :",obj1);

let obj2 = { ..."hello" };

console.log("obj2 :",obj2);