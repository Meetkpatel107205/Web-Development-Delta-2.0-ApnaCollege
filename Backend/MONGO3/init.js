
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "amit",
        msg: "can you share the project files?",
        created_at: new Date()
    },
    {
        from: "anita",
        to: "megha",
        msg: "let’s meet at the library at 4",
        created_at: new Date()
    },
    {
        from: "vishal",
        to: "neha",
        msg: "please check the assignment folder",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "I have submitted the report",
        created_at: new Date()
    }
]

Chat.insertMany(allChats);
