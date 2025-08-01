
// ---: Array Methods : map Method - 2 :---

let students = [{
    name: "Meet",
    marks: 94
},
{
    name: "Jash",
    marks: 60
},
{
    name: "aman",
    marks: 95
}];

let gpa = students.map((el) => {
    return (el.marks/10);
})

console.log(gpa);

