const CommentSliderShemaModel = require('../Models/CommentsSlider.model');

const CommentSliderController = {
  getAll: async (req, res) => {
    try {
      const items = await CommentSliderShemaModel.find();
      res.send(items);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch items" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await CommentSliderShemaModel.findById(id);
      if (!item) {
        return res.status(404).send({ error: "Item not found" });
      }
      res.send(item);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch item" });
    }
  },
  add: async (req, res) => {
    try {
      const files = req.files;
      const newCard = new CommentSliderShemaModel({
        ...req.body,
        image: files && files.image ? files.image[0].path : null,
      });
      await newCard.save();
      res.send("Item Created");
    } catch (error) {
      res.status(500).send({ error: "Failed to create item" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await CommentSliderShemaModel.findByIdAndDelete(id);
      if (!item) {
        return res.status(404).send({ error: "Item not found" });
      }
      res.send("Item Deleted");
    } catch (error) {
      res.status(500).send({ error: "Failed to delete item" });
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const files = req.files;
      const updateData = { ...req.body };

      if (files) {
        if (files.image) {
          updateData.image = files.image[0].path;
        }
      }

      const updatedItem = await CommentSliderShemaModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedItem) {
        return res.status(404).send({ error: "Item not found" });
      }
      res.send("Item Updated");
    } catch (error) {
      res.status(500).send({ error: "Failed to update item" });
    }
  }
};

module.exports = CommentSliderController;
