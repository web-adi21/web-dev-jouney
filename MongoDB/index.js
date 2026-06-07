const mongoose = require('mongoose');
let url = "https://localhost:8080/users";

main()
  .then(() => {console.log("Connection successful")})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};