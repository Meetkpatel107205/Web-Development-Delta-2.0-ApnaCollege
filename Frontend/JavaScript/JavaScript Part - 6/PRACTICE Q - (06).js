
// ---: PRACTICE Q - (06) :---

function concatOfArray(str)
{

    let Result = "";

    for(let i=0;i<str.length;i++)
    {
        Result += str[i];
    }

    return Result;
}

let str1 = ["Hi","Hello","Bye","!"];

console.log("---: Calling \"concatOfArray\" Funtion :---");

console.log(" ");

console.log("Concatnation of Array [\"Hi\",\"Hello\",\"Bye\",\"!\"] :",concatOfArray(str1));