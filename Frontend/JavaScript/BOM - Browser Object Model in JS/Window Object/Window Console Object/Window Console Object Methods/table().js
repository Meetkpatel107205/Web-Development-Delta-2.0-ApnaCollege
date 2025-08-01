
// ---: Window Console Object Method : console.table() :---

console.table(["Audi","Volvo","Ford"]);

console.table({firstname : "John",lastname : "Doe"});

const car1 = {name:"Audi",model:"A4"}
const car2 = {name:"Volvo",model:"XC90"}
const car3 = {name:"Ford",model:"Fusion"}

console.table([car1,car2,car3]);

console.table(["Red","Blue","Saffron"],["Colors"]); // <--- ["Colors"] will be ignored here.

/*

     ---> console.table() OR window.console.table() : The table method writes a table to the console.

*    ---> Syntax : console.table(tabledata,tablecolumns); ---OR---
*                  window.console.table(tabledata,tablecolumns);
                   
     ---> +==============+==================================================+
          | Parameter    | Description                                      |
          +==============+==================================================+
          | tabledata    | -> Required.                                     |
          |              | -> The data to fill the table with.              |
          +--------------+--------------------------------------------------+
          | tablecolumns | -> Optional.                                     |
          |              | -> An array with the names of the table columns. |
          +==============+==================================================+

!    ---> Notes :-

       -> (1.) First Argument : An array or object that you want to display as a table.
          (2.) Second Argument : An array of property names(optional) that determines
               which poperties/keys to display.

*/