const mongoose = require("mongoose");

const BlogSlideShema = new mongoose.Schema(
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

const BlogSliderShemaModel = mongoose.model(
  "BlogSliders-DiplomWork",
  BlogSlideShema
);

module.exports = BlogSliderShemaModel;
