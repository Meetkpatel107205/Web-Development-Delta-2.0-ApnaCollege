
// ---: Lexical Scope - 2 :---

function outerFunc()
{

    function innerFunc()
    {        
        console.log("---: Printing \"x\" varible inside the \"innerFunc\" which is defined inside the \"outerFunc\" (Inner Function Calling when Variable is defined After function Defination) :---");
        console.log(" ");
        console.log("x :",x);
    }

    let x = 5;
    let y = 5;

    console.log("---: Calling \"innerFunc\" inside the \"outerFunc\" :---");
    console.log(" ");

    innerFunc();

    //!  ---> This Concept is known as "Hoisting".

}

    
console.log("---: Calling \"outerFunc\" Function :---");
console.log(" ");

outerFunc();