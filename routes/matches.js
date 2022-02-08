const router = require("express").Router();
const Matches = require("../models/Match.model");
const mongoose = require("mongoose");
const protectRoute = require("../middlewares/protectRoute");
const isAuthenticated = require("../middlewares/jwt.middleware");

//router.use(protectRoute);

router.get("/list", async (req, res, next) => { 
  try {
    const matches = await Matches.find({liker :req.session.currentUser._id}).populate("liker liked");
    res.json({
      matches: matches,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:likedId([a-f0-9]{24})", isAuthenticated, async (req, res, next) => { 
    try {
        const likerId = req.payload.currentUser._id;
        console.log(likerId);
        const likedId = req.params.likedId;
        const match = await Matches.findOne({ liked: likerId, liker: likedId });
        console.log("match >>", match);
        console.log("match type >>", typeof match);
          const matched = await Matches.findById(newLike._id).populate(
            "liker liked"
          );
          console.log("newLike.liker après populate >>", matched.liked);
          res.json({
            matched,
          });
      } catch (error) {
        console.error(error);
      }
    });
    

router.post("/:likedId", isAuthenticated, async (req, res, next) => {
  console.log(req.payload);
  try {
    const likerId = req.payload._id;
    console.log(likerId);
    const likedId = req.params.likedId;
    const newLike = await Matches.create({ liker: likerId, liked: likedId });
    console.log("newLike avant match et populate >>", newLike);
    const match = await Matches.findOne({ liked: likerId, liker: likedId });
    if (match !== null) {
    console.log("there is a match >>", match);
    console.log("match type >>", typeof match);
    } else {
      console.log("there is no match >>", match);
    }
    } catch (error) {
    console.error(error);
  }
});

module.exports = router;