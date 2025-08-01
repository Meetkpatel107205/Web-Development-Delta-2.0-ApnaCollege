
// ---: PRACTICE Q - (03) :---

let num = 287152;

let sumOfDigits = 0;

let copy = num;

while(copy > 0)
{
    digit = copy % 10;
    sumOfDigits = sumOfDigits + digit;
    copy = Math.floor(copy/10);
}

console.log(" ");
console.log("Entered Number is :",num);
console.log("Sum of Digits of Entered Number is :",sumOfDigits);