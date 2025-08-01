
// ---: More Events : mouseout :---

const box = document.getElementById("box");

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Hover Over Me";
});

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightcoral";
    box.textContent = "Mouse Over Me!";
});