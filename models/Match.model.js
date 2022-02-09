const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const matchSchema = new Schema({
  nanny: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  family: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Match", matchSchema);
