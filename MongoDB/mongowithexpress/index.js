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
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
 
app.listen(3000, () => {
  console.log("Server listening on port 3000")
});

app.get("/chats/new", (req,res) => {
  res.render('new.ejs')
  
})

app.post("/chats", (req,res) => {
  let {from , to , message} = req.body;
  let newChat = new Chat({
    fromUser: from,
    toUser: to,
    content: message,
    created_at: new Date()
  })
  newChat.save()
    .then(() => {res.redirect('/chats')})
  
})

app.get("/",(req , res) => {
  res.send("Working Root");
});




app.get("/chats", async (req , res) => {
  let chats = await Chat.find();
  res.render('chats.ejs', { chats });
  
});