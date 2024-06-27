const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Multer');
const CommentSliderController = require('../Controllers/CoomentsSlider.controller'); 

router.get('/', CommentSliderController.getAll);
router.get('/:id', CommentSliderController.getById);
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), CommentSliderController.add); // исправлено поле для загрузки изображений
router.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }]), CommentSliderController.edit); // исправлено поле для загрузки изображений
router.delete('/:id', CommentSliderController.delete);

module.exports = router;
