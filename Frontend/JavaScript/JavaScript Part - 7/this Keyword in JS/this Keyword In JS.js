
// ---: this Keyword in JS :---

const student = {
    name: "Meet",
    age: 19,
    eng: 73,
    math: 84,
    phy: 69,
    getAvg()
    {
        console.log(this); // <--- It will print "student" Object.

        let avg = (this.eng + this.math + this.phy) / 3;
        console.log("Average Marks :",avg);
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

student.getAvg();

function getAvg()
{
    console.log(this); // <--- It will print "window" Object.
}

getAvg();

/*

     ---> What is this?
     Ans. In JavaScript,the this keyword refers to an object.
          -> The this keyword refers to different objects depending on how it is used:

          +========================================================================+
          | In an object method, this refers to the object.                        |
          +------------------------------------------------------------------------+
          | Alone, this refers to the global object(window object).                |
          +------------------------------------------------------------------------+
          | In a function, this refers to the global object(window object).        |
          +------------------------------------------------------------------------+
          | In a function, in strict mode, this is undefined.                      |
          +------------------------------------------------------------------------+
          | In an event, this refers to the element that received the event.       |
          +------------------------------------------------------------------------+
          | Methods like call(), apply(), and bind() can refer this to any object. |
          +========================================================================+

     ---> Notes :-

       -> "this" is not a variable. It is a keyword. You cannot change the value of "this".
       
*/
