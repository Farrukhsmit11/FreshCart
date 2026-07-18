import { useEffect, useState } from "react"
import "./PopularProducts.css"
import { Button, Card, Col, Rate, Row, Tag } from "antd"
import { useNavigate } from "react-router-dom"
import { PlusOutlined } from "@ant-design/icons"
import { IoEyeOutline, IoGitCompare } from "react-icons/io5"
import { BsHeart } from "react-icons/bs"
import { IoIosGitCompare } from "react-icons/io"
import QuickViewModal from "../quickViewModal/QuickViewModal"

const PopularProducts = () => {

    const [openViewModal, setOpenViewModal] = useState(false);

    return (
        <>
            <section className="section-padding">
                <div className="section-container">
                    <div className="popular-products-header">
                        <h4>Popular Products</h4>
                    </div>
                    <div className="card-parent">
                        <Row gutter={[16, 16]}>

                            <div>
                                <Col xs={24} sm={12} md={12} lg={6}>
                                    <Card
                                        hoverable
                                        className="product-card"
                                    >
                                        <div className="product-card-header">
                                        </div>

                                        <div className="product-review-section">
                                            <Rate
                                                className="review" allowHalf defaultValue={2.5} />
                                        </div>

                                        <div className="product-card-footer">
                                            <Button
                                                className="add-to-cart-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                }}
                                            ><PlusOutlined className="add-cart-icon" /> Add</Button>
                                        </div>

                                        <div className="icons-overlay">
                                            <div className="icons-main">

                                                <Button
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                    }}

                                                    icon={<IoEyeOutline />}
                                                    className="card-action-btn"
                                                >
                                                </Button>

                                                <a href="#">
                                                    <Button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                        }}

                                                        icon={<IoIosGitCompare />}
                                                        className="card-action-btn"
                                                    >
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </div>
                        </Row >
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularProducts