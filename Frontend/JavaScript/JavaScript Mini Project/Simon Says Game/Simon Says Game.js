
// ---: Simon Says Game :---

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "blue"];

let started = false;

let level = 0;

let highestScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {

    if(started == false)
    {
        console.log("game is started");
        started = true;

        levelUp();
    }

});

function gameFlash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn) {

    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}


function levelUp() {

    userSeq = [];

    level++;

    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);

    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    
    console.log(gameSeq);

    // ---> Random button choose
    gameFlash(randombtn);

}

function btnPress() {

    let btn = this;

    userFlash(btn);

    userColor = btn.getAttribute("id");

    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp, 1000);
        }
    }
    else
    {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to start.`;

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        if(level > highestScore)
        {
            highestScore = level;

            let hs = document.querySelector("#highest-score");
            
            hs.innerHTML = `New Highest Score is <b>${highestScore}</b>`;
        }

        reset();
    }

}

let allBtns = document.querySelectorAll(".btn");

for(btnI of allBtns) {
    btnI.addEventListener("click", btnPress);
}

function reset() {

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}

