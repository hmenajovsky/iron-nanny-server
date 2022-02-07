const router = require("express").Router();
const Users = require("./../models/User.model");
const mongoose = require("mongoose");
const uploader = require("./../config/cloudinary.config");
const protecRoute = require("./../middlewares/protectRoute");

router.get("/nanny", (req, res, next) => {
    Users.find({ role: { $eq: "nanny"} })
    .then((users) => res.send(users))
    .catch(next);
});

router.get("/family", (req, res, next) => {
    Users.find({ role: { $eq: "family"} })
    .then((users) => res.send(users))
    .catch(next);
});

// router.patch("/:id", uploader.single("picture"), (req, res, next) => {

// }

    module.exports = router;
