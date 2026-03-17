import { Button, Card, Col, DatePicker, Form, Input, Radio, Row } from 'antd'
import { useState } from 'react'
import "./PaymentMethod.css"

const PaymentMethod = () => {
    const [value, setValue] = useState(2);
    return (
        <Radio.Group
            onChange={(e) => {
                setValue(e.target.value)
            }}
            value={value}
        >

            <div className="payment-card-main">

                <Card className="payment-cards">
                    <Radio value={1}>
                        <div className="payment-card-content">
                            <h5>Payment with Paypal</h5>
                            <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                        </div>
                    </Radio>
                </Card>

                <Card className="payment-cards">
                    <Radio value={2}>
                        <div className="payment-card-content">
                            <h5>Credit / Debit Card</h5>

                            <p>
                                Safe money transfer using your bank account. We support Mastercard, Visa, Discover and Stripe.
                            </p>
                        </div>

                    </Radio>

                    <Form layout="vertical">
                        <Row gutter={[10]}>
                            <Col span={24}>
                                <Form.Item label={<span className="checkout-input-label">Card Number</span>}>
                                    <Input placeholder="1234 4567 6789 4321" className="checkout-input"></Input>
                                </Form.Item>
                            </Col>

                            <Col span={10}>
                                <Form.Item label={<span className="checkout-input-label">Name on Card</span>}>
                                    <Input placeholder="Enter your first Name" className="checkout-input"></Input>
                                </Form.Item>
                            </Col>

                            <Col span={6}>
                                <Form.Item label={<span className="checkout-input-label">Expiry Date</span>}>
                                    <DatePicker className="checkout-input" />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item label={<span className="checkout-input-label">Cvv Code</span>}>
                                    <Input type="number" className="checkout-input" placeholder="xxxx"></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>

                <Card className="payment-cards">
                    <Radio value={3}>
                        <div className="payment-card-content">
                            <h5>Pay with Payoneer</h5>
                            <p>
                                You will be redirected to Payoneer website to complete your purchase
                                securely.
                            </p>
                        </div>
                    </Radio>
                </Card>

                <Card className="payment-cards">
                    <Radio value={4}>
                        <div className="payment-card-content">
                            <h5>Cash on Delivery</h5>
                            <p>
                                Pay with cash when your order is delivered.
                            </p>
                        </div>
                    </Radio>
                </Card>

                <div className="payment-method-actions">
                    <Button className='prev-btn'>Prev</Button>
                    <Button className='place-order-btn'>Place Order</Button>
                </div>
            </div>
        </Radio.Group >
    )
}

export default PaymentMethod