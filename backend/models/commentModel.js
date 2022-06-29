module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define("comment", {
    userId: {
      type: DataTypes.INTEGER,
      required: true,
    },
    author: {
      type: DataTypes.STRING,
      required: true,
    },
    content: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
  });
  return comment;
};
