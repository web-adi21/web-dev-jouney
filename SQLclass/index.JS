const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express()
const path = require("path");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'first_app',
  password: '04aditya@'
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
 

 let createRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
    faker.internet.password()
  ];
    
};




let data = [];
for(let i = 0; i<100;i++) {
  data.push(createRandomUser())
}






app.get("/", (req , res) => {
  let q = "SELECT count(*) FROM user_1";
  try {
  connection.query( q, (err , result) => {
    if(err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs", { count });
  });
  } catch (err) {
    console.log(err);
    res.send("SOME ERROR")
  };
  
});

app.listen("8080", () => {
  console.log("server listening on port 8080");
});


// try {
//   connection.query( q,[data], (err , result) => {
//     if(err) throw err;
//     console.log(result);
//   });
//   } catch (err) {
//     console.log(err);
//   }

