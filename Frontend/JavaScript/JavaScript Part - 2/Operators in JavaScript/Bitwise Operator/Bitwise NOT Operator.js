// ---: Bitwise OR Operator :---

let x = 5;
let y = 3;

console.log("\nx(in Decimal) =",x);

let x_in_binary = x.toString(2);

console.log("\nx(in Binary) =",x_in_binary); // ---> Result = 101

console.log("\n~x:",~x); // ---> Result = 7(in Decimal)

/*

     ---> Bitwise NOT Operator(~) : It is a unary operator i.e. accepts single operands.Bit-wise NOT(~)
          flips the bits i.e 0 becomes 1 and 1 becomes 0.

TODO ---> Truth Table :-

       -> +===========+=============+
          |     A     | OUTPUT (~A) |
          +===========+=============+
          |     0     |      1      |
          +-----------+-------------+
          |     1     |      0      |
          +===========+=============+

*    ---> Example :- 

       -> Number - 1(in Decimal) : 5

       -> Number - 1(in Binary) : 00000000000000000000000000000101

*      -> Bitwise AND Operation :-
                                                                       +-------+
             0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 | 1 0 1 |
             | | | | | | | | | | | | | | | | | | | | | | | | | | | | | +-| | |-+  
             V V V V V V V V V V V V V V V V V V V V V V V V V V V V V   V V V
        ---------------------------------------------------------------------------
         ~   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1   0 1 0 <--- -6 in Decimal(Result)
          
*         +-------------+
*      => | Result = -6 |
*         +-------------+

*/