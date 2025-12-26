import { Button, Card, Rate } from "antd"
import "./DailyBestSells.css"
import { IoIosArrowRoundForward } from "react-icons/io"
import { sells } from "./sells"
import CardWrapper from "../../uiComponents/cardWrapper/CardWrapper"

const DailyBestSells = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="coffee-card-image-main">
                            <div className="content">
                                <h1 className="coffee-card-title">100% Organic Coffee Beans.</h1>
                                <p className="coffee-card-subtitle">Get the best deal before close.</p>
                                <Button icon={<IoIosArrowRoundForward className="arrow-right-icon" />} className="shop-now-btn-green">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DailyBestSells