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

router.patch("/:id", uploader.single("picture"), async (req, res, next) => {
    try {
        console.log(req.body, req.params.id, ">>>>> UPDATE USER DATA + ID BACK")
        const updatedUser = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error)
    }
});

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

// TO FETCH AVAILABILITIES
router.get("/availabilities", async (req, res, next) => {
    try {
        const availabilityList = await Users.schema.path('availability').enumValues
        // console.log(availabilityList, '>>>>> AVAILABILITY LIST HERE')
        res.status(200).json(availabilityList)
    } catch (error) {
        next(error)
    }
})

// LIKES PERSISTENCY
router.get("/availabilities", async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
})

module.exports = router;
