
import { Col, Row } from "antd"
import { shop } from "./shop"
import "./ShopNowCards.css"

const ShopNowCards = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <Row gutter={[16, 16]}>
          {shop.map((items) => {
            return (
              <Col xs={24} sm={24} md={6}>
                <img className="shop-now-card-image" src={items.imgSrc} />
              </Col>

            )
          })}
        </Row>


      </div>
    </section>


  )
}

export default ShopNowCards