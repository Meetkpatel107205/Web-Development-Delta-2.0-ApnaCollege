
// ---: Array Methods : map Method - 1 :---

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el*2;
});

console.log(double);

let square = num.map((el) => {
    return el*el;
});

console.log(square);

let nothing = num.map((el) => {

});

console.log(nothing);