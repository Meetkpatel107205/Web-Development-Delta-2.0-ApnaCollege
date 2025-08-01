
// ---: Keyboard Events :---

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {

    console.log("code =",event.code);

    if(event.code == "ArrowUp" || event.code == "KeyU")
    {
        console.log("character moves forward");
    }
    else if(event.code == "ArrowDown" || event.code == "KeyD")
    {
        console.log("character moves backward");
    }
    else if(event.code == "ArrowLeft" || event.code == "KeyL")
    {
        console.log("character moves Left");
    }
    else if(event.code == "ArrowRight" || event.code == "KeyR")
    {
        console.log("character moves Right");
    }
});