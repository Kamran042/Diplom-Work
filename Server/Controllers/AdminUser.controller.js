const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../Models/AdminUser.model");
require("dotenv").config();


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const adminController = {
  registerAdmin: async (req, res) => {
    const { username, email, password, isAdmin, isSuperAdmin } = req.body;
    try {
      const adminExists = await Admin.findOne({ email });

      if (adminExists) {
        return res.status(400).json({ message: "Admin already exists" });
      }

      const admin = new Admin({
        username,
        email,
        password,
        isAdmin,
        isSuperAdmin,
      });

      const createdAdmin = await admin.save();
      res.status(201).json({
        _id: createdAdmin._id,
        username: createdAdmin.username,
        email: createdAdmin.email,
        token: generateToken(createdAdmin._id),
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  loginAdmin: async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await Admin.findOne({ email });

      if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
          _id: admin._id,
          username: admin.username,
          email: admin.email,
          token: generateToken(admin._id),
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getAdmins: async (req, res) => {
    try {
      const admins = await Admin.find();
      res.json(admins);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateAdmin: async (req, res) => {
    const { id } = req.params;
    const { username, email, isAdmin, isSuperAdmin } = req.body;

    try {
      const admin = await Admin.findById(id);

      if (admin) {
        admin.username = username || admin.username;
        admin.email = email || admin.email;
        admin.isAdmin = isAdmin !== undefined ? isAdmin : admin.isAdmin;
        admin.isSuperAdmin =
          isSuperAdmin !== undefined ? isSuperAdmin : admin.isSuperAdmin;

        const updatedAdmin = await admin.save();
        res.json(updatedAdmin);
      } else {
        res.status(404).json({ message: "Admin not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteAdmin: async (req, res) => {
    const { id } = req.params;
    try {
      const admin = await Admin.findById(id);

      if (admin) {
        await admin.remove();
        res.json({ message: "Admin removed" });
      } else {
        res.status(404).json({ message: "Admin not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = adminController;
