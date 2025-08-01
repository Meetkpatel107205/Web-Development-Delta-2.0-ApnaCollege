
// ---: Scope : Function Scope :---

let sum = 54; // <--- Global Scope

function calSum(a,b)
{
    let sum = a + b; // <--- Function Scope

    console.log("Sum = ",sum);
}

calSum(1,2);

console.log(sum);

/*

     ---> Global Scope : Global variables can be accessed from anywhere in a JavaScript program.
          
       -> Variables declared with var,let and const are quite similar when declared outside a block.
       -> They all have Global Scope.
       
     ---> Function Scope : Variables defined inside a function are not accessible(visible) from outside the function.

       -> Variables declared with var,let and const are quite similar when declared inside a function.
       -> They all have Function Scope.

*/