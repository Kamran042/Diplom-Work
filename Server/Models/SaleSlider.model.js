const mongoose = require("mongoose");

const SaleSliderShema = new mongoose.Schema({
  bgImage: {
    type: String,
    required: false
    },
  innerImage: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  salepercentage: {
    type: Number,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

const SaleSliderShemaModdel = mongoose.model("SaleSliders-DiplomWork", SaleSliderShema);

module.exports = SaleSliderShemaModdel;
