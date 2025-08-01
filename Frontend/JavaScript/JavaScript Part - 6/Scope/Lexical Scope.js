
// ---: Lexical Scope :---

function outerFunc()
{
    let x = 5;
    let y = 5;

    function innerFunc()
    {
        console.log("---: Printing \"x\" varible inside the \"innerFunc\" which is defined inside the \"outerFunc\" (Inner Function Calling when Variable is defined before function Defination) :---");
        console.log(" ");
        console.log("x :",x);
    }

    console.log("---: Calling \"innerFunc\" inside the \"outerFunc\" :---");
    console.log(" ");

    innerFunc();
}

    
console.log("---: Calling \"outerFunc\" Function :---");
console.log(" ");

outerFunc();