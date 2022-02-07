const router = require("express").Router();
const Users = require("./../models/User.model");
const mongoose = require("mongoose");

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


module.exports = router;
