
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Jashmeet@2005'
  });

// let q = "SHOW TABLES";

// try
// {
//     connection.query(q, (err, result) => {
//         if(err)
//         {
//             throw err;
//         }
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//     });
// }
// catch(err)
// {
//     console.log(err);
// }

//  ---> Inserting new data :-

// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let users = [["123a", "123_newusera", "abc@gmail.coma", "abca"], ["123b", "123_newuserb", "abc@gmail.comb", "abcb"]];

// try
// {
//   connection.query(q, [ users ], function(err, results) {
//     if(err)
//     {
//       throw err;
//     }
//     console.log(results);
//   });
// }
// catch(err)
// {
//   console.log(err);
// }

// ---> Insert in bulk :-

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password()
  ];
}

let data = [];

for(let i = 1; i <= 100; i++)
{
  // console.log(getRandomUser());
  data.push(getRandomUser());
}

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

try
{
  connection.query(q, [ data ], function(err, results) {
    if(err)
    {
      throw err;
    }
    console.log(results);
  })
}
catch(err)
{
  console.log(err);
}

connection.end();

// let getRandomUser = () => {
//     return {
//       Id: faker.string.uuid(),
//       username: faker.internet.username(), // before version 9.1.0, use userName()
//       email: faker.internet.email(),
//       password: faker.internet.password()
//     };
//   }

