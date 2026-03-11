import { Button, Card, Col, Rate, Row, Statistic } from "antd"
import "./DailyBestSells.css"
import { IoIosArrowRoundForward, IoIosGitCompare } from "react-icons/io"
import { sells } from "./sells"
import { addToCart } from "../../store/cartSlice/CartSlice"
import { PlusOutlined, } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { BsHeart } from "react-icons/bs"
import { IoEyeOutline } from "react-icons/io5"
import { addToWishlist } from "../../store/wishlistSlice/WishlistSlice"
import { useState } from "react"
import QuickViewModal from "../../components/quickViewModal/QuickViewModal"

const DailyBestSells = () => {

    const dispatch = useDispatch();

    const [deadline, setDeadline] = useState(Date.now() + 1000 * 38);

    const [openViewModal, setOpenViewModal] = useState(false)

    const { Countdown } = Statistic;

    const days = [
        {
            label: "Days",
            value: 998
        },

        {
            label: "Hours",
            value: 8
        },

        {
            label: "Mins",
            value: 48
        },
    ]

    const handleFinish = () => {
        setDeadline(Date.now() + 1000 * 38);
    }

    return (
        <>

            <section className="section-padding">
                <div className="section-container">
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <div className="daily-best-sell-header">
                                <h3 className="card-header-title">Daily Best Sells</h3>
                            </div>
                        </Col>

                        <div className="coffee-card-image-main">
                            <div className="coffee-card-content">
                                <h1 className="coffee-card-title">100% Organic Coffee Beans.</h1>
                                <p className="coffee-card-subtitle">Get the best deal before close.</p>
                                <Button icon={<IoIosArrowRoundForward className="arrow-right-icon" />} className="shop-now-btn-green">Shop Now</Button>
                            </div>
                        </div>

                        {sells.map((item) => {
                            return (
                                <Col xs={24} md={6}>
                                    <Card
                                        hoverable
                                        className="daily-best-sell-card"
                                    >

                                        <div className="image-main">
                                            <img src={item.thumbnail} />
                                        </div>

                                        <div className="deals-content">
                                            <p>{item.category}</p>
                                            <h2>{item.title}</h2>
                                        </div>

                                        <div className="price-section">
                                            ${item.price}
                                            <Rate className="review" allowHalf defaultValue={2.5} />
                                        </div>

                                        <div className="actions">
                                            <Button
                                                onClick={() => dispatch(addToCart(item))}
                                                icon={<PlusOutlined />}
                                                className="add-to-cart-btn"
                                            >Add to cart</Button>
                                        </div>

                                        <div className="countdown-cards-main">
                                            {days.map((day) => {
                                                return (
                                                    <div className="countdown-item">
                                                        <div className="countdown-content">
                                                            <span className="countdown-amount">{day.value}</span>
                                                            <span className="countdown-period">{day.label}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            <div className="countdown-item">
                                                <div className="countdown-content">
                                                    <Countdown
                                                        format="ss"
                                                        value={deadline}
                                                        className="timer-countdown"
                                                        onFinish={handleFinish}
                                                    />
                                                    <span className="countdown-period">Sec</span>
                                                </div>
                                            </div>


                                            <div className="icons-overlay">
                                                <div className="icons-main">

                                                    <Button
                                                        onClick={(e) => {
                                                            setOpenViewModal(true)
                                                            e.stopPropagation()
                                                        }}

                                                        icon={<IoEyeOutline />}
                                                        className="card-action-btn"
                                                    >

                                                    </Button>

                                                    <Button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                        }}

                                                        icon={<IoIosGitCompare />}
                                                        className="card-action-btn"
                                                    >

                                                    </Button>

                                                    <Button onClick={(e) => {
                                                        dispatch(addToWishlist(item))
                                                        e.stopPropagation()
                                                    }}
                                                        icon={<BsHeart />}
                                                        className="card-action-btn"
                                                    >

                                                    </Button>
                                                </div>

                                            </div>

                                        </div>
                                    </Card>

                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section >

            <QuickViewModal
                IsOpenViewModal={openViewModal}
                setIsOpenViewModal={setOpenViewModal} />
        </>

    )
}

export default DailyBestSells