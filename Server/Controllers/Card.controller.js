const Cards = require('../models/Card.model');

const CardsController = {
  getAll: async (req, res) => {
    try {
      const items = await Cards.find();
      res.send(items);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Cards.findById(id);
      res.send(item);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const files = req.files;
      const newCard = new Cards({
        ...req.body,
        image1: files && files.image1 ? files.image1[0].path : null,
        image2: files && files.image2 ? files.image2[0].path : null,
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
      await Cards.findByIdAndDelete(id);
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
        if (files.image1) {
          updateData.image1 = files.image1[0].path;
        }
        if (files.image2) {
          updateData.image2 = files.image2[0].path;
        }
      }
  
      await Cards.findByIdAndUpdate(id, updateData);
      res.send("Item Updated");
    } catch (error) {
      res.status(404).send(error);
    }
  }  
};

module.exports = CardsController;
