
// ---: Bitwise AND Operator :---

let x = 5;
let y = 3;

console.log("\nx(in Decimal) =",x);
console.log("y(in Decimal) =",y);

let x_in_binary = x.toString(2);
let y_in_binary = y.toString(2);

console.log("\nx(in Binary) =",x_in_binary); // ---> Result = 101
console.log("y(in Binary) =",y_in_binary); // ---> Result = 11

console.log("\nx & y :",x & y); // ---> Result = 1(in Decimal)

/*

     ---> Bitwise AND Operator(&) : It is a binary operator i.e. accepts two operands.Bit-wise AND(&) returns 1
          if both the bits are set (i.e 1) and 0 in any other case.

TODO ---> Truth Table :-

       -> +===========+===========+================+
          |     A     |     B     | OUTPUT (A & B) |
          +===========+===========+================+
          |     0     |     0     |       0        |
          +-----------+-----------+----------------+
          |     0     |     1     |       0        |
          +-----------+-----------+----------------+
          |     1     |     0     |       0        |
          +-----------+-----------+----------------+
          |     1     |     1     |       1        |
          +===========+===========+================+

!    ---> Notes :-
  
       -> By Default Javascript takes 32 Bits in Binary form of any Decimal Number.
          For Ex. Decimal : 5 ===> Binary : 00000000000000000000000000000101 (32 Bits)
     
       -> Bit operators work on 32 bits numbers.
       -> Any numeric operand in the operation is converted into a 32 bit number. The result is 
          converted back to a JavaScript number.

*    ---> Example :- 

       -> Number - 1(in Decimal) : 5
       -> Number - 2(in Decimal) : 3

       -> Number - 1(in Binary) : 00000000000000000000000000000101
       -> Number - 2(in Binary) : 00000000000000000000000000000011

*      -> Bitwise AND Operation :-
                                                                       +-------+
             0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 | 1 0 1 |
          &  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 | 0 1 1 |
                                                                       +-------+
        ---------------------------------------------------------------------------
             0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0   0 0 1 <--- 1 in Decimal(Result)
          
*         +------------+
*      => | Result = 1 |
*         +------------+

*/