import { User } from "../models/User.js"
import bcrypt from "bcrypt"

export const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!req.body.name || !req.body.email || !req.body.password) {
            res.send(400).send({ message: "Complete All Details" })
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

export default { signupUser }