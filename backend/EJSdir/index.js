const express = require('express');
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));


app.get("/", (req , res) => {
  res.render("home.ejs")
})

app.listen(port, () => {
  console.log(`Listening on port ${8080}`);
});

app.get("/ankush",(req , res) => {
  res.send("yOU CAME TO DIFF DIRECTORY")
})