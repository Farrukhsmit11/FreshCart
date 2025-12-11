import { Button, Card } from "antd"
import "./PopularCards.css"
import { PlusOutlined } from "@ant-design/icons"
import { products } from "./products"

const PopularCards = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="card-wrapper-header">
          <h1>Popular Products</h1>
          <h1 className="card-wrapper-title">{products.title}</h1>
        </div>

        <div className="cards-container">

          {products.map((item, index) => {
            return (

              <Card
                className="product-card" key={index} hoverable>
                <div className="cards-content">

                  <img src={item.imgSrc} alt="product img" />

                  <p className="product-card-desc">{item.description}</p>

                  <h1 className="product-card-title">{item.title}</h1>

                  <div className="card-bottom-section" >

                    <div className="price-wrapper">
                      <span>{item.price}</span>
                    </div>

                    <div className="button-main">
                      <Button icon={<PlusOutlined />} className="add-to-cart-btn">{item.button}</Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default PopularCards