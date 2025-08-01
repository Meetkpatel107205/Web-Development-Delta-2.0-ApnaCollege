
// ---: addEventListener :---

/*

let btns = document.querySelectorAll('button');

for(btn of btns)
{
   +-------------------------+
   | btn.onclick = sayHello; | <------ we can only able to assign one function,only "sayHello" is assigned.
   | btn.onclick = sayName;  |
   +-------------------------+
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Apna College");
}

*/

let btns = document.querySelectorAll('button');

for(btn of btns)
{
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function () {
        console.log("you double clicked me");
    });
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Apna College");
}