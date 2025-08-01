
// ---: Extracting Form Data - 1 :---

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let inp = document.querySelector("input");

    console.dir(inp);

    console.log(inp.innerText); // <--- For "input" tag user entered values are not stored in "innerText".

    console.log(inp.value);

});