
// ---: Bitwise Operator : Unsigned Right Shift(Zero-fill right shift) :---

let x = -8;

console.log("x =",x);
console.log("\nx>>2 (Signed Right Shift Value stored in variable x by \"2 Bit\") :",x>>2);
console.log("x>>>2 (Unsigned Right Shift Value stored in variable x by \"2 Bit\") :",x>>>2);

/*

*    ---> Signed Right Shift(Arithmetic Right Shift) :

       -> Preserves the sign bit(leftmost bit) to maintain the sign of the number.
       -> Fills the vacant positions with the sign bit(0 for positive and 1 for negative numbers).

*    ---> Unsigned Right Shift(Zero-fill right shift) :-
 
       -> Does not preserve the sign bit.
       -> Fills the vacant positions with 0,regardless of whether the number is positive or negative.

*/