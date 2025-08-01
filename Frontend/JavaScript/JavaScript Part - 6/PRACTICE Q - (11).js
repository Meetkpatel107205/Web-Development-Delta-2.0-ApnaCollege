
// ---: PRACTICE Q - (11) :---

let str = "Meet";

function countVowels(str)
{
    let countVowel = 0;

    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            countVowel++;
        }
    }

    return countVowel;
}

/*

---> Method - 2 :-

function countVowels(str)
{
    let countVowel = 0;

    for(let i = 0; i < str.length; i++)
    {
        if(str.charAt(i) == "a" || 
           str.charAt(i) == "e" || 
           str.charAt(i) == "i" || 
           str.charAt(i) == "o" || 
           str.charAt(i) == "u"
        )
        {
            countVowel++;
        }
    }

    return countVowel;
}

*/

console.log("Argument String Value :",str);
console.log("Number of Vowels in Given Argument String :",countVowels(str));
