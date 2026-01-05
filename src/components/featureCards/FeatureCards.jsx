import { Col, Row } from "antd"
import "./FeatureCards.css"
import helper from "./helper"

const FeatureCards = () => {
    return (
        <section className="section-padding">
            <div className="section-container">
                <Row gutter={[16 , 16]}>
                    <div className="feature-main">
                        {helper.map((item, index) => {
                            return (
                                <Col span={6}>
                                    <div key={index} className="feature-card1">

                                        <div className="feature-card-content">
                                            <div className="icon-main">
                                                {item.icon}
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p className="feature-card-desc">{item.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </div>
                </Row>
            </div>
        </section >
    )
}

export default FeatureCards