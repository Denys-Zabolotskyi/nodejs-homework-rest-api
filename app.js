const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const contacts = require("./models/contacts.json"); // make a comment after practice
const contactsRouter = require("./routes/api/contacts");

const app = express();

// app.get("/contacts", (req, res) => {
//   res.json(contacts);
// }); // make a comment after practice

// app.get("/products", (req, res) => {
//   res.json([]);
// }); // make a comment after practice

// app.use((req, res, next) => {
//   console.log("First midlleware");
//   next();
// }); // make a comment after practice

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());

// app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
