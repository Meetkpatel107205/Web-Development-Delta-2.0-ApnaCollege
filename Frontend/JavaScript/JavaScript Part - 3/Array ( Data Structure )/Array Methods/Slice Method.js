
// ---: Slice Method :---

let colors = ["red","yellow","blue","orange","pink","white"];

console.log(" ");
console.log("---: Printing \"colors\" Array before applying slice() Method :---");
console.log(" ");

console.log(colors); // -> Result :- ['red','yellow','blue','orange','pink','white']

console.log(" ");
console.log("---: Printing \"colors\" Array with using colors.slice() Method :---");
console.log(" ");

console.log(colors.slice()); // -> Result :- ['red','yellow','blue','orange','pink','white']

console.log(" ");
console.log("---: Printing \"colors\" Array with using colors.slice(2) Method :---");
console.log(" ");

console.log(colors.slice(2)); // -> Result :- ['blue','orange','pink','white']

console.log(" ");
console.log("---: Printing \"colors\" Array with using colors.slice(2,3) Method :---");
console.log(" ");

console.log(colors.slice(2,3)); // -> Result :- ['blue']

console.log(" ");
console.log("---: Printing \"colors\" Array with using colors.slice(-2) Method :---");
console.log(" ");

console.log(colors.slice(-2)); // -> Result :- ['pink','white']

console.log(" ");
console.log("---: Printing \"colors\" Array with using colors.slice(10) Method :---");
console.log(" ");

console.log(colors.slice(10));  // -> Result :- []

console.log(" ");
console.log("---: Printing \"colors\" Array with using colors.slice(-8) Method :---");
console.log(" ");

console.log(colors.slice(-8)); // -> Result :- ['red','yellow','blue','orange','pink','white']

/* 

   ---> slice() Method :- copies a portion of an array. 

*    -> Syntax :- arrayName.slice(startIndex,endIndex);
!                                                ^
!                                                |
!                                                +------- Exclusive(Not inclusive)

TODO ---> Important Points :-

          [1.] The slice() method returns selected elements in an array, as a new array.
          [2.] The slice() method selects from a given start, up to a (not inclusive) given end.
          [3.] The slice() method does not change the original array.
          
*/


