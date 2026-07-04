const express = require("express");
const app = express();

app.use(() => {
  console.log("Hi, I am midelleware");
});

app.get("/", (req,res) => {
  res.send();
});

app.get("/random", (reqres)=> { 
  
})

app.listen(3000, () => {
  console.log("server listening on port 3000");
});