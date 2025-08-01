
// ---: Print All Even Numbers (1 to 15) :---

console.log("---: Printing All Even Numbers (1 to 10) :---");
console.log(" ");

// ---> Method - 1 :-

for(let i=1;i<=10;i++)  
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}

// ---> Method - 2 :-

// for(let i=2;i<=10;i=i+2)  
// {  
//     console.log(i);
// }

console.log(" ");
console.log("---: Printing All Even Numbers Backwards (10 to 1) :---");
console.log(" ");

// ---> Method - 1 (Backwards) :-

for(let i=10;i>=1;i--)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}

// ---> Method - 2 (Backwards) :-

// for(let i=10;i>=1;i=i-2)  
// {  
//     console.log(i);
// }