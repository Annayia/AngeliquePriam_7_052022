const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const commentCtrl = require("../controllers/commentController");

router.post("/:id", auth, commentCtrl.createComment);
router.get("/", auth, commentCtrl.findAllComment);
router.put("/:id", auth, commentCtrl.modifyComment);
router.delete("/:id", auth, commentCtrl.deleteComment);

module.exports = router;
