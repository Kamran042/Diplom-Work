const BlogSliderShemaModel = require('../Models/Blog.model');

const BlogController = {
  getAll: async (req, res) => {
    try {
      const items = await BlogSliderShemaModel.find();
      res.send(items);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch items" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await BlogSliderShemaModel.findById(id);
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
      const newCard = new BlogSliderShemaModel({
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
      const item = await BlogSliderShemaModel.findByIdAndDelete(id);
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

      const updatedItem = await BlogSliderShemaModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedItem) {
        return res.status(404).send({ error: "Item not found" });
      }
      res.send("Item Updated");
    } catch (error) {
      res.status(500).send({ error: "Failed to update item" });
    }
  }
};

module.exports = BlogController;
