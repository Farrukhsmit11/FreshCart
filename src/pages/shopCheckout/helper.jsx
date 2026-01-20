import { Button, Card, Col, DatePicker, Form, Input, Radio, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { LuClock, LuPin, LuShoppingBag } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

export const data = [

    {
        key: '2',
        label: <div className="collapse-content">
            <LuClock className="collapse-icon" />
            Delivery Time
        </div>
    },


    {
        key: '3',
        label: <div className="collapse-content">
            <LuShoppingBag className="collapse-icon" />
            Delivery Instructions
        </div>,

        children:
            <>
                <div className="instructions-main">
                    <h1>Delivery Instructions</h1>
                    <TextArea className="shipping-address-input" placeholder="Write delivery instructions" />
                    <p className="instructions-description">Add instructions for how you want your order shopped and/or delivered</p>
                </div>

                <div className="collapse-buttons-main">
                    <Button className="previous-btn">Prev</Button>
                    <Button className="next-btn">Next</Button>
                </div>
            </>
    },


    {
        key: '4',
        label: <div className="collapse-content">
            <MdOutlinePayment className="collapse-icon" />
            Payment Methods
        </div>,

        children:
            <Form layout="vertical">
                <Radio.Group>
                    <div className="payment-card-main">
                        <Card className="payment-method-card">
                            <Radio>
                                <h5 className="payment-card-radio-title">Payment with Paypal</h5>
                                <p className="payment-card-description">You will be redirected to PayPal website to complete your purchase securely.</p>
                            </Radio>
                        </Card>

                        <Card className="payment-method-card">
                            <div className="radio-select">
                                <Radio>
                                    <h5 className="payment-card-radio-title">Credit / Debit Card</h5>
                                    <p className="payment-card-description">Safe money transfer using your bank accou k account. We support Mastercard tercard, Visa, Discover and Stripe.</p>
                                </Radio>
                            </div>

                            <Form.Item
                                label="Card Number"
                                className="input-main"
                            >
                                <Input
                                    className="card-detail-input"
                                    type="text"
                                    placeholder="123 4567 6789 4321" />
                            </Form.Item>

                            <div className="fields-main">
                                <Form.Item label="Name on Card">
                                    <Input
                                        className="card-detail-input"
                                        type="text"
                                        placeholder="Enter your first Name" />
                                </Form.Item>

                                <Form.Item label="Expiry Date">
                                    <DatePicker className="card-detail-input" onChange={onChange} />
                                </Form.Item>

                                <Form.Item label="CVV Code">
                                    <Input
                                        className="card-detail-input"
                                        type="text"
                                        placeholder="xxx" />
                                </Form.Item>
                            </div>
                        </Card>


                        <Card
                        >
                            <Radio className="radio-card">
                                <div>
                                    <h5>Pay with Pioneer</h5>
                                    <p>You will be redirected to Payoneer website to complete your purchase securely.</p>
                                </div>

                            </Radio>

                        </Card>

                        <Card
                        >
                            <Radio className="radio-card">
                                <div>
                                    <h5>Cash on Delivery</h5>
                                    <p>Pay with cash when your order is delivered..</p>
                                </div>

                            </Radio>

                        </Card>

                        <div className="card-footer-buttons">
                            <Button className="previous-btn">Prev</Button>
                            <Button className="place-order-btn">Place Order</Button>
                        </div>

                    </div>
                </Radio.Group>

            </Form>


    },
];

export default data