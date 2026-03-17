import { Button, Col, List, Radio, Row, Tag } from 'antd'

const DeliverySlots = () => {
    const deliverySlots = [
        {
            id: 1,
            time: "Within 2 Hours",
            price: "$4.00",
            type: "paid",
        },
        {
            id: 2,
            time: "Within 3 Hours",
            price: "$3.50",
            type: "paid",
        },
        {
            id: 3,
            time: "1pm - 2pm",
            price: "$0.00",
            type: "free",
        },
        {
            id: 4,
            time: "2pm - 3pm",
            price: "$3.99",
            type: "paid",
        },
        {
            id: 5,
            time: "3pm - 4pm",
            price: "$3.99",
            type: "paid",
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
                                <Row align="middle" justify="space-between">
                                    {/* <Row align="middle" justify="space-between"> */}
                                        <Col span={8}>
                                            <Radio value={item.id}>
                                                <Col>
                                                    {item.time}
                                                </Col>

                                            </Radio>
                                        </Col>

                                        <Col span={4}>
                                            {item.price}
                                        </Col>
                                    </Row>
                            </List.Item>
                        )
                        }
                    />
                </Radio.Group>
            </div>
        </div>
    )
}

export default DeliverySlots