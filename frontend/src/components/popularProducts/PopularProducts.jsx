import "./PopularProducts.css"
import { Button, Card, Col, Row } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProducts } from "../../store/products/productThunk"

const PopularProducts = () => {

    const dispatch = useDispatch()

    const fetchProducts = async () => {
        try {
            await dispatch(getProducts())
        } catch (error) {
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <section className="section-padding">
                <div className="section-container">
                    <div className="popular-products-header">
                        <h4>Popular Products</h4>
                    </div>
                    <div className="card-parent">
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={12} md={12} lg={6}>
                                <Card
                                    hoverable
                                    className="product-card"
                                >
                                    <div className="product-card-footer">
                                        <Button
                                            className="add-to-cart-btn"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                            }}
                                        ><PlusOutlined className="add-cart-icon" /> Add Product</Button>
                                    </div>
                                </Card>
                            </Col>
                        </Row >
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularProducts