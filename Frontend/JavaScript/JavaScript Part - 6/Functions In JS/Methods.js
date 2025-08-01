
// ---: Methods :---

const calculator = {
    num: 55,
    add: function(a,b)
    {
        return a + b;
    },
    sub: function(a,b)
    {
        return a - b
    },
    mul: function(a,b)
    {
        return a * b;
    }
};

console.log(calculator);

console.log("Add Operation between 1 and 2 : ",calculator.add(1,2));
console.log("Sub Operation between 3 and 2 : ",calculator.sub(3,2));
console.log("Mul Operation between 1 and 2 : ",calculator.mul(1,2));


