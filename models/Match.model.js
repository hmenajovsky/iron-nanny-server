const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const MatchSchema = new Schema({
  nanny: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  family: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Match", MatchSchema);
