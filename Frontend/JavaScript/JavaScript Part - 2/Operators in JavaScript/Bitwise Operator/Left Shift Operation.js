
// ---: Bitwise Operation : Left Shift Operation :---

let a = 4;

console.log("a =",a);
console.log("\na<<1 (Left Shift Value stored in variable a by \"1 Bit\") :",a<<1);
console.log("a<<4 (Left Shift Value stored in variable a by \"4 Bit\") :",a<<4);

/*

    ---> Left Shift(<<) Bitwise Operator : JavaScript Left Shift Operator is used to operate on the two operands.
         
!     -> The first operand is the number and the right operand specifies the number of bits to shift to the left.

      -> +--------+
         | a << 1 |
         | ^    ^ |
         +-|----|-+
           |    |
           |    +------------ The number of bits to shift to the left
           |
           +----------------- Number

*     -> The Operation is represented by the "<<" symbol.Mainly the left shift operator is used to multiply the 
*        number by any power of 2.

?     => Notes :-

!     -> Preserves the sign bit (leftmost bit) to maintain the sign of the number.
!     -> Fills the vacant positions with the sign bit (0 for positive and 1 for negative numbers).

      => Example :-

      -> +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
         | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
         +-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+
           |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
       +---+   |   |
           +---+   |
           |   +---+
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |   
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |  
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
           |   |
      -> +-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+
         | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V | V |
         | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
         +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

           
*/