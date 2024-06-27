// routes/products.js
const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Multer');
const SaleSliderController = require('../controllers/SaleSlider.controller');

// Routes
router.get('/', SaleSliderController.getAll);
router.get('/:id', SaleSliderController.getById);
router.post('/', upload.fields([{ name: 'bgImage', maxCount: 1 }, { name: 'innerImage', maxCount: 1 }]), SaleSliderController.add);
router.put('/:id', upload.fields([{ name: 'bgImage', maxCount: 1 }, { name: 'innerImage', maxCount: 1 }]), SaleSliderController.edit);
router.delete('/:id', SaleSliderController.delete);

module.exports = router;
