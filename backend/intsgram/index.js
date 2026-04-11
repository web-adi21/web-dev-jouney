const express = require("express");
const app = express();
const port = 8080;
const { v4: uuidv4 } = require('uuid');
const path = require("path");
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));



function genLikes() {
  const randomNum = Math.floor(Math.random() * (200 + 1));
  return randomNum;
};
function genCmts() {
  const randomNum = Math.floor(Math.random() * (20 + 1));
  return randomNum;
};

let posts = [{
  id: uuidv4(),
  username: "Aditya Ojha",
  image:"https://th.bing.com/th/id/OIP.aCIECQTCLZn7DpGcSQvuQgHaHT?w=178&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
  likes : genLikes(),
  comments: genCmts()
},
{
  id: uuidv4(),
  username: "Tanishka",
  image:"https://th.bing.com/th/id/OIP.sG1HUbZ7VgiU-TTVfnqxIAHaLH?w=121&h=181&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
  likes : genLikes(),
  comments: genCmts()
},
{
  id: uuidv4(),
  username: "Sassy",
  image:"https://tse1.explicit.bing.net/th/id/OIP.ceD2W9bXqqjoXbdtNNM-HgHaFO?rs=1&pid=ImgDetMain&o=7&rm=3",
  likes : genLikes(),
  comments: genCmts()
}
]
app.listen(port , () => {
  console.log("Listening on port 8080");
});

app.get("/" ,(req , res) => {
  res.render("/home.ejs");
})