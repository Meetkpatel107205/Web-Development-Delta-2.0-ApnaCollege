
// ---: Extracting Form Data - 2 :---

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.dir(form);

    // let user = document.querySelector("#user");

    // let pass = document.querySelector("#pass");

    // console.log("Username =",user.value);
    // console.log("Password =",pass.value);

    let user = this.elements[0]; // ---> OR form.elements[0]

    let pass = this.elements[1]; // ---> OR form.elements[1]

    console.log("Username =",user.value);
    console.log("Password =",pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

});