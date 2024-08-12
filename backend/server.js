const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("shri hare krishna!");
});
app.get("/api/chat", (req, res) => {
  console.log(chats);
  res.send(chats);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
