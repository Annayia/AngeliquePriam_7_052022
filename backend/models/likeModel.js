module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define("likes", {
    userId: {
      type: DataTypes.INTEGER,
      required: true,
    },
  });
  return likes;
};
