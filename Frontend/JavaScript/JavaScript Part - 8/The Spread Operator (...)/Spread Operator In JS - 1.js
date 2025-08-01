
// ---: Spread Operator in JS - 1 :---

console.log(Math.min(1, 2, 5, 0, 6, 3, 6));

let arr = [1, 4, 6, 7, 2, 0, 3, 10, -1];

console.log("Minimum Element From Array :",Math.min(...arr));
console.log("Maximum Element From Array :",Math.max(...arr));

console.log("Every Elements of Array :",...arr);
console.log("Individual Characters of \"apnacollege\" :",..."apnacollege");