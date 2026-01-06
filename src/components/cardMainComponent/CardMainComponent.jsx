import { Button, Card, Col, Rate, Row } from "antd"
import "./CardMainComponent.css"
import { EyeOutlined, HeartOutlined, PlusOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice/CartSlice"
import { IoGitCompare } from "react-icons/io5"
import { addToWishlist } from "../../store/wishlistSlice/WishlistSlice"
import QuickViewModal from "../quickViewModal/QuickViewModal"
import { useState } from "react"

const CardMainComponent = ({ data = [] }) => {

    const [openQuickViewModal, setOpenQuickViewModal] = useState(false);

    const dispatch = useDispatch();

    return (
        <div className="section-container">
            <Row gutter={[16, 16]}>
                {data.slice(0 , 10).map((item) => {
                    return (
                        <Col flex={1}>
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
                                        <Button onClick={() => setOpenQuickViewModal(true)} icon={<EyeOutlined />}></Button>
                                        <Button icon={<IoGitCompare />}></Button>
                                        <Button onClick={() => dispatch((addToWishlist(item)))} icon={<HeartOutlined />}></Button>
                                    </div>

                                </div>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

            <QuickViewModal
                isOpenQuickViewModal={openQuickViewModal}
                setIsOpenQuickViewModal={setOpenQuickViewModal}
            />
        </div>


    )
}

export default CardMainComponent