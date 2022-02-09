const router = require("express").Router();
const Like = require("../models/Like.model");
const mongoose = require("mongoose");
const protectRoute = require("../middlewares/protectRoute");
const isAuthenticated = require("../middlewares/jwt.middleware");
const Match = require("../models/Match.model");

//router.use(protectRoute);

/*router.get("/:likedId([a-f0-9]{24})", isAuthenticated, async (req, res, next) => { 
    try {
        const likerId = req.payload._id; 
        const likedId = req.params.likedId;

        let nannyId;
        let familyId;
        if (req.payload.role[0] ==="nanny") {
          nannyId = likerId;
          familyId = likedId;
        } else if (req.payload.role[0] ==="family") {
          nannyId = likedId;
          familyId = likerId;      
       }
       console.log("nanny & family", nannyId, familyId)

        const matched = await Matched.findOne({ nanny: nannyId, family:familyId })
          .populate(
            "nanny family"
          );
          console.log("matched >>", matched);
          if (matched !== null) {
          res.status(201).json({matched});
          } else if (matched === null) {
            console.log("no match");
          }
      } catch (error) {
        console.error(error);
      }
    });*/

router.post("/:likedId", isAuthenticated, async (req, res, next) => {
  console.log(req.payload);
  try {
    const likerId = req.payload._id; // current user id
    const likedId = req.params.likedId; // other user id
    const newLike = await Like.create({ liker: likerId, liked: likedId });
    console.log("A new like has been added to the Like collection");

    const foundLike = await Like.findOne({ liked: likerId, liker: likedId });

    if (foundLike !== null) {
      console.log("a matching like has been found !");
      //create into match collection
      let nannyId;
      let familyId;
      if (req.payload.role[0] === "nanny") {
        nannyId = likerId;
        familyId = likedId;
      } else if (req.payload.role[0] === "family") {
        nannyId = likedId;
        familyId = likerId;
      }
      console.log(nannyId);
      try {
        const newMatch = await Match.create({
          nanny: nannyId,
          family: familyId,
        });
        console.log("A new like has been added to the Like collection");
        res.status(200).json({
          ...newMatch,
          liked: false,
          matched: true,
          matchMessage: "It is a match! ",
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("No match has been found");
      res.status(200).json({
        ...newLike,
        matched: false,
        liked: true,
        likeMessage: "liked",
      });
    }
  } catch (error) {
    console.error(error);
  }
});

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
