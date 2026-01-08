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
        <section className="section-padding">
            <div className="section-container">
                <div className="popular-products-header">
                    <h4>Popular Products</h4>
                </div>
            </div>
            <CardMainComponent data={products} />
        </section>

    )
}

export default PopularProducts