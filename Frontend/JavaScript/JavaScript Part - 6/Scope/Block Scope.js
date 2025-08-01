
// ---: Block Scope :---

{
    let a = 25; // ---> Same thing apply with the "const" Keyword(Block Scope is applicable on "const" Keyword).
}

console.log("---: Trying to Print \"a\" variable which is defined inside the Block with \"let\" Keyword:---");

console.log(" ");

// console.log(a); -> Error

{
    var b = 25;
}

console.log(" ");
console.log("---: Trying to Print \"b\" variable which is defined inside the Block with \"var\" Keyword :---");
console.log(" ");

console.log("var b :",b); // ---> Block Scope does not apply on "var" Keyword.
/* 
!  ---> Generally "var" keyword is not preferable for defining the variable in JavaScript. 
*/

console.log(" ");
console.log("---: Printing \"i\" variable which is print inside the Loop Block");
console.log(" ");

for(let i=1;i<=5;i++)
{
    console.log(i);
}

console.log(" ");
console.log("---: Trying to Print \"i\" variable which is defined inside the Loop Block :---");
console.log(" ");

// console.log(i); -> Error

let age = 25;

if(age >= 25)
{
    let string = "Adult";
}

console.log(" ");
console.log("---: Trying to Print \"string\" variable which is defined inside the if-else Block :---");
console.log(" ");

// console.log(string); -> Error

