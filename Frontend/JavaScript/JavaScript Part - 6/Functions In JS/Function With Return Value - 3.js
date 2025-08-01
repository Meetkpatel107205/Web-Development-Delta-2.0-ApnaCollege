
// ---: Function With Return Value - 3 :---

function isAdult(age)
{
    if(age >= 18)
    {
        return "Adult";
    }
    else
    {
        return "Not Adult";
    }

//  ---> Lines of code after return statement will not execute.

    console.log("Bye Bye");
}

console.log("---: Calling \"isAdult\" Funtion :---");

console.log(" ");

console.log("isAdult(age = 20) :",isAdult(20));