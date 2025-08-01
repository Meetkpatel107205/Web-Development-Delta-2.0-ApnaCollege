
// ---: PRACTICE Q - (02) :---

let inp = document.querySelector("input");

let h2 = document.querySelector("h2");

inp.addEventListener("input", function (event) {
    const cleanedValue = event.target.value.replace(/[^a-zA-Z ]/g, ''); // <---
    h2.innerText = cleanedValue;
});
