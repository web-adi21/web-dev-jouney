const mongoose = require('mongoose');
let url = "https://localhost:8080/users";

main()
  .then(() => {console.log("Connection successful")})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}; 

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
});

const User = mongoose.model('User', userSchema);
// const user3 = new User({
//     name : "Savi",
//     email:"Savi@gmail.com", 
//     age:48
//   });

//  user3.save()
//       .then((res) => {
//       console.log(res);
//     }).catch((err) => {
//       console.log(err);
//     });
    
    User.findByIdAndUpdate("6a269aff461094e195b5a1e4" , {name : "uri",email:"uri@gmail.com"}, {new: true})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
    