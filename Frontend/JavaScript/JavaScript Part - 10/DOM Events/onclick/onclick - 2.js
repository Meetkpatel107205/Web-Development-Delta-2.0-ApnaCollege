
// ---: DOM Events : onclick - 2 :---

let btns = document.querySelectorAll('button');

for(btn of btns)
{
    btn.onclick = sayHello;
}

function sayHello() {
    alert("Hello!");
}
