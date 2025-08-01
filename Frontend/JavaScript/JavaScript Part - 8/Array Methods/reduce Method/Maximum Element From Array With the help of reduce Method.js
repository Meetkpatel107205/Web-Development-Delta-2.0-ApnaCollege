
// ---: Maximum Element From Array With the help of reduce Method :---

let arr = [1, 4, 2, 5, 6, 7, 2, 11, 9, 2];

let max = -1;

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] > max)
    {
        max = arr[i];
    }
}

console.log("Maximum Element From Array :",max);

// ---> Using reduce Method :-

// => Method - 1 :-

let max1 = arr.reduce((res, el) => {
    if(el > res)
    {
        res = el;
    }

    return res;
});

console.log("Maximum Element From Array :",max1);

// => Method - 2 :-

let max2 = arr.reduce((res, el) => {
   if(res < el)
   {
    return el;
   }
   else
   {
    return res;
   }
});

console.log("Maximum Element From Array :",max2);


