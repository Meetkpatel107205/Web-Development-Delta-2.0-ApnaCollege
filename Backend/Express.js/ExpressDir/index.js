
// ---: Introduction to Express :---

const express = require("express");
const app = express();

console.dir(app);

let port = 3000; // 8080

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");

//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });

// app.use((req, res) => {
    
//     console.log("request received");

//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
    
//     res.send(code);

// });

app.get("/", (req, res) => {
    res.send("Hello, I am root");
});

// app.get("/apple", (req, res) => {
//     res.send("You contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("You contacted orange path");
// });

// app.get("*", (req, res) => { ---> "*" means all other paths expect above written paths(wildcards).
//     res.send("this path does not exits");
// });

// app.post("/", (req, res) => {
//     res.send("You sent a post request");
// });

// ---> Path Parameters :-

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the Page of @${username}!<h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;

    if(!q)
    {
        res.send("<h1>nothing searched</h1>")
    }

    res.send(`<h1>search results for query: ${q}</h1>`);

});