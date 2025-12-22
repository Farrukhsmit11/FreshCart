import { Button, Card } from "antd"
import "./CardWrapper.css"
import { EyeOutlined, HeartOutlined, PlusOutlined, SettingOutlined } from "@ant-design/icons"
import { IoGitCompareOutline } from "react-icons/io5"
import QuickViewModal from "../../components/quickViewModal/QuickViewModal"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../../store/productSlice/ProductSlice"

const CardWrapper = ({ data = [], className }) => {

  const [openQuickView, setopenQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  
  return (
    <>
      <div className="container">
        <div className="row g-4">
          <div className="card-wrapper-header">
            <h1 className="card-wrapper-title">Popular Products</h1>
          </div>

          {data.map((item) => {
            return (

              <div className="col">
                <div className="cards-container">
                  <Card
                    className="product-card" hoverable>

                    <div className="cards-content">

                      <img className="img-fluid" src={item.imgSrc} alt="product img" />

                      <h1 className="product-card-title">{item.title}</h1>

                      <div className="card-bottom-section" >

                        <span>{item.price}</span>

                        <div className="button-main">
                          <Button icon={<PlusOutlined />} className="add-to-cart-btn">Add</Button>
                        </div>
                      </div>
                    </div>

                    <div className="icons-overlay">
                      <div className="icons-main">
                        <Button onClick={() => setopenQuickView(true)} className="card-hover-button" icon={<EyeOutlined />}></Button>
                        <Button className="card-hover-buttom" icon={<IoGitCompareOutline />}></Button>
                        <Button className="card-hover-button" icon={<HeartOutlined />}></Button>
                      </div>
                    </div>

                  </Card>

                </div>

              </div>

            )
          })}

        </div>
      </div>

      <QuickViewModal
        item={selectedProduct}
        isOpenQuickViewModal={openQuickView}
        setIsOpenQuickViewModal={setopenQuickView}
      />

    </>
  )
}

export default CardWrapper