const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Adi",
    content: "I am happy"
  },
   {
    id: uuidv4(),
    username: "julie",
    content: "I am angry"
  },
   {
    id: uuidv4(),
    username: "max",
    content: "I am sad"
  }
]


app.get("/", (req , res) => {
  res.send("server working well");
})


 
app.listen(port , () => {
  console.log("Listening on port 8080");
});

app.get("/posts", (req , res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req , res) => {
  res.render("form.ejs");
});

app.post("/posts", (req , res) => {
  let id = uuidv4();
  let  { username, content } = req.body;
  posts.push({ id, username , content});
  res.redirect("/posts");  
})

app.get("/posts/:id", (req , res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => id == p.id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req,res) => {
  res.send("Patch req working well");
})