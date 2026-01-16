import { Col, Row } from 'antd'
import "./ProductView.css"
import { helper } from './helper'

const ProductView = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24}>
                {helper.map((item) => {
                    return (
                        <div className='product-view-content'>
                            <h3 className='product-view-title'>{item.title}</h3>
                            <p className='product-view-description'>{item.description}</p>
                        </div>
                    )
                })}
            </Col>
        </Row>
    )
}

export default ProductView