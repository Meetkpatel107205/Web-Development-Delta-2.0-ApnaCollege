
// ---: Array Of Objects :---

const classInfo = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "shradha",
        grade: "A",
        city: "Pune"
    },
    {
        name: "meet",
        grade: "O",
        city: "Surat"
    }
];

console.log("---: Printing \"const classInfo\" Array of Object Literals :---");
console.log(" ");

console.log("classInfo :",classInfo);

console.log(" ");
console.log("---: Printing \"First Object\" in Array of Object Literals :---");
console.log(" ");

console.log("classInfo[0] :",classInfo[0]);

console.log(" ");
console.log("---: Printing \" \'name\' of second object\" in Array of Object Literals :---");
console.log(" ");

console.log("classInfo[1].name :",classInfo[1].name);

classInfo[1].city = "Gurgaon";

console.log(" ");
console.log("---: Printing \" \'city\' of second object\" in Array of Object Literals After Updating its Value :---");
console.log(" ");

console.log("classInfo[1].city :",classInfo[1].city);

classInfo[1].gender = "Female";

console.log(" ");
console.log("---: Printing \"second object\" in Array of Object Literals After Adding new key \"Gender\" in it :---");
console.log(" ");

console.log("classInfo[1] :",classInfo[1]);