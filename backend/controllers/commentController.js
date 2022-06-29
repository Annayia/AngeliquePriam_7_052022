const db = require("../models");
const { Op } = require("sequelize");
const user = db.userModel;
const post = db.postModel;
const comment = db.commentModel;

exports.createComment = (req, res, next) => {
  async function Createcomment() {
    const postId = req.params.id;
    const verif = await comment.findOne({
      where: { [Op.and]: [{ postId: postId }, { userId: req.auth.userId }] },
    });
    console.log(verif);
    if (verif === null) {
      console.log("shit");
      comment
        .create({
          userId: req.auth.userId,
          author: req.body.author,
          content: req.body.content,
          postId: postId,
        })
        .then(() => res.status(201).json({ message: "Commentaire crée" }))
        .catch((error) => res.status(400).json({ error }));
    }
  }
  Createcomment();
};

exports.findAllComment = (req, res, next) => {
  comment
    .findAll({ where: comment })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Nous ne pouvons afficher les commentaires",
      });
    });
};

exports.modifyComment = (req, res, next) => {
  comment
    .update({ id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {
  async function deleteComment() {
    const postId = req.params.id;
    const verif = await comment.findOne({
      where: { [Op.and]: [{ postId: postId }, { userId: req.auth.userId }] },
    });
    if (verif != null) {
      comment
        .destroy({
          where: { id: verif.id },
        })
        .then((data) => {
          if (data) {
            res.send({
              message: "le commentaire a été supprimé",
            });
          } else {
            res.send({
              message: `Cannot delete comment with id=${id}. Maybe post was not found!`,
            });
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: "Could not delete link with id=" + id,
          });
        });
    }
  }
  deleteComment();
};
