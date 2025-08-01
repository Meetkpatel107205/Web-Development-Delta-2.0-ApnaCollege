
// ---: Arrow Function :---

const sum = (a,b) => {
    console.log("Sum :",(a + b));
}

console.log(sum); // <--- It will print funtion definition of "sum" Arrow Function.
sum(5,5);

const cube = (n) => {
    console.log("Cube :",(n*n*n));
}

/*

---> If we have only one parameter in Arrow Function then we can ignore parenthesis in function definition.
                                                                   |
                    +----------------------------------------------+
     +--------------|---------------------+
  -> |              V                     |
     | const cube = n => {                |
     |     console.log("Cube :",(n*n*n)); |
     | }                                  |
     |                                    |
     +------------------------------------+
     
*/

console.log(cube); // <--- It will print funtion definition of "cube" Arrow Function.
cube(3);

const pow = (a,b) => {
    return a**b;
}

console.log(pow); // <--- It will print funtion definition of "pow" Arrow Function.
console.log("2^4 :",pow(2,4));