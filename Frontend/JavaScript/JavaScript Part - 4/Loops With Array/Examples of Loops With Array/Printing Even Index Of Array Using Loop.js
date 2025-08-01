
// ---: Printing Even Index Of Array Using Loop :---

let fruit = ["Mango","Apple","Banana","Litchi","Orange"];

console.log("---: Printing \"fruit\" Array with Even Index Only Using Loop :---");
console.log(" ");

for(let i=0;i<fruit.length;i=i+2)
{
    console.log("fruit[",i,"] :",fruit[i]);
}
