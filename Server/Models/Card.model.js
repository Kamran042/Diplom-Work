const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
      required: false,
    },
    image2: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Cards = mongoose.model("CardsDiplomWork", CardSchema);

module.exports = Cards;
