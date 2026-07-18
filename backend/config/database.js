import mongoose from "mongoose";

const mongoDBuri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBuri)
        console.log("Mongodb connected")
    } catch (error) {
        console.error("Mongodb connection failed", error)
    }
}
export default connectDB