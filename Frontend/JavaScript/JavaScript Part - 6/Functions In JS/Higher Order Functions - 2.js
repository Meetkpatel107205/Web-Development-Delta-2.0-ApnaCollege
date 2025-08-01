
// ---: Higher Order Functions - 2 :---

function oddOrEvenFactory(request)
{
    if(request == "odd")
    {
        return function(n)
        {
            console.log(!(n % 2 == 0));
        }

    }else if(request == "even")
    {
        return function(n)
        {
            console.log((n % 2 == 0));
        }
    }else
    {
        console.log("Wrong Request");
    }
}

let request = "odd"; // ---> You can either take request = "odd" OR request = "even".