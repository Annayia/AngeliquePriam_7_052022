const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const likesCtrl = require("../controllers/likesControllers");

router.post("/:id", auth, likesCtrl.likePost);
router.delete("/:id", auth, likesCtrl.unlikePost);

module.exports = router;
