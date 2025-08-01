
// ---: Guessing Game :---

const max = prompt("Enter the Max Number");

console.log("Max Number Entered By User :",max);

let randomNumber = Math.floor(Math.random()*max)+1;

let guessNumber = prompt("Guess the Number");

while(true)
{
    if((guessNumber == "quit") || (guessNumber == "Quit") || (guessNumber == "QUIT"))
    {
        console.log("User Quit");
        break;
    }

    if(guessNumber == randomNumber)
    {
        console.log("You are Right! Congrats!! Random Number was",randomNumber);
        break;
    }
    else if(guessNumber < randomNumber)
    {
        guessNumber = prompt("Hint : Your Guess was too Small. Please Try Again");
    }
    else if(guessNumber > randomNumber)
    {
        guessNumber = prompt("Hint : Your Guess was too Large. Please Try Again");
    }
}