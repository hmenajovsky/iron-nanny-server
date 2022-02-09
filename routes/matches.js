const router = require("express").Router();
const Like = require("../models/Like.model");
const mongoose = require("mongoose");
const protectRoute = require("../middlewares/protectRoute");
const isAuthenticated = require("../middlewares/jwt.middleware");
const Match = require("../models/Match.model");

//router.use(protectRoute);

router.get("/list", async (req, res, next) => {
  try {
    const Likes = await Likes.find({
      liker: req.session.currentId._id,
    }).populate("liker liked");
    res.json({
      Likes: Likes,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get(
  "/:otherId([a-f0-9]{24})",
  isAuthenticated,
  async (req, res, next) => {
    try {
      const currentId = req.payload.currentId._id;
      console.log(currentId);
      const otherId = req.params.otherId;
      const match = await Likes.findOne({ liked: currentId, liker: otherId });
      console.log("match >>", match);
      console.log("match type >>", typeof match);
      const matched = await Likes.findById(newLike._id).populate("liker liked");
      console.log("newLike.liker après populate >>", matched.liked);
      res.json({
        matched,
      });
    } catch (error) {
      console.error(error);
    }
  }
);

/*router.post("/:otherId", isAuthenticated, async (req, res, next) => {
  console.log(req.payload);
  try {
    const currentId = req.payload._id;
    console.log("currentID>>>>>>", currentId);
    const otherId = req.params.otherId;
    const newLike = await Likes.create({ liker: currentId, liked: otherId });
    console.log("newLike avant match et populate >>", newLike);
    const foundlike = await Likes.findOne({
      liked: currentId,
      liker: otherId,
    });
    //LikerId and otherId are matched users ID
    if (foundlike !== null) {
      try {
        // if user is nanny, familyId is otherId
        // if user is family, nannyId is otherId
        //let familyId =
        const currentRole = req.payload.role;
        if (currentRole[0] === "nanny") {
          familyId === otherId;
        } else if (currentRole[Ø] === "family") {
          nannyId === otherId;
        }
        const newMatch = await Matches.create({
          nanny: familyId,
          family: nannyId,
        });
        console.log("there is a match >>", foundlike);
      } catch (error) {
        next(error);
      }
    } else {
      console.log("there is no match!");
    }
  } catch (error) {
    console.error(error);
  }
});*/

router.get("/matchList", isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.payload._id;
    const findMatchList = await Match.find({ nanny: 1 }).populate(
      "nanny family"
    );
    console.log("findMatchList", findMatchList);
    res.status(200).json(findMatchList);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
