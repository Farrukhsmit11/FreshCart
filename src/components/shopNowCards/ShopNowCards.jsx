import { Button } from "antd"
import "./ShopNowCards.css"
import {shopNowData} from "./shopNowData"

const ShopNowCards = () => {
  return (
    <section className="section-padding">

      <div className="container">

        <div className="row">
          <div className="shop-now-wrapper">

            {shopNowData.map((card, index) => {
              return (
                <div key={index} className="cards-main col-md-6 col-12 mb-lg-0">
                  <img className="banner-img" src={card.imgSrc} />

                  <div className="product-details-content">

                    <h4 className="">{card.title}</h4>

                    <p>{card.description}</p>

                    <Button className="shop-now-btn">Shop Now</Button>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopNowCards