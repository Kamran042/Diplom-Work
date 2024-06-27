const express = require("express");
const multer = require("multer");
const AuthController = require("../Controllers/User.controller");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public"); // Папка, куда сохраняются загруженные файлы
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + file.originalname;
    cb(null, uniqueSuffix); // Генерация уникального имени файла
  },
});

const upload = multer({ storage: storage });


router.post('/register', upload.single('img'), AuthController.register);

router.post('/login', AuthController.login);

router.get('/', AuthController.getUsers);

module.exports = router;
