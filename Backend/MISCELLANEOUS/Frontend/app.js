
let arr = [1, 2, 3];

let arr2 = [1, 2, 3];

arr.sayHello = () => {
    console.log("Hello!, i am arr");
};

arr2.sayHello = () => {
    console.log("Hello!, i am arr");
};

// function PersonMaker(name, age) { <--- This is called a "Factory Function".
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };

//     return person;
// }

// ---> New Operator :-
// ---> Constructors - doesn't return anything & start with capital letter by convention.
// function Person(name, age) { 
//     this.name = name;
//     this.age = age;

//     console.log(this); <--- window object
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };

// let p1 = new Person("adam", 25); <--- "new Operator" changed the value of "this".
// let p2 = new Person("eve", 25);

// ---> Class :-

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

// ---> Inheritance :-

class Person {
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name, age); // <--- Parent Class Contructor is being called.
        this.marks = marks;
    }
}

let stu1 = new Student("adam", 25, 95);

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);  // <--- Parent Class Contructor is being called.
        this.subject = subject;
    }
}

// ---> Example :-

class Mamal { // <--- base class / parent
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mamal { // <--- child
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("wooff..");
    }

    eat() { // <--- overrides the method "eat" of parent class 
        console.log("dog is eating");
    }
}

class Cat extends Mamal { // <--- child
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow..");
    }
}
    