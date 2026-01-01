import { Badge, Button, Card, Rate } from "antd"
import "./CardMainComponent.css"
import { EyeOutlined, HeartOutlined, PlusOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../store/cartSlice/CartSlice"
import { IoGitCompare } from "react-icons/io5"
import { addToWishlist } from "../../store/wishlistSlice/WishlistSlice"

const CardMainComponent = ({ data = [] }) => {

    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="cards-main-section">
                    {data.map((item) => {
                        return (
                            <Card
                                hoverable
                                className="product-card"
                            >
                                <div className="product-card-content">
                                    <img className="img-fluid" src={item.thumbnail} />
                                    <p className="card-main-desc">{item.category}</p>
                                    <h3 style={{ fontSize: "14px" }}>{item.title}</h3>

                                    <Rate className="product-deals-rating" defaultValue={5} allowClear={false} />

                                    <div className="price-section">
                                        <p>${item.price}</p>

                                        <div className="card-actions">
                                            <Button
                                                onClick={() => dispatch(addToCart(item))}
                                                icon={<PlusOutlined />}
                                                className="add-to-cart-btn"
                                            >Add</Button>
                                        </div>
                                    </div>
                                </div>


                                <div className="icons-overlay">
                                    <div className="icons-main">
                                        <Button icon={<EyeOutlined />}></Button>
                                        <Button icon={<IoGitCompare />}></Button>
                                        <Button onClick={() => dispatch((addToWishlist(item)))} icon={<HeartOutlined />}></Button>
                                    </div>

                                </div>
                            </Card>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default CardMainComponent