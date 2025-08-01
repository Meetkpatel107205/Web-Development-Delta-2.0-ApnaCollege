
// ---: typeof Operator :---

console.log("typeof 42 :",typeof 42);                     // ---> Result = "number"
console.log("typeof 'Hello' :",typeof 'Hello');           // ---> Result = "string"
console.log("typeof true :",typeof true);                 // ---> Result = "boolean"
console.log("typeof undefined :",typeof undefined);       // ---> Result = "undefined"
console.log("typeof null :",typeof null);                 // ---> Result = "object"(historical bug)
console.log("typeof {} :",typeof {});                     // ---> Result = "object"
console.log("typeof [] :",typeof []);                     // ---> Result = "object"
console.log("typeof function(){} :",typeof function(){}); // ---> Result = "function"

/*

TODO ---> typeof Operator :-

       -> Purpose : Determines the type of a variable or expression.

*                  +----------------+
*      -> Syntax : | typeof Operand |
*                  +----------------+

       -> Returns : A string indicating the type.

*/