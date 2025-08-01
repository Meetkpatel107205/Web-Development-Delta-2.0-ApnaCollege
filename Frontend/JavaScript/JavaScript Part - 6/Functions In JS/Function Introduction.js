
// ---: Function Introduction :---

function hello()
{
    console.log("Hello");
}

console.log("---: Calling \"hello\" Function :---");
console.log(" ");

hello();
hello();
hello();

function printName() 
{
    console.log("Apna College");
    console.log("Meet Patel");
}

console.log(" ");
console.log("---: Calling \"printName\" Function :---");
console.log(" ");

printName();

function print1to5()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}

console.log(" ");
console.log("---: Calling \"print1to5\" Function :---");
console.log(" ");

print1to5();

function isAdult()
{
    let age = 18;

    if(age >= 18)
    {
        console.log("Adult");
    }
    else
    {
        console.log("Not Adult");
    }
}

console.log(" ");
console.log("---: Calling \"isAdult\" Function :---");
console.log(" ");

isAdult();

/* 

?  ---> Function Definition(telling JS) :-

*    -> Syntax :-
     
        +------------------------+ 
        | function funcName()    |
        | {                      |
        |      // do something   |
        | }                      |
        +------------------------+ 
        
?  ---> Function Calling(Using the function) :-
   
*    -> Syntax :-
     
        +------------------------+ 
        | funcName();            |
        +------------------------+ 
        
*/
