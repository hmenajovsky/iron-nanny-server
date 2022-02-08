const { Schema, model } = require("mongoose");

const MatchSchema = new Schema({
  liker: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  liked: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Match", MatchSchema);
