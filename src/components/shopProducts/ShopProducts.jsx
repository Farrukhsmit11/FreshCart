import { Button, Card, Col, Rate, Row } from 'antd'
import { addToCart } from '../../store/cartSlice/CartSlice'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./ShopProducts.css"

const ShopProducts = ({ limit = "10" }) => {

    const products = useSelector((state) => state.products.items);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='shop-card-parent'>
            <Row gutter={[16, 16]} >
                {products.slice(0, limit).map((item) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                        <Card
                            hoverable
                            className="shop-product-card"
                            onClick={() => navigate(`/productDetail/${item.id}`)}
                            cover={
                                <img className="product-card-image" src={item.thumbnail} alt={item.title} />
                            }
                        >
                            <p>{item.category}</p>
                            <h2 className='product-card-title'>{item.title}</h2>

                            <div className="product-review-section">
                                <Rate allowHalf defaultValue={item.rating || 3} className='product-rating' />
                            </div>

                            <div className="modal-footer">
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
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ShopProducts