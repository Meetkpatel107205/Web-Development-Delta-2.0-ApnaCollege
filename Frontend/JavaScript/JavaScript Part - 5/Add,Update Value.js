
// ---: Add,Update Value :---

const student = {
    name: "Meet",
    age: 19,
    marks: 95,
    city: "Delhi"
};

console.log(" ");
console.log("---: Printing \"const student\" Object Literal Without Updating Any Value :---");
console.log(" ");

console.log("student :",student);

student.city = "Surat";

console.log(" ");
console.log("---: Printing \"const student\" Object Literal After Updating \"city\" Value :---");
console.log(" ");

console.log("student :",student);

student.gender = "Male";

console.log(" ");
console.log("---: Printing \"const student\" Object Literal After Adding \"gender\" Value :---");
console.log(" ");

console.log("student :",student);

student.marks = "A"; // ---> Adding String value in place of numerical value

console.log(" ");
console.log("---: Printing \"const student\" Object Literal After Updating \"marks\" Value :---");
console.log(" ");

console.log("student :",student);

student.marks = [99,89,74]; // ---> Adding Array in place of String Values

console.log(" ");
console.log("---: Printing \"const student\" Object Literal After Updating \"marks\" Value :---");
console.log(" ");

console.log("student :",student);

delete student.marks;
delete student.city;

console.log(" ");
console.log("---: Printing \"const student\" Object Literal After Deleting \"marks And city\" Values  :---");
console.log(" ");

console.log("student :",student);