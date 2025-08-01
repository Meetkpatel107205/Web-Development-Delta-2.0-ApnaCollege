
// ---: Destructuring in JS - 2 :---

let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
// let winner = names[0];
// let runnerup = names[1];

let [winner, runnerup, ...others] = names;

console.log("winner :",winner);
console.log("runnerup :",runnerup);
console.log("others :",others);