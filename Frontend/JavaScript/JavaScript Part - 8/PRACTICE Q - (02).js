
// ---: PRACTICE Q - (02) :---

let arr = [10, 20, 60, 100, 3, 2];

function getMin(nums)
{
    let min = nums.reduce((res, el) => {
        if(el < res)
        {
            res = el;
        }
    
        return res;
    });

    return min;
}

// ---> Method - 1 :-

let min = arr.reduce((res, el) => {
    if(el < res)
    {
        res = el;
    }

    return res;
});

console.log("Minimum Element From Array :",min);
console.log("Minimum Element From Array :",getMin(arr));

// ---> Method - 2 :-

let min2 = arr.reduce((res, el) => {
    if(res > el)
    {
        return el;
    }
    else
    {
        return res;
    }
});

console.log("Minimum Element From Array :",min2);

