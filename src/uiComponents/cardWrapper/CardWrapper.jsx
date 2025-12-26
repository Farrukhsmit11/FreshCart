import { Button, Card, message, Rate } from "antd"
import "./CardWrapper.css"
import { EyeOutlined, HeartOutlined, PlusOutlined } from "@ant-design/icons"
import { IoGitCompareOutline } from "react-icons/io5"
import QuickViewModal from "../../components/quickViewModal/QuickViewModal"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/productSlice/ProductSlice"
import { addToCart } from "../../store/cartSlice/CartSlice"

const CardWrapper = ({ data = [], className, title = "" }) => {

  const [openQuickView, setopenQuickView] = useState(false);

  const [value, setValue] = useState(3);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  const products = useSelector((state) => state.products.items);

  return (
    <>
      <div className="container">
        <div className="row g-4">
          <div className="card-wrapper-header">
            <h1 className="card-wrapper-title">Popular Products</h1>
          </div>

          {products.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="cards-container">
                  <Card
                    className="product-card" hoverable>

                    <div className="cards-content">

                      <img className="img-fluid" src={item.thumbnail} alt="product img" />

                      <h1 className="product-card-title">{item.title}</h1>

                      <div className="card-bottom-section">

                        <span><Rate className="product-rate" onChange={setValue} value={value} /> </span>

                      </div>

                    </div>

                    <div className="icons-overlay">
                      <div className="icons-main">
                        <Button onClick={() => setopenQuickView(true)} className="card-hover-button" icon={<EyeOutlined />}></Button>
                        <Button className="card-hover-buttom" icon={<IoGitCompareOutline />}></Button>
                        <Button className="card-hover-button" icon={<HeartOutlined />}></Button>
                      </div>
                    </div>

                    <div className="button-main">
                      {item.price}
                      <Button
                        type="primary"
                        onClick={() => dispatch(addToCart(item))}
                        icon={<PlusOutlined />}
                        className="add-to-cart-btn" >Add</Button>
                    </div>

                  </Card>


                </div>

              </div>
            )
          })}

        </div>
      </div>

      <QuickViewModal
        isOpenQuickViewModal={openQuickView}
        setIsOpenQuickViewModal={setopenQuickView}
      />

    </>
  )
}

export default CardWrapper