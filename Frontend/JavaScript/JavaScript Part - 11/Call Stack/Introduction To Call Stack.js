
// ---: Introduction to Call Stack :---

function hello() {
    console.log("inside hello fnx");
    console.log("hello");
}

// hello(); <--- Call

function demo() {
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx")
demo();
console.log("done, bye!");