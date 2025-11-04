require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Khushi",
    lastName: "Gupta",
    emailId: "kg123@gmail.com",
    password: "1234",
  });
  // Creating a new instance of the User model
  await user.save();
  res.send("User Added successfully")
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!");
  });
