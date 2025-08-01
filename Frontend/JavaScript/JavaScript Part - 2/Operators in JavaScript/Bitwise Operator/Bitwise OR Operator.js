
// ---: Bitwise OR Operator :---

let x = 5;
let y = 3;

console.log("\nx(in Decimal) =",x);
console.log("y(in Decimal) =",y);

let x_in_binary = x.toString(2);
let y_in_binary = y.toString(2);

console.log("\nx(in Binary) =",x_in_binary); // ---> Result = 101
console.log("y(in Binary) =",y_in_binary); // ---> Result = 11

console.log("\nx | y :",x | y); // ---> Result = 7(in Decimal)

/*

     ---> Bitwise OR Operator(|) : It is a binary operator i.e. accepts two operands. Bit-wise OR(|)
          returns 1 if any of the operands is set (i.e. 1) and 0 in any other case.

TODO ---> Truth Table :-

       -> +===========+===========+================+
          |     A     |     B     | OUTPUT (A | B) |
          +===========+===========+================+
          |     0     |     0     |       0        |
          +-----------+-----------+----------------+
          |     0     |     1     |       1        |
          +-----------+-----------+----------------+
          |     1     |     0     |       1        |
          +-----------+-----------+----------------+
          |     1     |     1     |       1        |
          +===========+===========+================+

*    ---> Example :- 

       -> Number - 1(in Decimal) : 5
       -> Number - 2(in Decimal) : 3

       -> Number - 1(in Binary) : 00000000000000000000000000000101
       -> Number - 2(in Binary) : 00000000000000000000000000000011

*      -> Bitwise AND Operation :-
                                                                       +-------+
             0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 | 1 0 1 |
          |  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 | 0 1 1 |
                                                                       +-------+
        ---------------------------------------------------------------------------
             0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0   1 1 1 <--- 7 in Decimal(Result)
          
*         +------------+
*      => | Result = 7 |
*         +------------+

*/