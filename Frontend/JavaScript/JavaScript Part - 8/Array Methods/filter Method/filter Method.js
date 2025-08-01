
// ---: Array Methods : filter Method :---

let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];

let even = nums.filter((num) => (num % 2 == 0)); // ---> even => true , odd => false
 
console.log(even);

let numLessThan5 = nums.filter((num) => {
    return (num < 5);
})

console.log(numLessThan5);