const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.sequelize = sequelize;
db.userModel = require("./userModel")(sequelize, Sequelize.DataTypes);
db.postModel = require("./postModel")(sequelize, Sequelize.DataTypes);
db.commentModel = require("./commentModel")(sequelize, Sequelize.DataTypes);
db.likeModel = require("./likeModel")(sequelize, Sequelize.DataTypes);

const post = db.postModel;
const user = db.userModel;
const likes = db.likeModel;
const comment = db.commentModel;

post.hasMany(likes, { onDelete: "cascade" });
likes.belongsTo(post, { onDelete: "cascade" });

post.hasMany(comment, { onDelete: "cascade" });
comment.belongsTo(post, { onDelete: "cascade" });

module.exports = db;
