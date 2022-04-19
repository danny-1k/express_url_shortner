const mongoose = require("mongoose");

const LinkModel = mongoose.model("Link",
  new mongoose.Schema({
    orignialUrl: String,
    generatedUrl: { type: String, default: Date.now },
  })
);


module.exports = {LinkModel};