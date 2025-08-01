
// ---: More Events : scroll :---

document.addEventListener("scroll", function () {

    let header = document.getElementById("header");

    if(window.scrollY > 50)
    {
        header.style.backgroundColor = "lightcoral";
    }
    else
    {
        header.style.backgroundColor = "lightblue";
    }
});