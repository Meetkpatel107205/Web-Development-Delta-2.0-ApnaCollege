
// ---: Get Values - 2 :---

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

console.log(" ");
console.log("---: Printing \"obj\" Object Literal :---");
console.log(" ");

console.log("obj :",obj);

console.log(" ");
console.log("---: Printing \"1\" of obj Object Literal :---");
console.log(" ");

console.log("obj[1] :",obj[1]);
// console.log("obj.1 :",obj.1); -> Result : Error

console.log(" ");
console.log("---: Printing \"true\" of obj Object Literal :---");
console.log(" ");

console.log("obj[true] :",obj[true]);
console.log("obj.true :",obj.true);

console.log(" ");
console.log("---: Printing \"null\" of obj Object Literal :---");
console.log(" ");

console.log("obj[null] :",obj[null]);
console.log("obj.null :",obj.null);

console.log(" ");
console.log("---: Printing \"undefined\" of obj Object Literal :---");
console.log(" ");

console.log("obj[undefined] :",obj[undefined]);
console.log("obj.undefined :",obj.undefined);