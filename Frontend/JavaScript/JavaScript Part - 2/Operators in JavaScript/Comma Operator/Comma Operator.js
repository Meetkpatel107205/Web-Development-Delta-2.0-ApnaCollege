
// ---: Comma Operator :---

let x = (1,2,4);
console.log("x =",x);

let a = 1,b = 2,c = 3;

let result = (a++,b++,c++);

console.log("Result :",result);
console.log("a =",a,"b =",b,"c =",c);

/*

*    ---> Comma Operator : JavaScript Comma Operator mainly evaluates its operands from left to right
*                          sequentially and returns the value of the rightmost operand.

                         +------------------------------+
                         |                              |
       -> +--------------|------------+                 |
          |              |            |                 V
          | let x = (1,2,4);          | -> Result : x = 4 (Right Most Operand)
          |                           |
          +---------------------------+


*/