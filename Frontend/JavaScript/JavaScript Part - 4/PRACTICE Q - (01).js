
// ---: PRACTICE Q - (01) :---

let arr = [1,2,3,4,5,6,2,3];

console.log("---: Printing \"arr\" Array without any Modification :---");
console.log(" ");

console.log(arr);

let num = prompt("Enter the Number that you want to delete from the Array");

for(let i=0;i<arr.length;i++)
{
    if(arr[i] == num)
    {
        arr.splice(i,1);
    }
}

console.log(" ");
console.log("---: Printing \"arr\" Array After Deleting",num,"From the Array :---");
console.log(" ");

console.log(arr);