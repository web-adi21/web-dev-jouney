const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const Chat = require('./models/chat.js');

main()
  .then(() => {
    console.log("connection succesfully established");
  })
  .catch((err) => {
    console.log(err);
  })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}; 

 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

 
let chat1 = new Chat({
  fromUser : "navya",
  toUser : "aditya",
  content: "hello",
  created_at: new Date()
})


chat1.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })




































app.get("/",(req , res) => {
  res.send("Working Root");
});

app.listen(8080, () => {
  console.log("app is listening");
});

app.get("/chats", (req , res) => {

});