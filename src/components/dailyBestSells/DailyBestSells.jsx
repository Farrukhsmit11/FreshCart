import { Button, Card } from "antd"
import "./DailyBestSells.css"
import { IoIosArrowRoundForward } from "react-icons/io"
// import { data } from "./data"

const DailyBestSells = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="daily-best-sells-main">
                        <div className="header">
                            <h1>Daily Best Sells</h1>
                        </div>

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