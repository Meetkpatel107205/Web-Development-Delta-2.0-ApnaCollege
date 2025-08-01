
// Array Methods : forEach Method - 1 :---

let arr = [1, 2, 3, 4, 5];

let print = function(el) {
    console.log(el);
}

arr.forEach(print);

// --------------------------------------------------

let total = 0;

arr.forEach(function(el) {
    total += el;
});

console.log("Sum of all Element of Array :",total);

// --------------------------------------------------

let total1 = 0;

arr.forEach( (el) => {
    total1 += el;
});

let avg = (total1 / arr.length);

console.log("Average of Array :",avg);