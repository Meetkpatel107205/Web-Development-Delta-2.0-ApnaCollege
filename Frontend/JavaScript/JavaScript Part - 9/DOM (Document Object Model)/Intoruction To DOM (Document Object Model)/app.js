
// ---: DOM(Document Object Model) : app.js :---

// ---> Selecting Elements :-

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++)
// {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`Value of image no. ${i} is changed.`);
// }


// ---> Selecting Elements Using Query Selectors :-

console.dir(document.querySelector("h1")); // <--- Gives us first h1 Element.

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("p")); // <--- Gives us first paragraph Element.

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

console.dir(document.querySelectorAll("p")); // <--- Gives us all paragraph Elements.

// ---> Using Properties and Method :-

let para = document.querySelector('p');

console.dir(para);

para.innerText = "Hi, I am Peter Parker";

para.innerHTML = "Hi, I am <b>Peter Parker<b>";

// ---> Manipulating Attributes :-

/*

let img = document.querySelector('img');

console.dir(img);

img.getAttribute('id');
img.getAttribute('class');

img.setAttribute('id','spiderManImg');
img.setAttribute('class','images');
img.setAttribute('src','assets/creation_3.jpeg');

console.log(img);

*/

// ---> Manipulating Style :-

// ---> Style Property

let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++)
// {
//     links[i].style.color = "green";
// }

for(link of links)
{
    link.style.color = "purple";
}

let box = document.querySelector('.box');

console.log("box.style.backgroundColor value :",box.style.backgroundColor);
// ---> Noting will be print because style tag gives you inline style not actual css style.

// ---> Using ClassList

let heading = document.querySelector('h1');

console.log(heading.classList);

heading.classList.add("green");
heading.classList.add("underline");

console.log(heading.classList);

heading.classList.remove("underline");

console.log("Does heading element contains \"green\" class :",heading.classList.contains("green"));
console.log("Does heading element contains \"underline\" class :",heading.classList.contains("underline"));

console.log("\nPrinting classList of \"heading\" element before perfoming any operation :- ");

console.log(heading.classList);

heading.classList.toggle("green");

console.log("\nPrinting classList of \"heading\" element after perfoming \"heading.classList.toggle(\"green\");\" operation :- ");

console.log(heading.classList);

heading.classList.toggle("underline");

console.log("\nPrinting classList of \"heading\" element after perfoming \"heading.classList.toggle(\"underline\");\" operation :- ");

console.log(heading.classList);

let box1 = document.querySelector('.box');

console.log("\n",box1.classList);

box.classList.add("yellowBg");

// ---> Navigation :-

let h4 = document.querySelector('h4');

console.log("\nParent Element of \"h4\" Element :",h4.parentElement);
console.log("\nChildren Element of \"h4\" Element :",h4.children);

let box2 = document.querySelector('.box');

console.log("\nChildren Element of \"div(class=\"box\")\" Element :",box2.children);

let ul = document.querySelector('ul');

console.log("\nParent Element of \"ul\" Element :",ul.parentElement);
console.log("\nChildren Element of \"ul\" Element :",ul.children);
console.log("\nNumber of Child Elements contain by \"ul\" Element is :",ul.childElementCount);

console.log("\nFirst Children Element of \"ul\" Element is :",ul.children[0]);

console.log("\nSecond Children Element of \"ul\" Element or we can say \"ul.children[1]\" is :",ul.children[1]);

console.log("\nPrevious Sibling Element of \"ul.children[1]\" Element :",ul.children[1].previousElementSibling);
console.log("\nNext Sibling Element of \"ul.children[1]\" Element :",ul.children[1].nextElementSibling);

let img = document.querySelector('img');

console.log("\nPrevious Sibling Element of \"img\" Element :",img.previousElementSibling);

img.previousElementSibling.style.color = "green";

// ---> Adding Elements :-

let newP = document.createElement('p');

newP.innerText = "Hi, I am a new p";

// let body = document.querySelector('body'); ---> There is some issue.

// body.appendChild(newP);

let box3 = document.querySelector('.box');

box2.appendChild(newP);

let btn = document.createElement('button');

btn.innerText = "click me!";

box2.appendChild(btn);

newP.append("this is new text");

// newP.append(btn);

box.prepend(newP);

let btn2 = document.createElement('button');

btn2.innerText = "NEW BUTTON!!!";

let p = document.querySelector('p');

p.insertAdjacentElement('beforebegin', btn2);

p.insertAdjacentElement('afterbegin', btn2);

p.insertAdjacentElement('beforeend', btn2);

p.insertAdjacentElement('afterend', btn2);

// ---> Removing Elements :-

let body2 = document.querySelector('body');

body2.removeChild(btn2);

p.remove();

// body2.remove(); <--- Remove Whole Body.