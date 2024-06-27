const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/public', express.static('public'))
//////////

const CardsRouter = require("./Routes/Card.routes");
app.use("/api/diplomWork/cards", CardsRouter);

const UsersRouter = require("./Routes/User.routes");
app.use('/api/diplomWork/users', UsersRouter);

const AdminUserRoutes = require("./Routes/AdminUser.routes");
app.use('/api/diplomWork/admins', AdminUserRoutes);

const SaleSliderRoutes = require("./Routes/SaleSlider.routes");
app.use('/api/diplomWork/salesliders', SaleSliderRoutes);

const CommentsSliderRoutes = require("./Routes/CommentsSlider.routes");
app.use('/api/diplomWork/commentslider', CommentsSliderRoutes);

const BlogSliderRoutes = require("./Routes/Blog.routes");
app.use('/api/diplomWork/blog', BlogSliderRoutes);

/////////////////
app.listen(process.env.PORT, () => {
  console.log(`Port ${process.env.PORT} connected`);
});

mongoose
  .connect(process.env.CONNECTION__STRING)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
