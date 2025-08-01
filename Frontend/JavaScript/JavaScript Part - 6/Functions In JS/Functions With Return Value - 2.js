
// ---: Functions With Return Value - 2 :---

function sum(num1,num2)
{
    return (num1+num2);

//  ---> Lines of code after return statement will not execute.

    console.log("Hello");
    console.log("Hello");

}

// ---> Method - 1 :-

console.log("---: Calling \"sum\" Function And Storing its Return Value in \"Result\" Variable :---");

let Result = sum(sum(5,5),5); // ---> Result :- sum(sum(5,5),5); -> sum(10,5); -> Final Result :- 15

console.log(" ");

console.log("Result :",Result);

console.log(" ");

// ---> Method - 2 :-
   
console.log("---: Calling \"sum\" Function And Printing its Return Value as a Result of sum :---");

console.log(" ");

console.log("Result :",sum(sum(50,50),50)); // ---> Result :- sum(sum(50,50),50); -> sum(100,50); -> Final Result :- 150

/* 

!    ---> The return statement stops the execution of a function and returns a value. 

*/