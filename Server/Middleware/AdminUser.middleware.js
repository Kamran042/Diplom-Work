const jwt = require('jsonwebtoken');
const Admin = require('../Models/AdminUser.model');


const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.admin && req.admin.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

const isSuperAdmin = (req, res, next) => {
  if (req.admin && req.admin.isSuperAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as a super admin' });
  }
};

module.exports = { protect, isAdmin, isSuperAdmin };
