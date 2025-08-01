
// ---: Nested Ternary Operator :---

let Pmarks = 95;

let result = (Pmarks < 40) ? "Unsatisfactory" :
             (Pmarks < 60) ? "Average" :
             (Pmarks < 80) ? "Good" : "Exellent";

console.log("Result :",result);

/*

     ---> Nested Ternary Operator : The above code assigns a grade to marks using nested
          ternary operators. It checks ranges: <40 as “Unsatisfactory”, <60 as “Average”,
          <80 as “Good”, and >=80 as “Excellent”, then prints the result.
          
*/