const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Denys:LkJn3EFTMgJ6XAG@cluster0.olek4xl.mongodb.net/phone_book?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message));

// LkJn3EFTMgJ6XAG
// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
