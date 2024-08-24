const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");
console.log({ registerUser });

router.post("/", registerUser);
// router.post("/login", authUser);

module.exports = router;
