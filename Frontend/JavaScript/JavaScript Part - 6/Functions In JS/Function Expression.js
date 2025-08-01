
// ---: Function Expression :---

let sum = function(a,b)
{
    return a + b;
}

console.log(sum);
console.log(sum(2,3));

let hello = function()
{
    console.log("hello");
}

hello = function()
{
    console.log("namaste");
}

console.log(hello);
console.log(hello());


/*

*    ---> Function Expression : A JavaScript function can also be defined using an expression.
       
       -> A function expression can be stored in a variable :-

       -> +-------------------------+
          |                         |
          | const x = function(a,b) |
          | {                       |
          | return a * b;           |
          | }                       |
          |                         |
          +-------------------------+

          +--------------------------+
       -> | Calling Syntax : x(2,3); |
          +--------------------------+

       -> Output :-

          +---+
          | 6 |
          +---+

     ---> Notes :-

       -> The function above is actually an anonymous function (a function without a name).
       -> Functions stored in variables do not need function names.They are always invoked(called) using the
          variable names.

*/