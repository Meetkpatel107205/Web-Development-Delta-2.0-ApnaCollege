
// ---: PRACTICE Q - (05) :---

let arr = [1,2,7,3,9];

let largest = 0;

for(let i=0;i<arr.length;i++)
{
    if(arr[i] > largest)
    {
        largest = arr[i];
    }
}

console.log(" ");
console.log("Largest Number Present in Array is :",largest);