
import { Button, Col, Row } from "antd"
import { shop } from "./shop"
import "./ShopNowCards.css"

const ShopNowCards = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <Row gutter={[16, 16]}>
          {shop.map((items, index) => {
            return (
              <>
                <Col span={12} key={index}>
                  <div className="shop-now-card">
                    <img className="shop-now-card-image" src={items.imgSrc} />

                    <div className="product-details-content">
                      <h4>{items.title}</h4>
                      <p>{items.description}</p>

                      <Button className="shop-now-btn">Shop Now</Button>
                    </div>

                  </div>

                </Col>


              </>

            )
          })}
        </Row>


      </div>
    </section>


  )
}

export default ShopNowCards