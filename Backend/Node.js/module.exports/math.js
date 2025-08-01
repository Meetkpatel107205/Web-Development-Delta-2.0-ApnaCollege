
// ---: Introduction module.exports :---

// ---> Method - 1 :-

const sum = (a, b) => a + b;

/*

   ---> Method - 2 :-

   module.exports.sum = (a, b) => a + b;

   ---> Method - 3 :-

   exports.sum = (a, b) => a + b;

*/

const mul = (a, b) => a * b;

const g = 9.8;

const PI = 3.14;

// module.exports = "hello";

// ---> Method - 1 :-

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
}

/*

   ---> Method - 2 :-

module.exports = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
}

*/

module.exports = obj;