
import { shop } from "./shop"
import "./ShopNowCards.css"
import { Button } from "antd"

const ShopNowCards = () => {
  return (
    <section className="section-padding">
      <div className="container px-0">
        <div className="row">

          {/* {shop.map((items) => {
            return (

              <div className="col">

                <div className="shop-card">

                  <img src={items.imgSrc} />
                </div>

                <div>
                  <h3>{items.title}</h3>

                  <p>{items.description}</p>
                </div>

                <Button className="shop-now-btn">Shop Now</Button>
              </div>
            )
          })} */}

        </div>
      </div>
    </section>

  )
}

export default ShopNowCards