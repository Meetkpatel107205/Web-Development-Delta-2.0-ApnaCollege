const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

const port = 8001;

// ---> Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(methodOverride("_method")); // Allow PUT & PATCH via POST requests

// ---> Set up view engine and static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

// ---> Sample posts data
let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "Shradhakhapra",
        content: "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
        username: "Meetpatel",
        content: "I got selected for my 1st internship!",
    },
];

// --- ROUTES ---

// ---> Show all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// ---> Render the form to create a new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// ---> Handle form submission to create a new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// ---> Show a single post in detail
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

// ---> Render the edit form for a specific post
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

// ---> Handle form submission to update a post (PATCH request)
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

// ---> Delete the post
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

// ---> Start the server
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});


