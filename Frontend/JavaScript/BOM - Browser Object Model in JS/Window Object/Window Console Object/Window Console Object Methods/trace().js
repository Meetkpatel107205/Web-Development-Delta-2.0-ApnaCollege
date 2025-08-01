
// ---: Window Console Object Method : console.trace() :---

function myFunction()
{
    myOtherFunction();
}

function myOtherFunction()
{
    console.trace("Trace : ");
}

myFunction();

/*

    ---> console.trace() OR window.console.trace() : The trace() method displays a trace that show how the
         console code ended up at a certain point.

    ---> Syntax : console.trace(label); ---OR---
                  window.console.trace(label);

    --->  +============+======================================+
          | Parameter  | Description                          |
          +============+======================================+
          | label      | -> Optional.                         |
          |            | -> A label to give the trace a name. |
          +============+======================================+         

*/