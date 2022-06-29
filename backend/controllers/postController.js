const db = require("../models");
const post = db.postModel;
const user = db.userModel;
const likes = db.likeModel;
const Op = db.sequelize.Op;

exports.createPost = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
  );
  post
    .create({
      title: req.body.title,
      content: req.body.content,
      attachment: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
      userId: req.auth.userId,
      author: req.body.author,
    })
    .then(() => res.status(201).json({ message: "Publication réussie" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllPost = (req, res, next) => {
  post
    .findAll({ where: post, include: likes })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Nous ne pouvons afficher les posts",
      });
    });
};

exports.modifyPost = (req, res, next) => {
  const id = req.params.id;
  post
    .update({ ...req.body }, { where: { id: id } })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  post
    .destroy({
      where: { id: id },
    })
    .then((data) => {
      if (data) {
        res.send({
          message: "Post was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete post with id=${id}. Maybe post was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete post with id=" + id,
      });
    });
};

// exports.deleteAll = (req, res, next) => {

// };

// exports.findAllPublished = (req, res, next) => {

// };
