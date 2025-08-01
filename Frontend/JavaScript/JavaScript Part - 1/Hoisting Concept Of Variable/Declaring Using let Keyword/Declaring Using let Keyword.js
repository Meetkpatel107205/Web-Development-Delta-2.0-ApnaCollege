
// ---: Hoisting Concept : Declaring Variable Using let Keyword :---

console.log(a); // ---> Result : Uncaught ReferenceError: Cannot access 'a' before initialization
                //               at Declaring Using let Keyword.js:4:13
let a = 5;
console.log(a);

/* 

      ---> Variables declared with let are hoisted, but they are not initialized.
      ---> Instead, they remain in the Temporal Dead Zone (TDZ) until the code execution reaches their 
           declaration.

TODO  ---> Explanation of Above given "JavaScript Code" :-

*       -> let a is hoisted but remains uninitialized in the TDZ.
*       -> Accessing it before declaration throws a ReferenceError.

?     ---> TDZ(Temporal Dead Zone) :-

!       -> TDZ stands for Temporal Dead Zone in JavaScript.
*       -> It refers to the period between the declaration of a variable using let or const and
*          its initialization, during which the variable cannot be accessed. Attempting to access
*          the variable in this zone will throw a ReferenceError.
           
TODO  ---> Key Points :-

!       -> Scope Binding: Variables declared with let and const are hoisted to the top of their scope but
!          remain uninitialized until the code execution reaches the declaration statement.
        -> Error Behavior: Accessing the variable before its declaration results in a ReferenceError.
        -> TDZ Ends: The temporal dead zone ends once the variable is initialized.

*     ---> JavaScript Hoisting with let :-
      
        -> +------------------------------------------------------------+
           | console.log(name); // ReferenceError : name is not defined |
           | let name = 'Meet Patel';                                   |
           +------------------------------------------------------------+

*/
