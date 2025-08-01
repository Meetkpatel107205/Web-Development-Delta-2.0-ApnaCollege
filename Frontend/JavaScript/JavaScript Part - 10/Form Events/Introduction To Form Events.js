
// ---: Introduction to Form Events :---

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // <--- Prevent default action of form.
    alert("form submitted");
});