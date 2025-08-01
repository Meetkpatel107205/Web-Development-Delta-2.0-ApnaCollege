
// ---: PRACTICE Q - (04) :---

function mulTable(num)
{
    console.log(" ");
    console.log("---: Printing Multiplication Table of",num,":---");
    console.log(" ");

    for(let i=1;i<=10;i++)
    {
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

console.log("---: Calling \"mulTable\" Function :---");

mulTable(5);