const db = require("../models");
const user = db.userModel;
const post = db.postModel;
const comment = db.commentModel;
const Op = db.sequelize.Op;

exports.findOneUser = (req, res, next) => {
  const id = req.params.id;
  user
    .findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Utilisateur id=${id} non trouvé.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erreur lors de la recherche de l'utilisateur id=" + id,
      });
    });
};
// Pour Admin trouver users
exports.findAllUser = (req, res, next) => {
  user
    .findAll({ where: user })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Nous ne pouvons afficher les utilisateurs",
      });
    });
};
exports.ModifyUser = (req, res, next) => {
  const id = req.params.id;
  user
    .update({ ...req.body }, { where: { id: id } })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  user
    .destroy({
      where: { id: id },
    })
    .then(() => res.status(200).json({ message: "Objet supprimé!" }))
    .catch((error) => res.status(400).json({ error }));
};
