
// ---: PRACTICE Q - (02) :---

let num = 287152;

let countDigit = 0;

let copy = num;

while(copy > 0)
{
    countDigit++;
    copy = Math.floor(copy/10);
}

console.log(" ");
console.log("Entered Number is :",num);
console.log("Total Digits in Entered Number are :",countDigit);