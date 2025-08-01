
// ---: Window Console Object Method : console.groupCollapsed() :---

console.log("Hello World!");
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");
console.log("My Name is Meet K. Patel");
console.groupEnd();
console.log("and we are back.");

/*

      ---> console.groupCollapsed() OR window.console.groupCollapsed() : The groupCollapsed() method starts a collapsed message group.
           In the console,click the expand button to open the new message group.All new messages will now be written inside this group.
 
*     ---> Syntax : console.groupCollapsed(Label); ---OR---
*                   window.console.groupCollapsed(Label);
 
      ---> +============+==========================+
           | Parameter  | Description              |
           +============+==========================+
           | label      | -> Optional.             |
           |            | -> A label for the group |
           +============+==========================+

*/