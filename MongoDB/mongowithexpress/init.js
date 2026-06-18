const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};



let allChats = [
  {
    fromUser : "navya",
    toUser : "aditya",
    content: "hello",
    created_at: new Date()
  },
  {
    fromUser : "hrithik",
    content: "yo how are you",
    created_at: new Date()
  },
  {
    fromUser : "samridhi",
    toUser : "ridhi",
    content: "whatyadoing",
    created_at: new Date()
  },
  {
    fromUser : "lemon",
    toUser : "tomato",
    content: "hi i am lemon",
    created_at: new Date()
  },
  {
    fromUser : "potato",
    toUser : "carrot",
    content: "yahalo i am going",
    created_at: new Date()
  },
  {
    fromUser : "numan",
    toUser : "palot",
    content: "heheehehahahahaha",
    created_at: new Date()
  }];


  Chat.insertMany(allChats)
      .then((res) => {
        console.log("data saved successfulyy");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        mongoose.connection.close();
      })
