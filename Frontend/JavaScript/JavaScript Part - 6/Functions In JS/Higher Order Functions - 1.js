
// ---: Higher Order Functions - 1 :---

function multipleGreet(func,n)
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
}

let greet = function()
{
    console.log("hello");
}

multipleGreet(greet,2);
/*              ^
                |
                +-------- We have to write only function name here without parenthesis.

*/

/*

     ---> Higher Order Functions : A higher-order function is a function that does one of the following :

       -> Takes another function as an argument.
       -> Returns another function as its result.

*/