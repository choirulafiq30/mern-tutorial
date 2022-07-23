const express = require("express");
const { isModuleNamespaceObject } = require("util/types");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require ("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;