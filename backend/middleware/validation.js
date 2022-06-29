const validator = require("validator");

module.exports = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;
  if (validator.isEmail(email) && validator.isStrongPassword(password)) {
    console.log("ok");
    next();
  } else if (
    !validator.isEmail(email) &&
    !validator.isStrongPassword(password)
  ) {
    return res.status(400).json({
      error: {
        email: "email invalide",
        password:
          "le mot de passe doit contenir 8 caractères, au moins un chiffre, une majuscule et un symbole",
      },
    });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: {
        email: "email invalide",
      },
    });
  } else if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      error: {
        password:
          "le mot de passe doit contenir 8 caractères, au moins un chiffre, une majuscule et un symbole",
      },
    });
  }
};
