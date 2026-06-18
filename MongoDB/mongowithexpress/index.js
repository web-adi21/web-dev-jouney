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
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}; 

 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

 
app.listen(3000, () => {
  console.log("Server listening on port 3000")
});


app.get("/",(req , res) => {
  res.send("Working Root");
});




app.get("/chats", async (req , res) => {
  let chats = await Chat.find();
  res.render('chats.ejs', { chats });
  
});