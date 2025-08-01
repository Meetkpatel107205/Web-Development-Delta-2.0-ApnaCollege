
// ---: Scope Of Functions :---

let sum = 54; // -> Global Scope

function calSum(a,b)
{
    let sum = a + b; // -> Function Scope

    console.log("Sum inside \"calSum\" Funtion :",sum);
/* 
!  ---> If we try to print "sum" variable and "sum" variable is not defined in the function block 
!       then the Global "sum" Variable is printed.    
*/
}

console.log("---: Trying to Print \"sum\" Variable of Funtion \"calSum\" Out of its Scope Before Calling \"calSum\" Function :---");

console.log(" ");

// console.log(sum); -> Error(If Global "sum" variable is not defined)

console.log("---: Trying to Print \"sum\" Variable of Funtion \"calSum\" Out of its Scope After Calling \"calSum\" Function :---");

console.log(" ");

calSum(1,2);

// console.log(sum); -> Error(If Global "sum" variable is not defined)

console.log(" ");

console.log("Global Scope \"sum\" Variable :",sum);