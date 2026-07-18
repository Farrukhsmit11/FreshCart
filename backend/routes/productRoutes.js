import express from "express"
import { addProducts, getProducts } from "../controllers/productController.js"

const router = express.Router()

router.route("/get-products").get(getProducts)
router.route("/add-products").post(addProducts)

export default router