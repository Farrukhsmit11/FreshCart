import express from "express"
import cors from "cors"
import 'dotenv/config';
import connectDB from "./config/database.js"
import authRoutes from "./routes/authRoutes.js"

const app = express()
const PORT = 5002

app.use(express.json())
app.use(cors())

connectDB()

app.use(authRoutes)

app.get("/", (req, res) => {
    res.send("Hello world backend is running")
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`)
})