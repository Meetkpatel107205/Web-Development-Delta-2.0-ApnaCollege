
// ---: Array Methods : forEach Method - 2 :---

let arr = [{
    name: "Meet",
    marks: 84
},
{
    name: "Jash",
    marks: 60
},
{
    name: "aman",
    marks: 95
}];

console.log(arr);

arr.forEach((obj) => {
    console.log("Marks of",obj.name,"is",obj.marks);
});