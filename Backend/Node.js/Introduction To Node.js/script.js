
// ---: Introduction To Node.js :---

let n = 5;

for(let i = 0; i < n; i++)
{
    console.log("hello,",i)
}

console.log(" ");

console.log("bye!");

console.log(" ");

console.log(process.argv);

console.log(" ");

// 1. executable file path.
// 2. current path of file that we are running.

let args = process.argv;

for(let i = 2; i < args.length; i++)
{
    console.log("hello to",args[i]);
}