import { Button, Card, Col, Rate, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import "./ShopProducts.css"
import { IoEyeOutline } from 'react-icons/io5'
import { BsHeart } from 'react-icons/bs'
import { IoIosGitCompare } from 'react-icons/io'
import { useState } from 'react'
import QuickViewModal from '../quickViewModal/QuickViewModal'

const ShopProducts = ({ limit = "10" }) => {

    const products = useSelector((state) => state.products.items);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [openViewModal, setOpenViewModal] = useState(false);
    const [selectedProduct, setselectedProduct] = useState(false)


    return (
        <>
            <div className='shop-card-parent'>
                <Row gutter={[16, 16]} >
                    {products.slice(0, limit).map((item) => (
                        <Col xs={12} sm={12} md={8} lg={6} key={item.id}>
                            <Card
                                hoverable
                                className="shop-product-card"
                                onClick={() => navigate(`/productDetail/${item.id}`)}
                                cover={
                                    <img className="product-card-image" src={item.thumbnail} alt={item.title} />
                                }
                            >
                                <div className="product-card-header">
                                    <p>{item.category}</p>
                                </div>
                                
                                <h2 className='product-card-title'>{item.title}</h2>

                                <div className="product-review-section">
                                    <Rate allowHalf defaultValue={item.rating || 3} className='product-rating' />
                                </div>

                                <div className="product-card-footer">
                                    <p>${item.price}</p>

                                    <Button
                                        className='add-to-cart-btn'
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            dispatch(addToCart(item))
                                        }}
                                    >
                                        <PlusOutlined /> Add
                                    </Button>
                                </div>

                                <div className="icons-overlay">
                                    <div className="icons-main">

                                        <Button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setOpenViewModal(true)
                                                setselectedProduct(item)
                                            }}

                                            icon={<IoEyeOutline />}
                                            className="card-action-btn"
                                        >
                                        </Button>

                                        <Button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                            }}

                                            icon={<IoIosGitCompare />}
                                            className="card-action-btn"
                                        >
                                        </Button>

                                        <Button onClick={(e) => {
                                            dispatch(addToWishlist(item))
                                            e.stopPropagation()
                                        }}
                                            icon={<BsHeart />}
                                            className="card-action-btn"
                                        >
                                        </Button>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>


            <QuickViewModal
                product={selectedProduct}
                IsOpenViewModal={openViewModal}
                setIsOpenViewModal={setOpenViewModal}
            />
        </>
    )
}

export default ShopProducts