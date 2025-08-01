
// ---: Switch Statement :---

let color = "Red";

switch(color)
{
    case "Red":
    {
        console.log("Stop");
        break;
    }
    case "Yellow":
    {
        console.log("Slow Down");
        break;
    }
    case "Green":
    {
        console.log("GO");
        break;
    }
    default:
    {
        console.log("Broken Light");
        break;
    }
}

/* 

   ---> Switch Statement used when we have some fixed values that we need to compare to.

!  ---> It is necessary to write "break Statement in every case of switch statement if we don't
!       want to execute next case automaticaly.

   ---> Rules for Name of case in Switch Statement :---

?  1. Case Values Must Be Constant and Comparable

      -> The value of each 'case' must be a constant, meaning it can't be a variable or an expression 
         that needs to be evaluated at runtime.
      -> Case values are compared using strict equality ('==='), meaning both the value and type must 
         match the expression.

*  EX. -> switch (expression) 
*         {
*            case value1:
*                 // Code to execute if expression === value1
*                 break;
*            case value2:
*                 // Code to execute if expression === value2
*                 break;
*             // other cases...
*             default:
*                 // Code to execute if none of the cases match
*         }

?  2. Case Values Should Be Unique
     
      -> Each case value should be unique within the switch statement. If multiple cases have the same value, 
         only the first matching case will execute.    

*  EX. -> switch (day) 
*         {
*         case 'Monday':
*              console.log('Start of the week!');
*         break;
*         case 'Tuesday':
*              console.log('Second day of the week!');
*         break;
*         // Other cases...
*         }

*/