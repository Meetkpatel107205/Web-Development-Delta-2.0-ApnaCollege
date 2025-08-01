
// ---: Hoisting Concept : Declaring Variable Using const Keyword :---

console.log(a); // ---> Result : Uncaught ReferenceError: Cannot access 'a' before initialization
                //               at Declaring Using const Keyword.js:4:13
const a = 5;
console.log(a);

/*    

      ---> Variables declared with const are hoisted, but they are not initialized.
      ---> Instead, they remain in the Temporal Dead Zone (TDZ) until the code execution reaches their 
           declaration.

*/