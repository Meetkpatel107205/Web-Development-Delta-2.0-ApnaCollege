const mongoose = require("mongoose");
  
main()
  .then((res) => {
    console.log("Connection Successfull")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.in",
    age: 48,
});

user1.save();

const user2 = new User({
  name: "Eve",
  email: "eve@yahoo.in",
  age: 48,
});

user2.save()
     .then((res) => {
      console.log(res);
     })
     .catch((err) => {
      console.log(err);
     });

User.insertMany([
  {name: "Tony", email: "tony@gmail.com", age: 50},
  {name: "Peter", email: "peter@gmail.com", age: 30},
  {name: "Bruce", email: "bruce@gmail.com", age: 47},
]).then((res) => {
  console.log(res);
});

User.find({}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.find({ age: { $gte: 47 }}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.findOne({ age: { $gte: 47 }}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.find({ age: { $gte: 47 }}).then(res => {
  console.log(res[0].name);
}).catch(err => {
  console.log(err);
});

User.findOne({ _id: "685d3f7fc21468c6115af962" }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.findById("685d3f7fc21468c6115af962").then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.updateOne({ name: "Bruce"}, { age: 49 }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.updateMany({ age: { $gt: 48 }}, { age: 55 }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.findOneAndUpdate({ name: "Bruce" }, { age: 35 }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.findOneAndUpdate({ name: "Bruce" }, { age: 42 }, { new: true }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.findByIdAndUpdate("67cf20a0b2b1a86e1fbddd60", { age: 60 }, { new: true }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.deleteOne({ name: "Bruce" }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.deleteMany({ age: 48 }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.find({}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.findByIdAndDelete("685d3f7fc21468c6115af960").then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

User.findOneAndDelete({ name: "Peter" }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});




