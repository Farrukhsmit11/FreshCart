import express from "express"
import { signupUser } from "../controllers/authController.js"

const router = express.Router()

router.route("/signUp").post(signupUser)

export default router