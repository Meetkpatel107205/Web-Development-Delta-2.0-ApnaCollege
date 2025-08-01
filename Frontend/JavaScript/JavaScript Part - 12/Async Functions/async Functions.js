
// ---: async And await Keywords :---

async function greet() {

    // abc.abc(); <--- throws an error so that Promise will be rejected.

    // throw "some random error"; <--- throws an error so that Promise will be rejected.

    // throw "404 page not found";
    
    return "hello!"; // <--- Normally Promise will be fulfilled + return.

}

console.log(greet());

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was :",result);
})
.catch((err) => {
    console.log("promise was rejected with err :",err);
});

let demo = async () => {
    return 5;
}

console.log(demo());