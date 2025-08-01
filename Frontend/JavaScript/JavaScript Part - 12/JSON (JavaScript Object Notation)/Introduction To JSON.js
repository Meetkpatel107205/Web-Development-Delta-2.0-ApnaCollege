
// ---: Introduction to JSON(JavaScript Object Notation) :---

let jsonRes = '{"fact":"Baking chocolate is the most dangerous chocolate to your cat.","length":61}';

console.log("jsonRes :",jsonRes);

let validRes = JSON.parse(jsonRes);

console.log("validRes :",validRes);

let student = {
    name: "meet",
    marks: 95,
};

let jsonData = JSON.stringify(student);

console.log("jsonData :",jsonData);