
// ---: Printing Array In Reverse Order Using Loop :---

let fruit = ["Mango","Apple","Banana","Litchi","Orange"];

console.log("---: Printing \"fruit\" Array In Reverse Order Using Loop :---");
console.log(" ");

for(let i=(fruit.length-1);i>=0;i--)
{
    console.log("fruit[",i,"] :",fruit[i]);
}

/* 

TODO ---> Dry Run Of Code Containing Loop With Array in Reverse Order :-

       -> +-----------------+-----------------+-----------------+
          |     DRY RUN     | Index of Array  |    fruit[i]     |
          +-----------------+-----------------+-----------------+     
          | i = 4 -> True   |        4        |      Orange     |     
          | i = 3 -> True   |        3        |      Litchi     |     
          | i = 2 -> True   |        2        |      Banana     |     
          | i = 1 -> True   |        1        |      Apple      |     
          | i = 0 -> True   |        0        |      Mango      |     
          | i = -1 -> False |       -1        |                 |     
          |                 |                 |                 |     
          +-----------------+-----------------+-----------------+     
        
*/
