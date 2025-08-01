
// ---: TODO App :---

// ---> Selecting HTML objects using DOM methods :-

let task = document.querySelector("input");

let createTaskBtn = document.querySelector("button");

let ul = document.querySelector("ul");

// ---> Creating user generated new task :-

createTaskBtn.addEventListener("click", function () {

    let newTask = document.createElement("li");
    let delBtn = document.createElement("button");

    delBtn.classList.add("delete");
    delBtn.innerText = "delete";

    newTask.innerText = task.value;
    ul.appendChild(newTask);
    newTask.appendChild(delBtn);

    task.value = "";

});

// ---> Deletion of task when user click on adjacent delete button of particular task :-
//      (using Event Delegation(Bubbling))

ul.addEventListener("click", function (event) {
    
    if(event.target.nodeName = "BUTTON")
    {
        let listItem = event.target.parentElement;

        listItem.remove();
    }
});

// let delBtns = document.querySelectorAll(".delete");

// for(dBtn of delBtns)
// {
//     dBtn.addEventListener("click", function () {
//         let parent = dBtn.parentElement;
//         parent.remove();
//     });
// }