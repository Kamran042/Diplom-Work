const SaleSliderShemaModdel = require('../models/SaleSlider.model');

const SaleSliderController = {
  getAll: async (req, res) => {
    try {
      const items = await SaleSliderShemaModdel.find();
      res.send(items);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await SaleSliderShemaModdel.findById(id);
      res.send(item);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const files = req.files;
      const newCard = new SaleSliderShemaModdel({
        ...req.body,
        bgImage: files && files.bgImage ? files.bgImage[0].path : null,
        innerImage: files && files.innerImage ? files.innerImage[0].path : null,
      });
      await newCard.save();
      res.send("Item Created");
    } catch (error) {
      res.status(404).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await SaleSliderShemaModdel.findByIdAndDelete(id);
      res.send("Item Deleted");
    } catch (error) {
      res.status(404).send(error);
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const files = req.files;
      const updateData = {
        ...req.body,
      };
  
      if (files) {
        if (files.bgImage) {
          updateData.bgImage = files.bgImage[0].path;
        }
        if (files.innerImage) {
          updateData.innerImage = files.innerImage[0].path;
        }
      }
  
      await SaleSliderShemaModdel.findByIdAndUpdate(id, updateData);
      res.send("Item Updated");
    } catch (error) {
      res.status(404).send(error);
    }
  }  
};

module.exports = SaleSliderController;
