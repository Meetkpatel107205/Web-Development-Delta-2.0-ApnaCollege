
let a = 5;

console.log(a);

const PI = 3.14;
const pi = Math.PI;

console.log(PI);
console.log(pi);
console.log(Math.PI);

a = 7;

console.log(a);

console.log(typeof null);

console.log(NaN === NaN);

let b = "25";

console.log(b);
console.log(typeof b);

let bool = true;

console.log(bool);
console.log(typeof bool);

let aa = "Hey", bb = 13, cc = true;

console.log(aa);
console.log(bb);
console.log(cc);

let u;

console.log(u);
console.log(typeof u);

let c = undefined;

console.log(c);
console.log(typeof c);

console.log(typeof NaN);

const arr = [1, 2, 3, 4];

arr[2] = "Hey, LOL!";

console.log(arr);

// arr = ["A", "B", "C"];

// console.log(arr);

for(let i = 1; i <= 50; i++)
{
    console.log(i);
}

let sum = 0;
let idx = 1;

console.log(" ")

while(idx <= 10)
{
    sum += idx;
    idx++;
}

console.log(sum);

for(char of "JavaScript")
{
    console.log(char);
}

for(let i = 1; i <= 20; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

let index = 5;

do
{
    console.log(index);
    index--;
}
while(index > 0);

let number = 5;

let fact = 1;

for(let i = 1; i <= 5; i++)
{
    fact *= i;
}

let fact1 = 1;

for(let i = 5; i > 0; i--)
{
    fact1 *= i;
}

console.log(fact);

console.log(fact1);

for(let i = 1; i <= 3; i++)
{
    let str = "";
    for(let j = 1; j <= 3; j++)
    {
        str += `${j} `;
    }
    console.log(str);
}

console.log(" ");

for(let i = 0; i <= 2; i++)
{
    let str = "";
    for(let j = 0; j <= 2; j++)
    {
        str += `${3*i + j + 1} `;
    }
    console.log(str);
}

console.log(" ");

let hold = 1;

for(let i = 1; i <= 3; i++)
{
    let str = "";
    for(let j = 1; j <= 3; j++)
    {
        str += `${hold} `;
        hold++;
    }
    console.log(str);
}

let arr1 = [1, 2, 3, 4];

let arr1Reversed = [];

let idx1 = 0;
for(let i = (arr1.length - 1); i >= 0; i--)
{
    arr1Reversed[idx1] = arr1[i];
    idx1++;
}

console.log(arr1Reversed);

