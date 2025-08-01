
// ---: More Events : load - 2 :---

const img = document.querySelector("#myImage");

img.addEventListener("load", function() {
    document.querySelector("#status").textContent = "Image has loaded successfully!";
});