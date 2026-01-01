import { useEffect } from "react"
import CardMainComponent from "../cardMainComponent/CardMainComponent"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/productSlice/ProductSlice"
import "./PopularProducts.css"

const PopularProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const products = useSelector((state) => state.products.items)

    return (
        <div className="container">
            <div className="row">
                <div className="popular-products-header">
                    <h4>Popular Products</h4>
                </div>
                <CardMainComponent data={products} />
            </div>
        </div>
    )
}

export default PopularProducts