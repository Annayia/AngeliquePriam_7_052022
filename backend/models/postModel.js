module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
      required: true,
    },
    attachment: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      required: true,
    },
    author: {
      type: DataTypes.STRING,
      required: true,
    },
  });
  return post;
};
