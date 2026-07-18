import { Product } from "../models/Product.js"

export const getProducts = async (req, res) => {
    try {
        const data = await Product.find()

        res.status(200).json({ message: "Products fetch sucessfully", data })
    } catch (error) {
        console.error("Error Fetching Products", error)
    }
}

export const addProducts = async (req, res) => {
    try {
        const { name, category, pric, description, imgUrl } = req.body

        if (!req.body.name || !req.body.category || !req.body.price || !req.body.description || !req.body.imgUrl) {
            res.status(400).send({ message: "complete your details" })
            return
        }

        const product = await Product.findOne({ name })
        if (product) {
            res.status(400).send({ message: "product already exist" })
            return
        }

        const products = await Product.create({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description
        })

        res.status(200).send({ message: "Product added sucessfully", products })

    } catch (error) {
        console.error("Error adding products", error)
    }
}

export default { getProducts, addProducts }