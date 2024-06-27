const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Multer');
const BlogController = require('../Controllers/Blog.controller'); 

router.get('/', BlogController.getAll);
router.get('/:id', BlogController.getById);
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }]), BlogController.add); // исправлено поле для загрузки изображений
router.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }]), BlogController.edit); // исправлено поле для загрузки изображений
router.delete('/:id', BlogController.delete);

module.exports = router;
