import { Button, Col, List, Radio, Row, Tag } from 'antd'
import "./DeliverySlots.css"

const DeliverySlots = () => {
    const deliverySlots = [
        {
            id: 1,
            time: "Within 2 Hours",
            price: "$4.00",
            type: "Paid",
        },
        {
            id: 2,
            time: "Within 3 Hours",
            price: "$3.50",
            type: "Paid",
        },
        {
            id: 3,
            time: "1pm - 2pm",
            price: "$0.00",
            type: "Free",
        },
        {
            id: 4,
            time: "2pm - 3pm",
            price: "$3.99",
            type: "Paid",
        },
        {
            id: 5,
            time: "3pm - 4pm",
            price: "$3.99",
            type: "Paid",
        },
    ];

    return (
        <div className='delivery-slots-main'>
            <div className="tab-content">
                <Radio.Group style={{ width: "100%" }}>
                    <List
                        className="demo-loadmore-list"
                        style={{ width: "100%" }}
                        itemLayout="horizontal"
                        dataSource={deliverySlots}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <Row align="middle" style={{ width: "100%" }}>

                                    <Col span={11}>
                                        <Radio value={item.id}>
                                            {item.time}
                                        </Radio>
                                    </Col>

                                    <Col span={5}>
                                        {item.price}
                                    </Col>

                                    <Col span={5}>
                                        <Tag className='status-tag'>{item.type}</Tag>
                                    </Col>

                                    <Col span={1}>
                                        <Button className='choose-button'>Choose</Button>
                                    </Col>
                                </Row>
                            </List.Item>
                        )
                        }
                    />

                    <div className="time-actions">
                        <Button className='prev-btn'>Prev</Button>
                        <Button className='time-next-btn'>Next</Button>
                    </div>
                </Radio.Group>
            </div>
        </div>
    )
}

export default DeliverySlots