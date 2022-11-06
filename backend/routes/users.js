const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/users");
const router = express.Router();

router.get("/users", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);

module.exports = router;
