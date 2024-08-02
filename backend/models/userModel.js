const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/150x150",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", messageModel);
module.exports = User;
