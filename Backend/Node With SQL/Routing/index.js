
const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: process.env.DB_PASSWORD
});

function getRandomUser() {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

// ---> Home Route :-
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;

    try
    {
        connection.query(q, function(err, results) {
            if(err)
            {
                throw err;
            }

            let key = Object.keys(results[0])[0];
            let value = Object.values(results[0])[0];

            // let count = (results[0]["count(*)"]);

            res.render("home.ejs", { value });
        });
    }
    catch(err)
    {
        console.log(err);
        res.send("some error in DB");
    }
});

// ---> Showusers Route :-

app.get("/user", (req, res) => {
    
    let q = `SELECT * FROM user`;

    try
    {
        connection.query(q, function(err, users) {
            if(err)
            {
                throw err;
            }
            
            res.render("showusers.ejs", { users });
        });
    }
    catch(err)
    {
        console.log(err);
        res.send("some error in DB");
    }
});

// ---> Edit Route :-

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try
    {
        connection.query(q, function(err, results) {
            if(err)
            {
                throw err;
            }

            let user = results[0];

            res.render("edit.ejs", { user });
        });
    }
    catch(err)
    {
        console.log(err);
        console.log("some error in DB");
    }
});

// ---> Update(DB) Route :-

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try
    {
        connection.query(q, function(err, results) {
            if(err)
            {
                throw err;
            }

            let user = results[0];

            if(formPass != user.password)
            {
                res.send("Wrong Passoword");
            }
            else
            {
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;

                try
                {
                    connection.query(q2, function(err, results) {
                        if(err)
                        {
                            throw err;
                        }
                        res.redirect("/user");
                    });
                }
                catch(err)
                {
                    console.log(err);
                }
            }
        });
    }
    catch(err)
    {
        console.log(err);
        console.log("some error in DB");
    }
});

// ---> Add New User Route :-

app.get("/user/new", (req, res) => {
    res.render("addnewuser.ejs");
});

app.post("/user", (req, res) => {
    let newId = uuidv4();
    let { username: newUserName, password: newPass, email: newEmail } = req.body;

    let newUser = [[newId, newUserName, newEmail, newPass]];

    let q = `INSERT INTO user (id, username, email, password) VALUES ?`;

    try
    {
        connection.query(q, [ newUser ], function(err, results) {
            if(err)
            {
                throw err;
            }
            res.redirect("/user");
        });
    }
    catch(err)
    {
        console.log(err);
        console.log("some error occurred");
    }
});

// ---> Delete User Route :-

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    res.render("deleteuser.ejs", { id });
});

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { email: formEmail, password: formPass } = req.body;

    let q = `SELECT * FROM user WHERE id = '${id}'`;

    let q2 = `DELETE FROM user WHERE id = '${id}'`;

    try
    {
        connection.query(q, function(err, results) {
            if(err)
            {
                throw err;
            }

            let user = results[0];

            if(formEmail == user.email && formPass == user.password)
            {
                connection.query(q2, function(err, results) {
                    if(err)
                    {
                        throw err;
                    }

                    res.redirect("/user");
                });
            }
            else
            {
                res.send("Email And Password Doesn't Match");
            }
        });
    }
    catch(err)
    {
        console.log(err);
        console.log("some error occrred");
    }
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});