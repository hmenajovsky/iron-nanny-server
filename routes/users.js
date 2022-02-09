const router = require("express").Router();
const Users = require("./../models/User.model");
const mongoose = require("mongoose");
const uploader = require("./../config/cloudinary.config");
const protecRoute = require("./../middlewares/protectRoute");
const UserModel = require("./../models/User.model");

router.get("/nanny", (req, res, next) => {
  Users.find({ role: { $eq: "nanny" } })
    .then((users) => res.send(users))
    .catch(next);
});

router.get("/family", (req, res, next) => {
  Users.find({ role: { $eq: "family" } })
    .then((users) => res.send(users))
    .catch(next);
});

// router.patch("/:id", uploader.single("picture"), (req, res, next) => {

// }

router.delete("/:id", async (req, res, next) => {
  console.log("req, params", req.params);
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    console.log(deletedUser);
    res.status(204).json(deletedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
