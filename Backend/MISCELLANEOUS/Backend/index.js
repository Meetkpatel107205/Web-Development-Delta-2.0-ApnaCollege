
const express = require("express");
const app = express();

const port = 8000;

app.use(express.urlencoded({extended: true})); // <--- this is middleware.
app.use(express.json()); // <--- this is also a middleware.
// ---> "app.use" means this work can be done for all requests whether it is a GET req,POST req,PUT req,etc.

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard GET Response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard POST Response. Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});