const { faker, el } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express()
const path = require("path");
const methodOverride = require("method-override")
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'first_app',
  password: '04aditya@'
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
 

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


let count



app.get("/", (req , res) => {
  let q = "SELECT count(*) FROM user_1";
  try {
  connection.query( q, (err , result) => {
    if(err) throw err;
    count = result[0]["count(*)"];
    res.render("home.ejs", { count });
  });
  } catch (err) {
    console.log(err);
    res.send("SOME ERROR")
  };
  
});

app.get("/users", (req , res) => {
  let q = "SELECT * FROM user_1";
  try {
  connection.query( q, (err , result) => {
    if(err) throw err;
    let data = result;
    res.render("users.ejs", { data });
  });
  } catch (err) {
    console.log(err);
    res.send("SOME ERROR")
  };
  
});
let selectedUser;
app.get("/users/:id/edit", (req, res) => {
  let id = req.params.id;
  let q = `SELECT * FROM user_1 WHERE id="${id}"`;
 try {
  connection.query( q, (err , result) => {
    if(err) throw err;
    selectedUser = result;
    res.render("edit.ejs", { selectedUser });
    console.log(selectedUser);
  });
  } catch (err) {
    console.log(err);
    res.send("SOME ERROR")
  };
});


app.patch("/user/:id", (req,res) => {
   let id = req.params.id;
  let { newUsername, newEmail, enteredPassword } = req.body;
  console.log(enteredPassword);
  console.log(newUsername);
  let q2 = `UPDATE user_1 SET username = '${newUsername}', email = '${newEmail}' WHERE id="${id}";`;
  if(enteredPassword == selectedUser[0].password) {
      try {
      connection.query( q2, (err , result) => {
        if(err) throw err;
        res.redirect("/users");
      });
      } catch (err) {
        console.log(err);
        res.send("SOME ERROR")
    };
  } else {
    res.send("Wrong Password");
    console.log(selectedUser[0].password);
  }
    
  
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

