
// ---: PRACTICE Q - (01) :---

let btn = document.createElement("button");

btn.innerText = "click me!";

let body = document.querySelector("body");

body.append(btn);

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
});