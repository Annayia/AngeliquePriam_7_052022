const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const path = require("path");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const likeRoutes = require("./routes/likeRoutes");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

db.sequelize.sync();

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comment", commentRoutes);

module.exports = app;
