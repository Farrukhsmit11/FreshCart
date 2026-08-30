import { User } from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!req.body.name || !req.body.email || !req.body.password) {
            res.status(400).send({ message: "Complete Your Details" })
            return
        }

        const user = await User.findOne({ email })
        if (user) {
            res.status(400).send({ message: "User already exist" })
            return
        }

        const encryptedPassword = await bcrypt.hash(req.body.password, 10)

        const data = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: encryptedPassword
        })

        res.status(200).json({ message: "User created sucessfully", data })

    } catch (error) {
        console.error("error creating user", error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).send({ message: "Complete your details" })
            return
        }

        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).send({ message: "user not found" })
            return
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            res.status(400).send({ message: "Password does not match" })
            return
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET_KEY
        )

        res.status(200).json({ message: "Login sucessfull", user, token })

    } catch (error) {
        console.error("Error logging in", error)
    }
}

export const getProfile = async (request, response) => {
    try {
        const verifyUser = await User.findById(request.user.id).select("-password")

        response.status(200).send({ message: "Get profile sucessfully", verifyUser })
    } catch (error) {

    }
}

export default { signupUser, login }