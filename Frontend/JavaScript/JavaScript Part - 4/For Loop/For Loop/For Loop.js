
// ---: For Loop :---

console.log("---: Printing 1 to 10 using For Loop :---");
console.log(" ");

for(let i=1;i<=10;i++)
{
    console.log(i);
}

/* 

   ---> The for statement creates a loop with 3 optional expressions :-

        +------------------------------------------------+
        | for (expression 1; expression 2; expression 3) |
        | {                                              |
        |   // code block to be executed                 |
        | }                                              |
        +------------------------------------------------+

     -> Expression 1 is executed (one time) before the execution of the code block.

     -> Expression 2 defines the condition for executing the code block.

     -> Expression 3 is executed (every time) after the code block has been executed.

TODO ---> Expression - 1 :-
   
     -> Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
     -> This is not always the case. JavaScript doesn't care. Expression 1 is optional.
     -> You can initiate many values in expression 1 (separated by comma).
        
?  ---> Example :-
 
     -> +------------------------------+ 
        | for(var i=0,j=0;i<5;i++,j++) |
        | {                            |
        |     console.log(i+":"+j);    |
        | }                            |
        +------------------------------+

TODO ---> Expression - 2 :-

     -> Often expression 2 is used to evaluate the condition of the initial variable.
     -> This is not always the case. JavaScript doesn't care. Expression 2 is also optional.
     -> If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
!    -> If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end.
!       This will crash your browser. Read about breaks in a later chapter of this tutorial.

TODO ---> Expression - 3 :-

     -> Often expression 3 increments the value of the initial variable.
     -> This is not always the case. JavaScript doesn't care. Expression 3 is optional.
     -> Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), 
        or anything else.
     -> Expression 3 can also be omitted (like when you increment your values inside the loop) 

TODO ---> Dry Run Of Code Containing Loop :-

       -> +-----------------+-----------------+
          |     Output      |     DRY RUN     |
          +-----------------+-----------------+     
          |        1        | i = 1 -> True   |     
          |        2        | i = 2 -> True   |     
          |        3        | i = 3 -> True   |     
          |        4        | i = 4 -> True   |     
          |        5        | i = 5 -> True   |     
          |                 | i = 6 -> False  |     
          |                 |                 |     
          +-----------------+-----------------+     
        
*/