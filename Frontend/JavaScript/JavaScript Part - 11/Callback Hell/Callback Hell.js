
// ---: Callback Hell :---

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    
    setTimeout(() => {

        h1.style.color = color;

        if(nextColorChange)
        {
            nextColorChange();
        }

    }, delay);

}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});

// ---> Callbacks Nesting -> Callback Hell



