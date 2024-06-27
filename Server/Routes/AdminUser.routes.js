const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminUser.controller');
const { protect, isSuperAdmin } = require('../Middleware/AdminUser.middleware');

router.post('/register',  adminController.registerAdmin);

router.post('/login', adminController.loginAdmin);

router.get('/', protect, isSuperAdmin, adminController.getAdmins);

router.put('/:id', protect, isSuperAdmin, adminController.updateAdmin);

router.delete('/:id', protect, isSuperAdmin, adminController.deleteAdmin);

module.exports = router;
