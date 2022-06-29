const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.userModel;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.create({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé!" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error: "Création impossible" }));
};

exports.login = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((User) => {
      if (!User) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, User.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: User.id,
            token: jwt.sign({ userId: User.id }, process.env.SECRET_KEY, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
