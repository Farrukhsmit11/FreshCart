import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

export const authMiddleware = async (request, response, next) => {

    const token = request.headers.authorization?.split(' ')[1]

    if (!token) {
        response.status(400).send({ message: "token is required" })
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await User.findById(decoded.id).select("-password")

        if (!user) {
            response.status(400).send({ message: "User not found" })
        }

        request.user = decoded

        next()

    } catch (error) {
        console.error("error authenticating user", error)
    }
}