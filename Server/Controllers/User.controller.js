const User = require('../Models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const AuthController = {
   register : async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const imgPath = req.file.path; 
  
      if (!username || !email || !password || !imgPath) {
        return res.status(400).send("All fields are required");
      }
  
      const user = await User.create({
        username,
        email,
        password,
        img: imgPath  // Сохраняем путь к файлу в базе данных
      });
  
      res.status(201).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        img: user.img
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send("All fields are required");
      }

      const user = await User.findOne({ email });

      if (user && (await user.matchPassword(password))) {
        res.send({
          _id: user._id,
          username: user.username,
          email: user.email,
          img: user.img,
          token: generateToken(user._id, user.username),
        });
      } else {
        res.status(401).send("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password"); 
      res.status(200).send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
};

const generateToken = (id, username) => {
  return jwt.sign({ id, username }, 'qwerty89127812/fwf3320042', {
    expiresIn: '30d',
  });
};

module.exports = AuthController;
