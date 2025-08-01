
// ---: Comparison Operators :---

let age = 18;

console.log("age :",age);
console.log("age > 18 :",age > 18); // ---> Resule = false
console.log("age >= 18 :",age >= 18); // ---> Resule = true

console.log("------------------");

let age2 = 16;

console.log("age2 :",age2);
console.log("age2 < 18 :",age2 < 18); // ---> Resule = true
console.log("age2 <= 18 :",age2 <= 18); // ---> Resule = true

console.log("------------------");

console.log("5 == 5 :",5 == 5); // ---> Result = true
console.log("5 != 5 :",5 != 5); // ---> Result = false

console.log("------------------");

let num = 5;
let str = "5";

console.log("num =",num,"(Int Value)");
console.log("str =",str,"(String Value)");
console.log("num == str :",num == str); // ---> Result = true
console.log("num != str :",num != str); // ---> Result = false
console.log("1 == \'1\'",1 == '1'); // ---> Result = true
console.log("0 == \' \'",0 == ' '); // ---> Result = true
console.log("0 == false",0 == false); // ---> Result = true
console.log("null == undefined",null == undefined); // ---> Result = true
console.log("true != false :",true != false); // ---> Result = true

/* ---> "==" compares value,not type */

console.log("------------------");

console.log("num === str :",num === str); // ---> Result = false
console.log("1 === \'1\' :",1 === '1'); // ---> Result = false
console.log("0 === \' \' :",0 === ' '); // ---> Result = false
console.log("0 === false :",0 === false); // ---> Result = false
console.log("null === undefined :",null === undefined); // ---> Result = false
console.log("true !== false :",true !== false); // ---> Result = true

/* ---> "===" compares type and value */

console.log("------------------");

console.log("\'a\' > \'A\' :",'a' > 'A'); // ---> Result = true
console.log("\'a\' > \'b\' :",'a' > 'b'); // ---> Result = false
console.log("\'b\' < \'c\' :",'b' < 'c'); // ---> Result = true
console.log("\'B\' < \'C\' :",'B' < 'C'); // ---> Result = true
console.log("\'*\' < \'&\' :",'*' < '&'); // ---> Result = false

/* 
   
     ---> This is possible because of UNICODE value's of JavaScript
          ---> 'a' -> 61 , 'b' -> 62...
          ---> 'A' -> 41 , 'B' -> 42...
        
TODO ---> Comparison Operator :-
   
       -> +============+===================================+
          | Operator   | Descriptioin                      |
          +============+===================================+
          |     ==     | Equal to                          |
          +------------+-----------------------------------+
          |     ===    | Equal value and equal type        |
          +------------+-----------------------------------+
          |     !=     | Not equal                         |
          +------------+-----------------------------------+
          |     !==    | Not equal value or not equal type |
          +------------+-----------------------------------+
          |      >     | Greater than                      |
          +------------+-----------------------------------+
          |      <     | Less than                         |
          +------------+-----------------------------------+
          |      >=    | Greater than or equal to          |
          +------------+-----------------------------------+
          |      <=    | Less than or equal to             |
          +============+===================================+

*/

   