
// ---: String Operators : Strict Equality Operator :---

let s1 = "gfg"; // <--- Primitive Type           <---+
//                                                   |------- Both are different type 
let s2 = new String("gfg"); // <--- Object Type  <---+

console.log("s1 =",s1);
console.log("s2 =",s2);

console.log("\ns1 === s2 :",s1 === s2);

/*

     ---> Strict Equality(===) : Checks if two strings are equal in value and type both.

*/