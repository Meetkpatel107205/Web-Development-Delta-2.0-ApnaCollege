const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Mathematics XII",
    author: "RD Sharma",
    price: 1200
});

let book2 = new Book({
    author: "RD Sharma",
    price: 1200
});

let book3 = new Book({
    title: "Mathematics VIII",
    price: 1200
});

let book4 = new Book({
    title: "How to kill a Mockingbird",
    author: "Harper Lee",
    price: "abc",
});

let book5 = new Book({
    title: "How to kill a Mockingbird",
    author: "Harper Lee",
    price: "299",
});

let book6 = new Book({
    title: "Gone Girl",
    price: 399,
});

let book7 = new Book({
    title: "Gone Girl aaaaaaaaaaaaaaaaaajfladjfafdjaaaadafdasf",
    price: 399,
});

let book8 = new Book({
    title: "Marvel Comics",
    price: -10,
});

let book9 = new Book({
    title: "Marvel Comics",
    price: "500",
    category: "fiction"
});

let book10 = new Book({
    title: "Marvel Comics",
    price: "500",
    category: "comics"
});

let book11 = new Book({
    title: "Marvel Comics v2",
    price: "500",
    genre: ["comics", "superheroes", "fiction"]
});

book1.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book2.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book3.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book4.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book5.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book6.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book7.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book8.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book9.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book10.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

book11.save().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Book.findByIdAndUpdate("685d71a229a9bb271514856c", { price: -100 }, { runValidators: true }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err.errors.price.properties.message);
});

Book.find({}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});