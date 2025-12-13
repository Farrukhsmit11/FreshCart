import CardWrapper from "../../uiComponents/cardWrapper/CardWrapper"
import products from "../../uiComponents/cardWrapper/products"

const PopularProducts = () => {
    return (
        <div className="container">
            <div className="row">
                <CardWrapper data={products} />
            </div>
        </div>
    )
}

export default PopularProducts