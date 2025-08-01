
// ---: Loops With Array :---

let fruit = ["Mango","Apple","Banana","Litchi","Orange"];

fruit.push("Pineapple")

console.log("---: Printing \"fruit\" Array Using Loop :---");
console.log(" ");

for(let i=0;i<fruit.length;i++)
{
    console.log("fruit[",i,"] :",fruit[i]);
}

/* 

     ---> Default For Loop With Array :- The default for loop can be used to iterate through the array
                                         and each element can be accessed by its respective index. 
                                        
       -> Syntax :-
                    +-----------------------------------+ 
                    | for (i = 0; i < list.length; i++) |
                    | {                                 |
                    |     // Lines of code to execute   |
                    | }                                 |
                    +-----------------------------------+

TODO ---> Dry Run Of Code Containing Loop With Array :-

       -> +-----------------+-----------------+-----------------+
          |     DRY RUN     | Index of Array  |    fruit[i]     |
          +-----------------+-----------------+-----------------+     
          | i = 0 -> True   |        0        |      Mango      |     
          | i = 1 -> True   |        1        |      Apple      |     
          | i = 2 -> True   |        2        |      Banana     |     
          | i = 3 -> True   |        3        |      Litchi     |     
          | i = 4 -> True   |        4        |      Orange     |     
          | i = 5 -> True   |        5        |     Pineapple   |     
          | i = 6 -> False  |                 |                 |     
          |                 |                 |                 |     
          +-----------------+-----------------+-----------------+     
        
*/