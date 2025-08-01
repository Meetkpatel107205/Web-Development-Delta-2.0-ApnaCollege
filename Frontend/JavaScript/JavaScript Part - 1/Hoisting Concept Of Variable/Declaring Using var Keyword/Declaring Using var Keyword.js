
// ---: Hoisting Concept : Declaring Variable Using var Keyword :---

console.log(a); // ---> Result : undefined
var a = 5;
console.log(a); // ---> Result : 5

/* 

?  ---> Hoisting Concept :-

*    -> Hoisting is a behavior in JavaScript where variable and function declarations are moved to the
*       top of their containing scope during the compile phase, before code execution.

     -> This means that you can use a variable or function before declaring it in the code. However,
        there are differences in how variables declared with var, let, const, and functions are hoisted.

*  ---> Features of Hoisting :-
   
     -> Declarations are hoisted, not initializations.
     -> Allows calling functions before their declarations.
     -> All variable and function declarations are processed before any code execution.
     -> Undeclared variables are implicitly created as global variables when assigned a value.
     -> Note: JavaScript only hoists declarations, not initializations.

!  ---> Sequence of Variable declaration :-
   
*       +---------------------------------------------------+
*    -> | Declaration –> Initialisation/Assignment –> Usage |
*       +---------------------------------------------------+

TODO ---> Explanation of Above given "JavaScript Code" :-

     -> Variables declared with var are hoisted to the top, but only the declaration is hoisted,
        not the initialization.
     -> During compilation, the declaration var a; is hoisted to the top, but the assignment a = 5
        remains in its original place.
!    -> Hence, when console.log(a) is executed before initialization, it gives undefined instead of
!       throwing an error.

* ---> JavaScript var Hosting :-

*   -> +---------------------------------+
*      | console.log(name); // undefined |
*      | var name = 'Meet Patel';        |
*      +---------------------------------+
  
?   -> How Interpreter sees the above code :-
  
*   -> +---------------------------------+
*      | var name; <-------------------------------+      
*      | console.log(name); // undefined |         |
*      | var name = 'Meet Patel';        |         |
*      +---------------------------------+         |
                                                   |
!                                               Hoisting

*/