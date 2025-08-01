
// ---: Ternary Operator (Conditional Operator) :---

let Pmarks = 95;

let result = (Pmarks > 33) ? "Pass" : "Fail";

console.log("Result :",result);

/* 

     ---> Ternary (Conditional) Operator : The Ternary Operator in JavaScript is a shortcut for
         writing simple if-else statements. It’s also known as the Conditional Operator because
         it works based on a condition. The ternary operator allows you to quickly decide between
         two values depending on whether a condition is true or false.

?    ---> How Does the Ternary Operator Work?
     Ans. The ternary operator works with three parts:

*         -> Condition: A statement that returns true or false.
*         -> Value if True: What happens if the condition is true?
*         -> Value if False: What happens if the condition is false?
          
*                    +----------------------------------------------+
*         -> Syntax: | condition ? trueExpression : falseExpression |
*                    +----------------------------------------------+

TODO ---> Characteristics of Ternary Operator :-

       -> The expression consists of three operands: the condition, value if true, and value
          if false.
       -> The evaluation of the condition should result in either a true/false or a boolean value.
!      -> The true value lies between “?” & “:” and is executed if the condition returns true.
!         Similarly, the false value lies after “:” and is executed if the condition returns false.

*/