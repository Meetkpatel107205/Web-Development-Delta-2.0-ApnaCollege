
// ---: PRACTICE Q - (09) :---

let str = "abcdabcdefgggh";

function getUnique(str)
{
    let ans = "";

    for(let i = 0; i < str.length; i++)
    {
        let currChar = str[i];

        if(ans.indexOf(currChar) == -1)
        {
            ans += currChar;
        }
        // ---> If current character is not added, then add it in ans.
        // ---> Otherwise it is a duplicate.
    }

    return ans;
}

console.log("Unique Characters of String \"abcdabcdefgggh\" :",getUnique(str));