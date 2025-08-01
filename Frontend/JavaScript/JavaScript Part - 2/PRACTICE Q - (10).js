
// ---: PRACTICE Q - (10) :---

let num1 = 1;
let num2 = 5;
let num3 = 3;

if(num1 > num2)
{
    if(num1 > num3)
    {
        console.log("Largest Number of 3 Number's is",num1);
    }
    else
    {
        console.log("Largest Number of 3 Number's is",num3);
    }
}
else if(num2 > num3)
{
    console.log("Largest Number of 3 Number's is",num2);
}
else
{
    console.log("Largest Number of 3 Number's is",num3);
}