
// ---: Nested Loops With Nested Arrays :---

let heroes = [["Ironman","Spiderman","Thor"],["Superman","Wonder Woman","Flash"]];

for(let i=0;i<heroes.length;i++) // ---> Outer Loop
{
    console.log("---: heroes[",i,"] :---");
    console.log(" ");

    for(let j=0;j<heroes[i].length;j++) // ---> Inner Loop
    {
        console.log("heroes[",i,"][",j,"] = ",heroes[i][j]);
    }

    console.log(" ");
    console.log(" ");
}