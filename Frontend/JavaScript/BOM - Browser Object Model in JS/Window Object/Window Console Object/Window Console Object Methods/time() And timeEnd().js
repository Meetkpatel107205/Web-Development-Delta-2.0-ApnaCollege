
// ---: Window Console Object Method : console.time() :---

console.time();
for(let i=0;i<100000;i++)
{
    // some code
}
console.timeEnd();

console.time("Time to do 10 Iterations in for Loop");
for(let i=0;i<10;i++)
{
    // some code
}
console.timeEnd("Time to do 10 Iterations in for Loop");

console.time("Time to do 5 Iterations in for Loop");
for(let i=0;i<5;i++)
{
    // some code
}
/*
!     ---> If we don't write "console.timeEnd();" after "console.time()" method then it will not endand and
!          also not print the resultant time.
*/

/*

     ---> console.time() OR window.console.time() : The time() method starts a timer in the console view.
          The time() method allows you to time code for testing purposes.

     ---> console.timeEnd() OR window.console.timeEnd() : The timeEnd() method ends a timer,and writes the
          result to the console.The timeEnd() method allows you to time code operations for testing purposes.

*    ---> Syntax : console.time(label);
*                     --some code--
*                  console.timeEnd(label);
*
*                          ---OR---
*
*                  window.console.time(label);
*                        --some code--
*                  window.console.timeEnd(label);

TODO ---> Notes :-

       -> You can run many timers at the same time.
       -> Use the "label" parameter to name different timers.
       
     ---> +============+======================================+
          | Parameter  | Description                          |
          +============+======================================+
          | label      | -> Optional.                         |
          |            | -> A label to give the timer a name. |
          +============+======================================+  

*/
