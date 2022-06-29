const db = require("../models");
const user = db.userModel;
const post = db.postModel;
const like = db.likeModel;
const { Op } = require("sequelize");

exports.likePost = (req, res, next) => {
  async function liking() {
    const postId = req.params.id;
    const verif = await like.findOne({
      where: { [Op.and]: [{ postId: postId }, { userId: req.auth.userId }] },
    });
    console.log(verif);
    if (verif === null) {
      console.log("shit");
      like
        .create({
          userId: req.auth.userId,
          postId: postId,
        })
        .then(() => res.status(201).json({ message: "Post liké" }))
        .catch((error) => res.status(400).json({ error }));
    }
  }
  liking();
};

exports.unlikePost = (req, res, next) => {
  async function unliking() {
    const postId = req.params.id;
    const verif = await like.findOne({
      where: { [Op.and]: [{ postId: postId }, { userId: req.auth.userId }] },
    });
    if (verif != null) {
      like
        .destroy({
          where: { id: verif.id },
        })
        .then((data) => {
          if (data) {
            res.send({
              message: "le like a été supprimé",
            });
          } else {
            res.send({
              message: `Cannot delete like with id=${id}. Maybe post was not found!`,
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
  unliking();
};
