
// ---: More Events : keypress :---

document.addEventListener("keypress", function(event) {
    document.getElementById("output").textContent = "You pressed:" + event.key;
});