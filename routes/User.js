const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel.js");
// all users
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (e) {
    console.log(e);
  }
});
// find user
router.get("/:id", async (req, res) => {
  try {
    const users = await userModel.findById(req.params.id);
    res.json(users);
  } catch (e) {
    console.log(e.message);
  }
});
// add user
router.post("/", async (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
    img: req.body.img,
  };
  try {
    const user = new userModel(data);
    await user.save();
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});
// update user
router.patch("/:id", async (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
    img: req.body.img,
  };
  try {
    await userModel.findByIdAndUpdate({ _id: req.params.id }, data);
    const user = await userModel.findById(req.params.id);
    res.json(user);
  } catch (e) {
    console.log(e.message);
  }
});
// delete user
router.delete("/:id", async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.json({ message: "success", success: "true" });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
