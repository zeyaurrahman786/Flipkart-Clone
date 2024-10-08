const express = require("express");
const router = express.Router();
const User = require("../models/user");
let bcrypt = require("bcrypt");


router.post("/users", async (req, res) => {
  const user = req.body;
  console.log(req.body, "Zeyaur");
  const Email = await User.findOne({ email: user.email });
  if (Email) {
    res.send("User is already registered in  our Database");
  } else {
    // console.log(req.body.passWord);
    user.passWord = await bcrypt.hash(req.body.passWord, 10);
    const dbUser = new User({
      name: user.name,
      email: user.email.toLowerCase(),
      passWord: user.passWord,
    });
    await dbUser.save();
    res.send({ message: "Done" });
  }
});

module.exports = router;