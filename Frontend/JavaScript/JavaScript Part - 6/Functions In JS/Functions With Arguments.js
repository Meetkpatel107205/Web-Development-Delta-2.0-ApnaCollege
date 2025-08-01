
// ---: Functions With Arguments :---

function printInfo(name,age)
{
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
}

console.log("---: Calling \"printInfo\" Function With Argument \"Name : Meet Patel\" And \"Age : 19\" :---");
console.log(" ");

printInfo("Meet Patel",19);

console.log(" ");
console.log("---: Calling \"printInfo\" Function With Argument \"Name : Jash Patel\" And \"Age : 16\" :---");
console.log(" ");

printInfo("Jash Patel",16);

console.log(" ");
console.log("---: Calling \"printInfo\" Function With Argument \"Name : Neel Patel\" And \"Age : \" :---");
console.log(" ");

printInfo("Neel Patel");

/* 

?  ---> Function Definition(telling JS) :-

*    -> Syntax :- 
     
        +------------------------------------------------------------+ 
        | function functionName(parameter1, parameter2, parameter3)  |
        | {                                                          |
        |      // do something                                       |
        | }                                                          |
        +------------------------------------------------------------+ 
        
?  ---> Function Calling(Using the function) :-
   
*    -> Syntax :-
     
        +--------------------------------+ 
        | funcName(arg1,arg2,....,argn); |
        +--------------------------------+ 

TODO ---> Important Points :-

        -> Function parameters are the names listed in the function definition.
        -> Function arguments are the real values passed to (and received by) the function.

TODO ---> Parameter Rules :-

          -> JavaScript function definitions do not specify data types for parameters.
          -> JavaScript functions do not perform type checking on the passed arguments.
          -> JavaScript functions do not check the number of arguments received.

TODO ---> Default Parameters :-

          -> If a function is called with missing arguments (less than declared), 
             the missing values are set to undefined.
        
*/
