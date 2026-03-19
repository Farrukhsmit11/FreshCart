import { Card, Col, Radio, Row } from 'antd'
import "./AddDeliveryAddress.css"

const AddDeliveryAddress = () => {

    const address = [
        {
            id: 1,
            name: "Home",
            location: `Jitu Chauhan
4450 North Avenue Oakland,
Nebraska United States
402-776-1106`
        },
        {
            id: 2,
            name: "Office",
            location: `Nitu Chauhan
3853 Coal Road, Tannersville
Pennsylvania 18372 United States
402-776-1106`
        }
    ]

    return (
        <div className='delivery-address-main'>
            <Radio.Group style={{ width: "100%" }}>
                <Row gutter={[16, 16]}>
                    {address.map((item) => (
                        <Col lg={6} md={12} key={item.id}>
                            <Card className="address-card">
                                <Radio value={item.id} className="card-radio" />

                                <span className='radio-card-check'>{item.name}</span>
                                <p className='address-location'>{item.location}</p>
                                <span className='card-links'>Default Address</span>

                                <div className='card-actions'>
                                    <a className='edit-link'> Edit</a>
                                    <a className='delete-link'>Delete</a>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Radio.Group>
        </div >
    )
}

export default AddDeliveryAddress