
// ---: PRACTICE Q - (06) :---

let arr = [1, 2, 3, 4, 5];

function doubleAndReturnArgs(array, ...args) {
    
    let doubleArgs = args.map((el) => (el*2));

    let resultantArray = [...array, ...doubleArgs];
    return resultantArray;
}

console.log(doubleAndReturnArgs(arr,1, 2, 3, 4, 5));
