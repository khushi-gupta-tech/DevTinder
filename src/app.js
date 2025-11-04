require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // creating a new instance of the User model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Added successfully");
  } catch (err) {
    res.status(400).send("User Added successfully" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne({ emailId: userEmail });
    if(users.length===0){
       res.status(404).send("User not found")
    }else{
     res.send(users);
    }
    
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
// Feed API - get all users from the database
app.get("/feed", async(req, res) => {
    try{
      const users = await User.find({})
      res.send(users)
    }
    catch(err){
      res.status(400).send("Not Found")
    }
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
