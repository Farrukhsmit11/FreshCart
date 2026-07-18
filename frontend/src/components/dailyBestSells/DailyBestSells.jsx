import { Button, Card, Col, Rate, Row, Statistic } from "antd"
import "./DailyBestSells.css"
import { IoIosArrowRoundForward, IoIosGitCompare } from "react-icons/io"
import { PlusOutlined, } from "@ant-design/icons"
import { BsHeart } from "react-icons/bs"
import { IoEyeOutline } from "react-icons/io5"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const DailyBestSells = () => {

    const [deadline, setDeadline] = useState(Date.now() + 1000 * 38);

    const navigate = useNavigate();

    return (
        <>
            <section className="section-padding">
                <div className="section-container">
                    <Row gutter={[16, 16]}>
                        <Col xs={24}>
                            <div className="daily-best-sell-header">
                                <h3 className="card-header-title">Daily Best Sells</h3>
                            </div>
                        </Col>

                        <div className="coffee-card-image-main">
                            <div className="coffee-card-content">
                                <h1 className="coffee-card-title">100% Organic Coffee Beans.</h1>
                                <p className="coffee-card-subtitle">Get the best deal before close.</p>
                                <Button
                                    onClick={() => navigate("/shop/:shopId")}
                                    icon={<IoIosArrowRoundForward className="arrow-right-icon" />} className="shop-now-btn-green"
                                >Shop Now</Button>
                            </div>
                        </div>

                        return (
                        <Col xs={24} md={6}>
                            <Card
                                hoverable
                                className="daily-best-sell-card"
                            >

                                <div className="image-main">
                                    {/* <img src={item.thumbnail} /> */}
                                </div>

                                <div className="deals-content">
                                    {/* <p>{item.category}</p> */}
                                    {/* <h2>{item.title}</h2> */}
                                </div>

                                <div className="price-section">
                                    {/* ${item.price} */}
                                    <Rate className="review" allowHalf defaultValue={2.5} />
                                </div>

                                <div className="actions">
                                    <Button
                                        // onClick={() => dispatch(addToCart(item))}
                                        icon={<PlusOutlined />}
                                        className="add-sell-btn"
                                    >Add to cart</Button>
                                </div>

                                <div className="countdown-cards-main">
                                    {/* {days.map((day) => { */}
                                        {/* return ( */}
                                            <div className="countdown-item">
                                                <div className="countdown-content">
                                                    {/* <span className="countdown-amount">{day.value}</span> */}
                                                    {/* <span className="countdown-period">{day.label}</span> */}
                                                </div>
                                            </div>
                                        {/* ) */}
                                    {/* })} */}

                                    <div className="countdown-item">
                                        <div className="countdown-content">
                                          
                                            <span className="countdown-period">Sec</span>
                                        </div>
                                    </div>


                                    <div className="icons-overlay">
                                        <div className="icons-main">

                                            <Button
                                                onClick={(e) => {
                                                    setOpenViewModal(true)
                                                    e.stopPropagation()
                                                    console.log(item)
                                                    setSelectedData(item)
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
                    </Row>
                </div>
            </section >
        </>

    )
}

export default DailyBestSells