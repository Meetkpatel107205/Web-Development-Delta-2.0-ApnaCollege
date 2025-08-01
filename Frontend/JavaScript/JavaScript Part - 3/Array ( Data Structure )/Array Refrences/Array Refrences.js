
// ---: Array Refrences :---

// console.log("[1] === [1] :",([1] === [1])); -> Result :- false (Syntax Error)
console.log("[1] == [1] :",([1] == [1])); // -> Result :- false
// console.log("[] === [] :",([] === [])); // -> Result :- false (Syntax Error)
console.log("[] == [] :",([] == [])); // -> Result :- false

let arr = ['a','b'];

let arrCopy = arr;

console.log(" ");

console.log("arrCopy :",arr);
console.log("arrCopy :",arrCopy);

arrCopy.push('c');

console.log(" ");
console.log("---: Printing \"arr And arrCopy\" Array after applying push Method to arrCopy :---");
console.log(" ");

console.log("arrCopy :",arrCopy);
console.log("arr :",arr);

console.log(" ");

console.log("arr == arrCopy :",arr == arrCopy); // -> Result :- true

/*   
     ---> Refrences :- addres in memory.
  
*      -> In JavaScript, arrays and objects are reference types. This means that when you assign 
*         an array or an object to another variable, you're copying the reference to the 
*         original array or object, not creating a new copy of the array or object itself.
          
TODO ---> Key Points:
  
?    [1.] Reference Equality vs Value Equality:
          
       -> === and == in JavaScript check for reference equality when it comes to objects and arrays, 
          not value equality.Two different arrays or objects are only equal (=== or ==) if they reference 
          the exact same object in memory.
          
?    [2.] Array References:
          
       -> When you create an array "arr" and then set "arrCopy = arr", both "arr" and "arrCopy" point to the same 
          array in memory.Any changes made to "arrCopy" will also be reflected in "arr" because they both refer to 
          the same array.
  
TODO ---> Code Explanation:
          
?    [1.] Comparing Arrays:
          
       -> "([1] === [1])" and "([] === [])" both return false because each array is a different object in memory, 
          even if they have the same content."([1] == [1])" and "([] == [])" also return false for the same reason.
          
?    [2.] Reference Copy:
          
       -> When you assign arrCopy = arr, both arr and arrCopy refer to the same array in memory.
          When you modify arrCopy by pushing a new element (arrCopy.push('c')), the change is also seen 
          in arr because both variables point to the same array.The comparison arr == arrCopy returns true 
          because they are both references to the same array in memory.
          
*/