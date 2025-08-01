
// ---: PRACTICE Q - (08) :---

let arr = [5,7,2,3,9];

let num = 5;

function eleLargerThanNum(array,number)
{
    let tempArr = [];

    let idx = 0;

    for(let i=0;i<array.length;i++)
    {
        if(array[i] > number)
        {
            tempArr[idx] = array[i];
            idx++;
        }
    }

    return tempArr;
}

console.log("Array : ",arr);

console.log("Number : ",num);

console.log("Elements Larger than Number",num,":",eleLargerThanNum(arr,num));