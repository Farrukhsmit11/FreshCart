import { Button, Card, Col, Rate, Row, Statistic } from "antd"
import "./DailyBestSells.css"
import { IoIosArrowRoundForward } from "react-icons/io"
import { sells } from "./sells"
import { addToCart } from "../../store/cartSlice/CartSlice"
import { EyeOutlined, HeartOutlined, PlusOutlined, } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { IoGitCompare } from "react-icons/io5"
import { addToWishlist } from "../../store/wishlistSlice/WishlistSlice"
import { useState } from "react"
import QuickViewModal from "../quickViewModal/QuickViewModal"

const DailyBestSells = () => {
    const [openQuickViewModal, setOpenQuickViewModal] = useState(false);
    const dispatch = useDispatch();

    return (
        <section className="section-padding">
            <div className="section-container">
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <div className="daily-best-sell-header">
                            <h3 className="card-header-title">Daily Best Sells</h3>
                        </div>
                    </Col>

                    <Col span={6}>
                        <div className="coffee-card-image-main">
                            <div className="coffee-card-content">
                                <h1 className="coffee-card-title">100% Organic Coffee Beans.</h1>
                                <p className="coffee-card-subtitle">Get the best deal before close.</p>
                                <Button icon={<IoIosArrowRoundForward className="arrow-right-icon" />} className="shop-now-btn-green">Shop Now</Button>
                            </div>
                        </div>
                    </Col>


                    {sells.map((item) => {
                        return (
                            <Col xs={24} md={6}>
                                <Card
                                    hoverable
                                    className="daily-best-sell-card"
                                >

                                    <div className="daily-sell-header">
                                        <img src={item.thumbnail} />
                                    </div>

                                    <div className="deals-content">
                                        <p>{item.category}</p>
                                        <h2>{item.title}</h2>
                                    </div>

                                    <div className="price-section">
                                        ${item.price}
                                        <Rate className="product-deals-rating" defaultValue={5} allowClear={false} />
                                    </div>

                                    <div className="actions">
                                        <Button
                                            onClick={() => dispatch(addToCart(item))}
                                            icon={<PlusOutlined />}
                                            className="add-to-cart-btn"
                                        >Add to cart</Button>
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
            </div>

            <QuickViewModal
                isOpenQuickViewModal={openQuickViewModal}
                setIsOpenQuickViewModal={setOpenQuickViewModal}
            />
        </section>
    )
}

export default DailyBestSells