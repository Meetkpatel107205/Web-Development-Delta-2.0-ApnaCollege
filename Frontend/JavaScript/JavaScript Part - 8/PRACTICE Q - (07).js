
// ---: PRACTICE Q - (07) :---

const student = {
    name: "Meet",
    age: 19
};

const parents = {
    fatherName: "Kalpeshbhai",
    motherName: "Kajalben"
}

function mergeObjects(obj1, obj2) {
    
    let mergeObject = { ...obj1, ...obj2};

    return mergeObject;
}

console.log("Merged Object :",mergeObjects(student, parents));
