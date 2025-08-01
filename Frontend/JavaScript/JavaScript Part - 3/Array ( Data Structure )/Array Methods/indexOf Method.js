
// ---: indexOf Method :---

let primary = ["red","yellow","blue"];

console.log(primary);

console.log(" ");

console.log("Index of Element \"yellow\" :",primary.indexOf("yellow"));
console.log("Index of Element \"blue\" :",primary.indexOf("blue"));
console.log("Index of Element \"green\" :",primary.indexOf("green"));
console.log("Index of Element \"Yellow\" :",primary.indexOf("Yellow"));

/* 

   ---> indexOf Method :- returns index of something.

*    -> Syntax :- arrayName.indexOf(argument);

TODO ---> Some Important points related to "indexOf" Method :-
   
?       [1.] The indexOf() method returns the first index (position) of a specified value.

?       [2.] The indexOf() method returns -1 if the value is not found.

?       [3.] The indexOf() method starts at a specified index and searches from left to right
?            (from the given start postion to the end of the array).

        [4.] By default the search starts at the first element and ends at the last.

        [5.] Negative start values counts from the last element (but still searches from left to right).
        
*/