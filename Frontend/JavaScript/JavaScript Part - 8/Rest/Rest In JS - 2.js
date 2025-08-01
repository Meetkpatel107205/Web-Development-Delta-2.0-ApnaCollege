
// ---: Rest in JS - 2 :---

function min(a, b, c, d) {
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1); <--- Error
}

function max() {
    console.log(arguments);
    console.log(arguments.length);
}

function sum(...args) {
    return args.reduce((add, el) => add + el); 
}

function min2(...args) {
    return args.reduce((res, el) => {
        if(el < res)
        {
            return el;
        }
        else
        {
            return res;
        }
    })
}

min(1, 2, 3, 4);

max(1, 2, 3, 4);

console.log("Sum of all arguments passed in \"sum\" function :",sum(1, 2, 3, 4));

console.log("Minimum value from all arguments passed in \"min2\" function :",min2(1, 3, -5, 95));

/*

     ---> arguments is a collection not an array.

*/