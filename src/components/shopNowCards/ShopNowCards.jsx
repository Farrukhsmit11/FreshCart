
import { Button, Col, Row } from "antd"
import { shop } from "./shop"
import "./ShopNowCards.css"
import { useNavigate } from "react-router-dom"

const ShopNowCards = () => {

  const navigate = useNavigate()

  return (
    <section className="section-padding">
      <div className="section-container">
        <Row gutter={[16, 16]}>
          {shop.map((items, index) => {
            return (
              <>
                <Col xs={24} sm={12} lg={10} md={24} key={index}>
                  <img className="shop-now-card-image" src={items.imgSrc} />

                  <div className="product-details-content">
                    <h4>{items.title}</h4>
                    <p>{items.description}</p>

                    <Button
                      onClick={() =>
                        navigate(`shop/${items.id}`)} className="shop-now-btn">Shop Now</Button>
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