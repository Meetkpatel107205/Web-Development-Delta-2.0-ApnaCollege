
// ---: Introduction to EJS(Embedded JavaScript Template) :---

const express = require("express");
const app = express();

const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs"); // ---> Express by default find "views" folder when we use "render" and search for
 // res.render("home");             the value that we put in the argument of render. If we not provide the ".ejs"
                            //      then it will also work because express will find based on "names". 
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
});

// app.get("/ig/:username", (req, res) => {
//     const followers = ["adam", "bob", "steve", "abc"];
//     let { username } = req.params;
//     res.render("Instagram.ejs", { username, followers })
// });

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];

    if(data)
    {
        res.render("Instagram2.ejs", { data });    
    }
    else
    {
        res.render("error.ejs");    
    }

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});