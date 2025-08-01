
// ---: sort() Method :---

let alphabets = ["G","S","C","A","Z","b","a"];

console.log(" ");
console.log("---: Printing \"alphabets\" Array before applying sort() Method :---");
console.log(" ");

console.log(alphabets);

alphabets.sort();

console.log(" ");
console.log("---: Printing \"alphabets\" Array after applying alphabets.sort() Method :---");
console.log(" ");

console.log(alphabets);

let marks = [99,89,67,42,100];

console.log(" ");
console.log("---: Printing \"marks\" Array before applying sort() Method :---");
console.log(" ");

console.log(marks);

marks.sort();

console.log(" ");
console.log("---: Printing \"marks\" Array after applying marks.sort() Method :---");
console.log(" ");

console.log(marks);

let marks2 = [9,7,3,5,2];

console.log(" ");
console.log("---: Printing \"marks2\" Array before applying sort() Method :---");
console.log(" ");

console.log(marks2);

marks2.sort();

console.log(" ");
console.log("---: Printing \"marks2\" Array after applying marks2.sort() Method :---");
console.log(" ");

console.log(marks2);

/* 

   ---> sort() Method :- sorts an array

*    -> Syntax :- arrayName.sort();
     
     ---> Important Points :-
     
          [1.] The sort() method sorts the elements of an array.
!         [2.] The sort() method sorts the elements as strings in alphabetical and ascending order.
!         [3.] The sort() method overwrites the original array.
    
?    ---> Sorting alphabetically works well for strings ("Apple" comes before "Banana").
?         But, sorting numbers can produce incorrect results like shown in 
?         above given code line no. - 28 and 34(Result).
?         "25" is bigger than "100", because "2" is bigger than "1".
?         You can fix this by providing a "compare function"
          
*/