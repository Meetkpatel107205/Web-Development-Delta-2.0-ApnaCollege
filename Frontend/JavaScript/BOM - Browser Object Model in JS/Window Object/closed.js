
// ---: Window Object Properties : window.closed :---

let myWindow;

function openWin()
{
    myWindow = window.open("","myWindow","width=400,height=200");
}

function closeWin()
{
    if(myWindow)
    {
        myWindow.close();
    }
}

function checkWin()
{
    if(!myWindow)
    {
        text = "It has never been opened!";
    }
    else
    {
        if(myWindow.closed)
        {
            text = "It is closed.";
        }
        else
        {
            text = "It is open.";
        }
    }
document.getElementById("demo").innerHTML = text;
}