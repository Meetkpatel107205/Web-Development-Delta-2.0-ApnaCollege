
// ---: PRACTICE Q - (12) :---

let start = 37;
let end = 45;

function genRandom(start,end)
{
    let diff = end - start;

    let randomNumber = Math.floor(Math.random()*diff) + start;

    return randomNumber;
}

console.log("Generated Random Number Between",start,"and",end,"is :",genRandom(start,end));