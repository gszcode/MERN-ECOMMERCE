const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
} = require("../controllers/userController");

// register - login - logout
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

// forgot password - reset password
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:id", resetPassword);

// user details - update password - update profile
router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.put("/me/update", isAuthenticatedUser, updateProfile);

module.exports = router;
