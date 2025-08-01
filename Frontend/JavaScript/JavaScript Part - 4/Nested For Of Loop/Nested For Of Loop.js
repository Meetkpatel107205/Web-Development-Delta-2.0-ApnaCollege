
// ---: Nested For Of Loop :---

let heroes = [["Superman","Batman","Wonder Woman"],["Spiderman","Ironman","Thor"]];

for(list of heroes)
{
    for(hero of list)
    {
        console.log(hero)
    }
}

/* ---> Nested For of Loop :- "for of" Loop inside another "for of" Loop.

*    -> Syntax :-
                  +-------------------------------------+
                  | for (let element1 of iterable1)     |
                  | {                                   |
                  |    // Outer loop logic              |
                  |                                     |
                  |     for (let element2 of iterable2) |
                  |     {                               |
                  |          // Inner loop logic        |
                  |     }                               |
                  | }                                   |
                  +-------------------------------------+
    
*/