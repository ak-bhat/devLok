const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const dummyData = {
    firstName: "Virat",
    lastName: "Kohli",
    email: "Virat@gmail.com",
    password: "virat@123",
  };

  const user = new User(dummyData);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error in adding data "+err.message)
  }
});

connectDB()
  .then(() => {
    console.log("database connection successfull");
    app.listen(7777, () => {
      console.log("Server running at 7777");
    });
  })
  .catch((err) => {
    console.log("Error in db connection");
  });
