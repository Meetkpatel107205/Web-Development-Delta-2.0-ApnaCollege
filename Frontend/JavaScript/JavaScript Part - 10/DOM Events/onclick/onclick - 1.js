
// ---: DOM Events : onclick - 1 :---

let btn = document.querySelector('button');

console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked");
// };

function sayHello() {
    alert("Hello!");
}

btn.onclick = sayHello;