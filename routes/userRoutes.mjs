import express from "express";
const router = express.Router();
import {
  signup,
  login,
  verification,
  logout,
  changePassword,
  getUser,
} from "../controllers/userControllers.mjs";

// Public Routes
router.post("/login", login);
router.post("/signup", signup);

// Middle ware bearer
router.use(verification);

// Protective routes
router.post("/logout", logout);
router.post("/change-password", changePassword);
// For getting current user profile
router.get("/profile", getUser);

// For getting specific user
router.get("/profile/:id", getUser);
export default router;
