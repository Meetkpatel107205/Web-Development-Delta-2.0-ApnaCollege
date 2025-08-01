
// ---: await Keyword - 1 :---

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum(); // <--- stop execution of other calls till await related call
                    //      not resolved.
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

console.log("demo() :",demo());

/*

     ---> "await" keyword only used in "async function".

*/