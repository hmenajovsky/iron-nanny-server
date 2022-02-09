const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    age: Number,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    address: String,
    phone: String,
    experience: String,
    resume: String,
    description: String,
    availability: {
      type: [String],
      // enum: ["fullTime", "partTime", "evening", "afterschool"]
    },
    kidsNumber: Number,
    kidsAge: [String],
    role: {
      type: [String],
      enum: ["nanny", "family"],
    },
    picture: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
