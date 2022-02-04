const router = require("express").Router();
const Users = require("./../models/User.model");
const mongoose = require("mongoose");

router.get("/:role", (req, res, next) => {
    Users.find({ role: { $ne: req.params.role} })
    .then((users) => res.send(users))
    .catch(next);
});


module.exports = router;
