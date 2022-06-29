module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    pseudo: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    bio: {
      type: DataTypes.STRING,
      required: false,
    },
    isAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });
  return user;
};
