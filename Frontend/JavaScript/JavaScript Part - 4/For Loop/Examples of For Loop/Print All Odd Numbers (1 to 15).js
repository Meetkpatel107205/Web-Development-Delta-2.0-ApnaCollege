
// ---: Print All Odd Numbers (1 to 15) :---

console.log("---: Printing All Odd Numbers (1 to 15) :---");
console.log(" ");

// ---> Method - 1 :-

for(let i=1;i<=15;i++)  
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// ---> Method - 2 :-

// for(let i=1;i<=15;i=i+2)  
// {  
//     console.log(i);
// }

console.log(" ");
console.log("---: Printing All Odd Numbers Backwards (15 to 1) :---");
console.log(" ");

// ---> Method - 1 (Backwards) :-

for(let i=15;i>=1;i--)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// ---> Method - 2 (Backwards) :-

// for(let i=15;i>=1;i=i-2)  
// {  
//     console.log(i);
// }