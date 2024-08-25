const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
dotenv.config();
const userRoutes = require("./routes/userRoutes");
connectDB();
const app = express();
app.use(express.json());
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
