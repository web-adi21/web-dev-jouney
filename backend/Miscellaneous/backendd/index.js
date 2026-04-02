const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log("Listening on port 8080");
});

app.get("/register", (res , req) => {
  res.send("Normal GET response");
});

app.post("/register", (res , req) => {
  res.send("Normal GET response");
});