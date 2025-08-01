
// ---: Rest in JS - 1 :---

function sum(...args) {
    for(let i = 0; i < args.length; i++)
    {
        console.log("Yoa gave us :",args[i]);
    }
}

sum(1);

console.log("----------------------------------");

sum(1, 2);

console.log("----------------------------------");

sum(1, 2, 3, 4);