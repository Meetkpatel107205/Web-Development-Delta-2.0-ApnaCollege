
// ---: this With Arrow Functions :---

const student = {
    name: "Meet",
    marks: "84",
    prop: this, // <--- Global Scope
    getName: function(){
        console.log(this); // <--- For function the this keyword refers to the calling object(student object).
        return this.name;
    },
    getMarks: () => {
        console.log(this); // <--- For Arrow function the this is same as this of Parent Object(student object)
                           //      that is "window object".(Lexical Scope)
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); // <--- Here Parent for Arrow function is getInfo1 function so the this for Arrow
                               //      function is same as this for getInfo1 function that is student object.
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this); // <--- Here For normal function this keyword is same as this of calling object
                               //      so the window object is call the setTimeout function evertime that means
                               //      this for callback function of setTimeout is window object. 
        },2000);
    }
};

const a = 5; // <--- Global Scope

console.log(student);
console.log("Student Name :",student.getName());

console.log("Student Marks :",student.getMarks());

student.getInfo1();
student.getInfo2();