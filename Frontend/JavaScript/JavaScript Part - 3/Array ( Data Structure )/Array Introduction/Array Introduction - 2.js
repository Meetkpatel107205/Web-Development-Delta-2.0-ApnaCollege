
// ---: Array Introduction - 2 :---

let students = ["Aman","Shradha","Meet"];
let marks = [99,85,93,76,62];
let info = ["Aman",25,6.1]; // -> Mixed Array

console.log("Length of Array :- [\"Aman\",25,6.1] is",["Aman",25,6.1].length);
//* ---> We can also use whole array content with bracket for accessing different array methods.

console.log(info[0][0]) // -> Result :- A 
//! ---> Gives us First character of string that is present on 0th index of Array.

console.log("Length of First String of info Array :",info[0].length);

// -> Empty Array :-

let newArr = [];

console.log("length of newArr(Empty Array) :",newArr.length);

console.log("Length of Empty Array :",[].length);
//* ---> We can also use "[]" as array name for empty array.

