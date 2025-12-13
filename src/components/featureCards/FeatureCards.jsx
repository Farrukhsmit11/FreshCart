import "./FeatureCards.css"
import helper from "./helper"

const FeatureCards = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="feature-main">
                        {helper.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6">
                                    <div key={index} className="feature-card1">

                                        <div className="feature-card-content">
                                            <div className="icon-main">
                                                {item.icon}
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p className="feature-card-desc">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FeatureCards