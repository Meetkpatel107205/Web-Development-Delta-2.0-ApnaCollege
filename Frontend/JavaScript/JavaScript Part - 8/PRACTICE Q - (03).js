
// ---: PRACTICE Q - (03) :---

let arr = [1, 2, 3, 4, 5];

let square = arr.map((el) => {
    return el*el;
});

let sum = arr.reduce((res, el) => {
    return (res + el);
});

let avg = (sum / arr.length);

console.log("Array :",arr);
console.log("Square Array :",square);
console.log("Sum of all Elements present in arr :",sum);
console.log("Average of Array :",avg);

