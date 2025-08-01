
// ---: Break Keyword With While Loop :---

let i = 1;

while(i <= 5)
{
    if(i == 3)
    {
        break;
    }
    console.log(i);
    i++;
}

console.log("We used \"Break Keyword\" at 3");

/* 

   ---> Break Keyword :- The break statement breaks out of a switch or a loop.

TODO ---> Important Point :-

     -> In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch.
     -> In in a loop, it breaks out of the loop and continues executing the code after the loop (if any).

*/