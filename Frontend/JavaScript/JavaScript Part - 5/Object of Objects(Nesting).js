
// ---: Object of Objects(Nesting) :---

const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    meet: {
        grade: "O",
        city: "Surat"
    },
};

console.log("---: Printing \"const classInfo\" Object Literal :---");
console.log(" ");

console.log("classInfo :",classInfo);

console.log(" ");
console.log("---: Printing \"aman\" of classInfo Object Literal :---");
console.log(" ");

console.log("classInfo.aman :",classInfo.aman);

console.log(" ");
console.log("---: Printing \"meet\" of classInfo Object Literal :---");
console.log(" ");

console.log("classInfo.meet :",classInfo.meet);

console.log(" ");
console.log("---: Printing \"city of Object Literal \'shradha\' \" of classInfo Object Literal :---");
console.log(" ");

console.log("classInfo.shradha.city :",classInfo.shradha.city);

classInfo.shradha.city = "Gurgaon";

console.log(" ");
console.log("---: Printing \"city of Object Literal \'shradha\' \" of classInfo Object Literal After Updating its Value :---");
console.log(" ");

console.log("classInfo.shradha.city :",classInfo.shradha.city);
