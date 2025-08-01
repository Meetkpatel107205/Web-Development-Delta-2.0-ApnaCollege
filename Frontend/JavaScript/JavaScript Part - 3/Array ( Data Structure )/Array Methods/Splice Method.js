
// ---: Splice Method :---

let cars = ["Audi","BMW","XUV","Maruti"];

console.log(" ");
console.log("---: Printing \"cars\" Array before applying splice() Method :---");
console.log(" ");

console.log(cars); // -> Result :- ['Audi','BMW','XUV','Maruti']

console.log(" ");

console.log("Deleted Element of \"cars\" Array :",cars.splice(3)); // -> Result :- ['Maruti']

console.log(" ");
console.log("---: Printing \"cars\" Array after applying cars.splice(3) Method :---");
console.log(" ");

console.log(cars); // -> Result :- ['Audi','BMW','XUV']

console.log(" ");

console.log("Deleted Element of \"cars\" Array :",cars.splice(0,1)); // -> Result :- ['Audi']

console.log(" ");
console.log("---: Printing \"cars\" Array after applying cars.splice(0,1) Method :---");
console.log(" ");

console.log(cars); // -> Result :- ['BMW','XUV']

cars.push("Maruti"); // -> Result :- ['BMW','XUV','Maruti']
cars.push("Ferrari"); // -> Result :- ['BMW','XUV','Maruti','Ferrari']

console.log(" ");
console.log("---: Printing \"cars\" Array after pushing some elements :---");
console.log(" ");

console.log(cars); // -> Result :- ['BMW','XUV','Maruti','Ferrari']

console.log(" ");

console.log("Deleted Element of \"cars\" Array :",cars.splice(1,2)); // -> Result :- ['XUV','Maruti']

console.log(" ");
console.log("---: Printing \"cars\" Array after applying cars.splice(1,2) Method :---");
console.log(" ");

console.log(cars); // -> Result :- ['BMW','Ferrari']

console.log(" ");

console.log("Deleted Element of \"cars\" Array :",cars.splice(0,0,"Toyota","XUV","Maruti")); // -> Result :- []

console.log(" ");
console.log("---: Printing \"cars\" Array after applying cars.splice(0,0,\"Toyota\",\"XUV\",\"Maruti\") Method :---");
console.log(" ");

console.log(cars); // -> Result :- ['Toyota','XUV','Maruti','BMW','Ferrari']

console.log(" ");

console.log("Deleted Element of \"cars\" Array :",cars.splice(1,0,"Mercedes")); // -> Result :- []

console.log(" ");
console.log("---: Printing \"cars\" Array after applying cars.splice(1,0,\"Mercedes\") Method :---");
console.log(" ");

console.log(cars); // -> Result :- ['Toyota','Mercedes','XUV','Maruti','BMW','Ferrari']

console.log(" ");

console.log("Deleted Element of \"cars\" Array :",cars.splice(1,1,"G-Wagon")); // -> Result :- []

console.log(" ");
console.log("---: Printing \"cars\" Array after applying cars.splice(1,1,\"G-Wagon\") Method :---");
console.log(" ");

console.log(cars); // -> Result :- ['Toyota','G-Wagon','XUV','Maruti','BMW','Ferrari']

/* 

   ---> splice() Method :- remove | replace | add elements in place

*    -> Syntax :- arrayName.splice(startIndex,deletcCount,item0...itemN);
!                                                 ^             ^
!                                                 |             |
!                                                 |             +------- Items that are going to be replaced
!                                                 |
!                              No. of items that are going to be deleted
                                
TODO ---> Important Points :-
     
          [1.] The splice() method adds and/or removes array elements.
!         [2.] The splice() method overwrites the original array.
          
*/
