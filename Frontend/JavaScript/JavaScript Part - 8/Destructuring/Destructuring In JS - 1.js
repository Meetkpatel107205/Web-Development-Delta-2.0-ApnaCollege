
// ---: Destructuring in JS - 1 :---

let names = ["tony", "bruce", "peter", "steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup] = names;

console.log("winner :",winner);
console.log("runnerup :",runnerup);
console.log("secondRunnerup :",secondRunnerup);