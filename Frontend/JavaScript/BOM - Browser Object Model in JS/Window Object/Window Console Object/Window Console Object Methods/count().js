
// ---: Window Console Object Methods : console.count() :---

for(let i=0;i<5;i++)
{
    console.count();
}

console.log(" ");

for(let i=0;i<5;i++)
{
    console.count("myLabel");
}

/*

     ---> console.count() OR window.console.count() : The count() method counts the number of times console.count()
          is called.The count() method this number to the console.

     ---> Syntax : console.count(); ---OR---
                   window.console.count();

     ---> +============+================================+
          | Parameter  | Description                    |
          +============+================================+
          | label      | -> Optional.                   |
          |            | -> Default label is "default". |
          +============+================================+


?    ---> Notes :-

       -> You can add a label that will be included in the console view.
!      -> As a default value the label "default" is used.

*/