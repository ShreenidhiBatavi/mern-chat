const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all the fields");
  }
  const userExists = await User.findOne({ email });
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({ name, email, password, pic });
  console.log({ userisokay: user });
  if (user) {
    const { password, ...userInfo } = user;
    console.log(userInfo);
    const token = generateToken(user._id);
    userInfo.token = token;
    console.log({ "token is": token });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(500);
    throw new Error("Error registering user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, authUser };
