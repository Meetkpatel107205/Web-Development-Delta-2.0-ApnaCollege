
// ---: Spread Operator in JS - 2 :---

let arr = [1, 2, 3, 4, 5];

let newArr = [...arr];

let chars = [..."hello"];

console.log("arr :",arr);
console.log("newArr :",newArr);
console.log("chars :",chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];

console.log("odd :",odd);
console.log("even :",even);
console.log("nums :",nums);