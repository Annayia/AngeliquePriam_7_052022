const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation");

const userCtrl = require("../controllers/userController");
const authCtrl = require("../controllers/authController");
const multer = require("multer");

router.post("/auth/signup", validation, authCtrl.signup);
router.post("/auth/login", authCtrl.login);
router.get("/users/:id", auth, userCtrl.findOneUser);
router.get("/users", auth, userCtrl.findAllUser);
router.put("/users/:id", auth, userCtrl.ModifyUser);
router.delete("/users/:id", auth, userCtrl.deleteUser);

module.exports = router;
