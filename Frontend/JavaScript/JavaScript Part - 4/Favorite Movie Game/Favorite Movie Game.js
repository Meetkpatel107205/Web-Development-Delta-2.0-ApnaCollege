
// ---: Favorite Movie Task :---

const favMovie = "Avatar";

let guess = prompt("Guess Favorite Movie :-");

while(guess != favMovie)
{
    if(guess == "quit" || guess == "Quit" || guess == "QUIT")
    {
        console.log("You Quit")
        break; // ---> Using "Break Keyword".
    }
    guess = prompt("Wrong Guess! Please try Again.");
}

if(guess == favMovie)
{
    console.log("Congrats!!");
}
