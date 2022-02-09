<<<<<<< HEAD
const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const likeSchema = new Schema({
  liker: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  liked: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Like", likeSchema);
=======
const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const likeSchema = new Schema({
    liker: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    liked: {
        type: Schema.Types.ObjectId,
       ref: "User"
    }
});

module.exports = model('Like', likeSchema);
>>>>>>> dc8a7b468a4b40ab00af9352c80cc116cf9c9d72
