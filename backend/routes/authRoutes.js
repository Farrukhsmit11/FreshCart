import express from "express"
import { login, signupUser } from "../controllers/authController.js"

const router = express.Router()

router.route("/signUp").post(signupUser)
router.route("/login").post(login)

export default router