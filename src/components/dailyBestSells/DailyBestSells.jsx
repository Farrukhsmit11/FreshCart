import { Button, Card, Rate } from "antd"
import "./DailyBestSells.css"
import { IoIosArrowRoundForward } from "react-icons/io"
import { sells } from "./sells"
import { addToCart } from "../../store/cartSlice/CartSlice"
import { EyeOutlined, HeartOutlined, PlusOutlined, } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { IoGitCompare } from "react-icons/io5"

const DailyBestSells = () => {

    const dispatch = useDispatch();

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="daily-best-sell-header">
                        <h3 className="card-header-title">Daily Best Sells</h3>
                    </div>

                    <div className="coffee-card-image-main">
                        <div className="coffee-card-content">
                            <h1 className="coffee-card-title">100% Organic Coffee Beans.</h1>
                            <p className="coffee-card-subtitle">Get the best deal before close.</p>
                            <Button icon={<IoIosArrowRoundForward className="arrow-right-icon" />} className="shop-now-btn-green">Shop Now</Button>
                        </div>
                    </div>


                    {sells.map((item) => {
                        return (
                            <div className="col">
                                <Card
                                    hoverable
                                    className="daily-best-sell-card"
                                >

                                    <div className="daily-sell-header">
                                        <img src={item.imgSrc} />
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
                                            <Button icon={<EyeOutlined />}></Button>
                                            <Button icon={<IoGitCompare />}></Button>
                                            <Button icon={<HeartOutlined />}></Button>
                                        </div>

                                    </div>

                                </Card>

                            </div>


                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default DailyBestSells