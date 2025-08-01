// ---: Unary Operators :---

let a = 10;

console.log("\na =",a)

console.log(" ");
console.log("---------------------------------------");
console.log(" ");

console.log("Value of a before performing a++ = ",a);
console.log("a++ = ",a++);
console.log("Value of a after performing a++ = ",a);

console.log(" ");

console.log("Value of a before performing ++a = ",a);
console.log("++a = ",++a);
console.log("Value of a after performing ++a = ",a);

console.log(" ");
console.log("---------------------------------------");
console.log(" ");

console.log("Value of a before performing a-- = ",a);
console.log("a-- = ",a--);
console.log("Value of a after performing a-- = ",a);

console.log(" ");

console.log("Value of a before performing --a = ",a);
console.log("--a = ",--a);
console.log("Value of a after performing --a = ",a);

console.log(" ");
console.log("---------------------------------------");
console.log(" ");

/* 

TODO ---> Unary Operators :-
 
       -> +==========+=================================+===================+===========+
          | Operator | Descriptioin                    | Example           | Output    |
          +==========+=================================+===================+===========+
          |     +    | Unary plus (converts to number) | +'5'              | 5         |
          +----------+---------------------------------+-------------------+-----------+
          |     -    | Unary minus (negates a value)   | -5                | -5        |
          +----------+---------------------------------+-------------------+-----------+
          |          |                                 | let x = 5;        |           |
          |    ++    | Incremnt (adds 1)               | x++;              | 6         |
          |          |                                 | console.log(x);   |           |
          +----------+---------------------------------+-------------------+-----------+
          |          |                                 | let x = 5;        |           |
          |    --    | Decrement (subtracts 1)         | x--;              | 4         |
          |          |                                 | console.log(x);   |           |
          +----------+---------------------------------+-------------------+-----------+
          |   void   | Evaluates an expression and     | void(0)           | undefined |
          |          | returns undefined.              |                   |           |
          +----------+---------------------------------+-------------------+-----------+
          |          |                                 | let obj = {a:1};  |           |
          |  delete  | Delete an object property       | delete obj.a;     | {}        |
          |          |                                 | console.log(obj); |           |
          +==========+======================+=========+==========+=====================+

*/