
// ---: Get Values :---

let student = {
    name: "Meet",
    marks: 95
};

console.log("---: Printing \"const student\" Object Literal :---");
console.log(" ");

console.log("student :",student);

console.log(" ");
console.log("---: Printing \"name\" of student Object Literal :---");
console.log(" ");

console.log("student[\"name\"] :",student["name"]); // -> Or console.log(student['name']); 

console.log(" ");
console.log("---: Printing \"marks\" of student Object Literal :---");
console.log(" ");

console.log("student.marks :",student.marks); // -> Most Preferable for Accessing Object Literal Keys

// console.log(student[name]); -> Error
// console.log(student."name"); -> Error

let studentName = "name";

console.log(" ");
console.log("---: Printing \"studentName\" Variable :---");
console.log(" ");

console.log("student[studentName] :",student[studentName]);

console.log(" ");

console.log("student.studentName :",student.studentName); // ---> Result : Undefined