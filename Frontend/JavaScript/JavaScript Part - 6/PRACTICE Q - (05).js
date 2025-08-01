
// ---: PRACTICE Q - (05) :---

function sumOf1toN(n)
{

    let Sum = 0;

    for(let i=1;i<=n;i++)
    {
        Sum += i;
    }

    return Sum;
}

console.log("---: Calling \"sumOf1toN\" Funtion :---");

console.log(" ");

console.log("Sum of 1 to 5 Numbers :",sumOf1toN(5));