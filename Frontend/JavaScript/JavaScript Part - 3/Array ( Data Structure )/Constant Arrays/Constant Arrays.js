
// ---: Constant Arrays :---

const arr = [1,2,3];

let cars = ["Audi","BMW","XUV","Maruti"];

console.log("Constant Array :- arr :",arr);

arr.push(4);

console.log(" ")
console.log("---: Printing Constant Array \"arr\" after performing arr.push(4) Method :---");
console.log(" ");

console.log("Constant Array :- arr :",arr);

arr.pop();

console.log(" ")
console.log("---: Printing Constant Array \"arr\" after performing arr.pop() Method :---");
console.log(" ");

console.log("Constant Array :- arr :",arr);

// arr = [1,2,3]; ---> Error : We cannot change whole constant array.
// arr = cars; ---> Error : We cannot overide the address of another array in constant array.

/*

TODO ---> Important Points Related to "Constant Arrays" :---

          [1.] An array declared with const cannot be reassigned.
!         [2.] The keyword const is a little misleading. It does NOT define a constant array. 
!              It defines a constant reference to an array.Because of this, we can still change 
!              the elements of a constant array.

*/