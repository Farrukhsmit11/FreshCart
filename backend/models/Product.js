import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true }
},
    { timestamps: true }
)

export const Product = mongoose.model("Product", productSchema)