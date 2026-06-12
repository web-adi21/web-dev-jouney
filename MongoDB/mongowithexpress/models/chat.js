const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  fromUser : {
    type: String,
    required:true
  },
   toUser : {
    type: String,
    required:true
  },
   content : {
    type: String
  },
   created_at : {
    type: Date,
    required:true
  }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;