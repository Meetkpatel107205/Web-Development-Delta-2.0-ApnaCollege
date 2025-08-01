
// ---: Print the Multiplication Table for 5 :---

let n = prompt("Write a number that you want to print table of :");
n = parseInt(n); 
/* ---> Because Inputs that we are taking from promt that are in form of String so we have 
        to convert or type case them into int using "parseInt(arg)" method. */

console.log(`---: Printing Multiplication Table of ${n} Using For Loop :---`);
console.log(" ");

let count = 1;

for(let i=n;i<=n*10;i=i+n)
{
    console.log(n,"*",count,"=",i);
    count++;
}

// ---> Method - 2 :---

// for(let i=1;i<=10;i++)
// {
//     console.log(n,"*",i,"=",i*n);
// }