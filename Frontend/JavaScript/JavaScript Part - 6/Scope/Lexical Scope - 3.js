
// ---: Lexical Scope - 3 :---

function outerFunc()
{
    let x = 5;
    let y = 5;

    function innerFunc()
    {
        let a = 10;
    }

    console.log("---: Trying to Print \"a\" variable in \"outerFunc Defination\" which is define inside the \"innerFunc\"");
    console.log(" ");

    //! console.log(a); -> Error(Opposite Lexical Scope is Not Possible).
}

    
console.log("---: Calling \"outerFunc\" Function :---");
console.log(" ");

outerFunc();

console.log("---: Trying to Call \"innerFunc\" Function ouside the Block of \"outerFunc Defination\" :---");
console.log(" ");

// innerFunc(); -> Error