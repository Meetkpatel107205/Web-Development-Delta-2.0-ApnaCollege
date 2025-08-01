
// ---: Window Console Object Methods : console.assert() :---

let x = 5;
let y = 5;

console.log("x =",x);
console.log("y =",y);
// console.assert(x + y == 11,"Expression returned false"); ---OR---
window.console.assert(x + y == 11,"Expression returned false");

/* 

     ---> console.assert() OR window.console.assert() : The assert() method writes a message to the console if an
          expression evaluates to false.

*    ---> Syntax : console.assert(expression,message); ---OR---
*                  window.console.assert(expression,message);

     ---> +============+=====================================================================+
          | Parameter  | Description                                                         |
          +============+=====================================================================+
          | expression | -> Required.                                                        |
          |            | -> Any expression.                                                  |
          |            | -> If the expression evaluates to false,a message is written in the |
          |            |    console.                                                         |
          +------------+---------------------------------------------------------------------+ 
          | message    | -> Required.                                                        |
          |            | -> The message to write in the console.                             |
          +============+=====================================================================+

*/