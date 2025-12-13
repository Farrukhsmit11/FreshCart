import { Button, Card } from "antd"
import "./CardWrapper.css"
import { PlusOutlined } from "@ant-design/icons"
import { IoEyeOutline } from "react-icons/io5"
import { MdCompareArrows } from "react-icons/md"
import { IoMdHeartEmpty } from "react-icons/io"

const CardWrapper = ({ className, title = "", data = [] }) => {

  return (

    <div className="container">
      <div className="row g-4">
        <div className="card-wrapper-header">
          <h1 className="card-wrapper-title">Popular Products</h1>
        </div>

        {data.map((item, index) => {
          return (

            <div className="col">

              <Card
                className="product-card" key={index} hoverable>
                <div className="cards-content">

                  <img className="product-img" src={item.imgSrc} alt="product img" />

                  <p className="product-card-desc">{item.description}</p>

                  <h1 className="product-card-title">{item.title}</h1>


                  <div className="card-bottom-section" >

                    <div className="price-wrapper">

                      <span>{item.price}</span>

                    </div>

                    <div className="button-main">
                      <Button icon={<PlusOutlined />} className="add-to-cart-btn">{item.button}</Button>
                    </div>

                    <div className="icon-overlay">
                      <div className="icons-main">

                        <Button className="card-hover-button" icon={<IoEyeOutline className="card-hover-icon" />}></Button>

                        <Button className="card-hover-button" icon={<IoMdHeartEmpty className="card-hover-icon" />}></Button>

                        <Button className="card-hover-button" icon={<MdCompareArrows className="card-hover-icon" />}></Button>

                      </div>
                    </div>

                  </div>
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default CardWrapper