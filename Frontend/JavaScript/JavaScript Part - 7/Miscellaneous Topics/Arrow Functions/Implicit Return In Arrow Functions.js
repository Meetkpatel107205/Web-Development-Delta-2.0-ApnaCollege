
// ---: Implicit Return in Arrow Functions :---

const sum = (a,b) => (a+b);

const mul = (a,b) => (a*b);

const cube = (n) => (n*n*n);

/*

---> In Implicit Return of Arrow Functions we can ignore parenthesis.
                                                     |
                             +-----------------------+
                             |
     +-----------------------|----+
     |                       V    |
     | const cube = (n) => n*n*n; |
     |                            |
     +----------------------------+

*/

console.log("4 + 5 :",sum(4,5));
console.log("2 * 3 :",mul(2,3));
console.log("Cube of 3 :",cube(3));