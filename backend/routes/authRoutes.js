import express from "express"
import { getProfile, login, signupUser } from "../controllers/authController.js"
import { authMiddleware } from "../middlewares/auth.js"

const router = express.Router()

router.route("/signUp").post(signupUser)
router.route("/login").post(login)
router.route("/get-profile").get(authMiddleware, getProfile)

export default router