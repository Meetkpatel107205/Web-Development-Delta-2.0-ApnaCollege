
// ---: Destructuring in JS - 3 :---

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi","english","math","science"],
    username: "karan@123",
    password: "abcd",
    city: "Mumbai"
};

console.log(student);

// let username = student.username;
// let password = student.password;

let { username: user, password: pass,city: place = "Surat" } = student;

console.log("username :",user);
console.log("password :",pass);
console.log("city :",place);