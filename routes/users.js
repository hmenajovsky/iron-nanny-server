const router = require("express").Router();
const Users = require("./../models/User.model");
const mongoose = require("mongoose");
const uploader = require("./../config/cloudinary.config");
const protecRoute = require("./../middlewares/protectRoute");

router.get("/:role", (req, res, next) => {
    Users.find({ role: { $ne: req.params.role } })
        .then((users) => res.send(users))
        .catch(next);
});

// router.patch("/:id", uploader.single("picture"), (req, res, next) => {

// }

    module.exports = router;
