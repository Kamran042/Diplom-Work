// routes/products.js
const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Multer');
const CardsController = require('../controllers/Card.controller');

// Routes
router.get('/', CardsController.getAll);
router.get('/:id', CardsController.getById);
router.post('/', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), CardsController.add);
router.put('/:id', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), CardsController.edit);
router.delete('/:id', CardsController.delete);

module.exports = router;
