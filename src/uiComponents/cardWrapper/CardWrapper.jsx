import { Button, Card, Rate } from "antd"
import "./CardWrapper.css"
import { PlusOutlined } from "@ant-design/icons"
import { IoEyeOutline } from "react-icons/io5"
import { MdCompareArrows } from "react-icons/md"
import { IoMdHeartEmpty } from "react-icons/io"
import { useState } from "react"

const CardWrapper = ({ className, title = "", data = [] }) => {
  const [value, setValue] = useState(false);

  const desc = [
    'terrible',
    { placement: 'top', title: 'bad', trigger: 'hover' },
    'normal',
    'good',
    'wonderful',
  ];
  function getDescTitle(value, desc) {
    const item = desc?.[value - 1];
    return typeof item === 'object' ? item.title : item;
  }

  return (
    <div className={className ? `best-sell-cards` : `card-wrapper-main`}>
      <div className="container">
        <div className="row g-4 ">
          {/* <div className="card-wrapper-header">
          <h1 className="card-wrapper-title">Popular Products</h1>
        </div> */}

          {data.map((item, index) => {
            return (

              <div className="col" key={index}>

                <Card
                  className="product-card" hoverable>
                  <div className="cards-content">

                    <img className="img-fluid" src={item.imgSrc} alt="product img" />

                    <p className="product-card-desc">{item.description}</p>

                    <h1 className="product-card-title">{item.title}</h1>

                    <Rate className="product-rate" tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span>{getDescTitle(value, desc)}</span> : null}


                    <div className="card-bottom-section" >
                      <div className="price-wrapper">
                        <span>{item.price}</span>
                      </div>


                      <div className="button-main">
                        <Button htmlType="submit" icon={<PlusOutlined />} className="add-to-cart-btn">{item.button}</Button>
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
    </div>

  )
}

export default CardWrapper