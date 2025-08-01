
// ---: PRACTICE Q - (01) :---

let p = document.createElement('p');

p.innerText = "Hey I'm red!";

p.classList.add('red');

/*

---> Method - 1 :-

let body = document.querySelector('body');

body.append(p);

*/

/*

---> Method - 2 :-

*/

document.querySelector('body').append(p);

// ---------------------------------------------

let h3 = document.createElement('h3');

h3.classList.add('blue');

h3.innerText = "I'm a blue h3!";

document.querySelector('body').append(h3);

// ---------------------------------------------

let h1 = document.createElement('h1');

h1.innerText = "I'm in a div";

let p2 = document.createElement('p');

p2.innerText = "ME TOO!";

let div = document.createElement('div');

h3.insertAdjacentElement('afterend',div);

div.classList.add('blackBorder','pinkBg');

div.appendChild(h1);
div.appendChild(p2);