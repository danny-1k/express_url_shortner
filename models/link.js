const mongoose = require("mongoose");

const LinkModel = mongoose.model(
  "Link",
  new mongoose.Schema({
    orignialUrl: String,
    generatedUrl: { type: String, default: generateRandomUrl },
    time: { type: Date, default: Date.now },
    clicks: {type: Number, default:0},
  })
);

module.exports = { LinkModel };
