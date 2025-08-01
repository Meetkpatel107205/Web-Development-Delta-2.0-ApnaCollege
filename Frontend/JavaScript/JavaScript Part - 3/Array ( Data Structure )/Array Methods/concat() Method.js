
// ---: concat() Method :---

let primary = ["Red","Yellow","Blue"];
let secondary = ["Orange","Green","Violet"];
let cars = ["Audi","BMW","XUV","Maruti"];

console.log(" ")
console.log("---: Printing \"primary\" Array before performing concat() Method :---");
console.log(" ");

console.log(primary);

console.log(" ")
console.log("---: Printing \"secondary\" Array before performing concat() Method :---");
console.log(" ");

console.log(secondary);

console.log(" ");

//* console.log("Using concat() Method :-",primary.concat(secondary)); -> We can print the concated array like this.

let allColors = primary.concat(secondary);
//* We can also store the result of concat() method into other array like this.

console.log("allColors :-",allColors);

/*   

   ---> concat() Method :- merge two or more arrays.
 
*    -> Syntax :- arrayName.concat(array1,array2,...,arrayX)
 
TODO ---> Important Points :-
   
          [1.] The concat() method concatenates (joins) two or more arrays.
          [2.] The concat() method returns a new array, containing the joined arrays.
!         [3.] The concat() method does not change the existing arrays.

*/