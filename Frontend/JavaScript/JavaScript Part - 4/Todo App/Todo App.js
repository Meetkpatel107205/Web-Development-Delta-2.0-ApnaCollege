
// ---: Todo App :---

let todo = [];

let req = prompt("Please Enter Your Request");

console.log(req);

while(true)
{
    if(req == "quit")
    {
        console.log("Quiting App");
        break;
    }

    if(req == "list")
    {
        console.log("-----------------");
        for(let i=0;i<todo.length;i++)
        {
            console.log("todo[",i,"] =",todo[i]);
        }
        console.log("-----------------");
    }
    else if(req == "add")
    {
        let task = prompt("Please Enter the Task that you want to add");
        todo.push(task);

        console.log("Task Added");
    }
    else if(req == "delete")
    {
        let idx = prompt("Please Enter the Task Index that you want to Delete");
        todo.splice(idx-1,1);
        console.log("Task Deleted");
    }
    else
    {
        console.log("Wrong Request");
    }

    req = prompt("Please Enter Your Request ");
}