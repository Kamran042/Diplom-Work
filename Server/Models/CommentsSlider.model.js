const mongoose = require("mongoose");

const CommentSliderShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentSliderShemaModel = mongoose.model(
  "CommentSliders-DiplomWork",
  CommentSliderShema
);

module.exports = CommentSliderShemaModel;
