const mongoose = require("mongoose");

const generateRandomUrl = ()=>{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz1234567890';
    let out = '';

    for (let i=0;i<9;i++){
        const rn = Math.floor(Math.random() * chars.length);
        out = out+chars[rn];

    };

    return out;

};

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
