
// ---: Nested For Loop :---

for(let i=1;i<=3;i++) // ---> Outer Loop
{
    console.log(`Outer Loop ${i}`);
    for(let j=1;j<=3;j++) // ---> Inner Loop
    {
        console.log(j);
    }
}

/* 

     ---> Nested For Loop :- This is the most straightforward approach, where a for loop is placed 
                             inside another for loop.It is often used for iterating over two-dimensional arrays 
                             or creating simple patterns.

!                                                                  Outer Loop
                                                                        |
*      -> Syntax :-                                                     |
                    +-------------------------------------------+       |
                    | for (let i = 0; i < outerLimit; i++) <----|-------+     
                    | {                                         |
                    |    for (let j = 0; j < innerLimit; j++) <-|-------+
                    |    {                                      |       |
                    |         // Code to execute                |       |
                    |    }                                      |       |
                    | }                                         |       |
                    +-------------------------------------------+       |
                                                                        |
!                                                                   Inner Loop

TODO ---> Dry Run Of Code Containing Loop :-

       -> +-----------------+------------------------------+
          |     Output      |            DRY RUN           |  
          +-----------------+------------------------------+     
          |                 | Outer Loop :- i = 1 -> True  |
          |                 |                              |
          |        1        | Inner Loop :- j = 1 -> True  |     
          |        2        | Inner Loop :- j = 2 -> True  |     
          |        2        | Inner Loop :- j = 3 -> True  |     
          |                 | Inner Loop :- j = 4 -> False |
          |                 |                              |
          |                 | Outer Loop :- i = 2 -> True  |
          |                 |                              |
          |        1        | Inner Loop :- j = 1 -> True  |     
          |        2        | Inner Loop :- j = 2 -> True  |     
          |        3        | Inner Loop :- j = 3 -> True  |     
          |                 | Inner Loop :- j = 4 -> False |
          |                 |                              |
          |                 | Outer Loop :- i = 3 -> True  |
          |                 |                              |
          |        1        | Inner Loop :- j = 1 -> True  |     
          |        2        | Inner Loop :- j = 2 -> True  |     
          |        3        | Inner Loop :- j = 3 -> True  |     
          |                 | Inner Loop :- j = 4 -> False |
          |                 |                              |
          |                 | Outer Loop :- i = 4 -> False |     
          |                 |                              |   
          +-----------------+------------------------------+

*/