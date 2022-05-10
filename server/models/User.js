const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    publicKey:{
        type: String,
        required: true,
        unique: true,
    },
    nonce: {
        type: Number,
        default: () => Math.floor(Math.random() * 1000000) // Initialize with a random nonce
    },
    name: {
        type: String,
    },
    email:{
        type: String,
    },
    bio: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("user", schema);