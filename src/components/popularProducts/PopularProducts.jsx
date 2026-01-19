import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/productSlice/ProductSlice"
import "./PopularProducts.css"
import { Button, Card, Col, Rate, Row } from "antd"
import { useNavigate } from "react-router-dom"
import QuickViewModal from "../quickViewModal/QuickViewModal"
import { EyeOutlined, HeartOutlined, PlusOutlined } from "@ant-design/icons"
import { IoGitCompare } from "react-icons/io5"
import { addToWishlist } from "../../store/wishlistSlice/WishlistSlice"
import { addToCart } from "../../store/cartSlice/CartSlice"

const PopularProducts = () => {

    const dispatch = useDispatch();

    const [openQuickViewModal, setOpenQuickViewModal] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const products = useSelector((state) => state.products.items);

    const navigate = useNavigate();

    return (
        <section className="section-padding">
            <div className="section-container">
                <div className="popular-products-header">
                    <h4>Popular Products</h4>
                </div>
                <div className="card-parent">
                    <Row gutter={[16, 16]}>
                        {products.slice(0, 10).map((item) => {
                            return (
                                <div className="card-sub-parent">
                                    <Col lg={6}>
                                        <Card
                                            hoverable
                                            className="product-card"
                                            onClick={() => navigate(`/productDetail/${item.id}`)}
                                            cover={
                                                <img className="product-card-image" src={item.thumbnail} />
                                            }
                                        >
                                            <div className="product-card-header">
                                                <p>{item.category}</p>
                                            </div>

                                            <h2 className="product-card-title">{item.title}</h2>

                                            <div className="product-review-section">
                                                <Rate className="review" allowHalf defaultValue={2.5} />
                                            </div>

                                            <div className="modal-footer">
                                                <p>${item.price}</p>
                                                <div>
                                                    <Button
                                                        className="add-to-cart-btn"
                                                        onClick={(e) => {
                                                            dispatch(addToCart(item))
                                                            e.stopPropagation()
                                                        }}
                                                    ><PlusOutlined className="add-cart-icon" /> Add</Button>
                                                </div>
                                            </div>

                                            <div className="icons-overlay">
                                                <div className="icons-main">
                                                    <Button onClick={(e) => {
                                                        e.stopPropagation()
                                                        setOpenQuickViewModal(true)
                                                    }} icon={<EyeOutlined />}></Button>

                                                    <Button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                        }}
                                                        icon={<IoGitCompare />}></Button>

                                                    <Button onClick={(e) => {
                                                        dispatch(addToCart(item))
                                                        dispatch(addToWishlist(item))
                                                        e.stopPropagation()
                                                    }} icon={<HeartOutlined />}></Button>
                                                </div>

                                            </div>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })}

                    </Row >
                </div>
            </div>

            <QuickViewModal
                isOpenQuickViewModal={openQuickViewModal}
                setIsOpenQuickViewModal={setOpenQuickViewModal}
            />

        </section>

    )
}

export default PopularProducts