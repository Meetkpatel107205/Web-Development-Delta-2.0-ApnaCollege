
// ---: PRACTICE Q - (10) :---

let country = ["Australia","Germany","United States of America"];

function retLargestName(array)
{
    let largestVal = 0;
    let largestEleIdx = 0;

    for(let i = 0; i < array.length; i++)
    {
        if(array[i].length > largestVal)
        {
            largestVal = array[i].length;
            largestEleIdx = i;
        }
    }

    return array[largestEleIdx];
}

console.log("Country Names :",country);
console.log("Longest Names From the Above Given List of Country Names :",retLargestName(country));