import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { LuMapPin, LuShoppingBag } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { FiClock } from "react-icons/fi";

export const data = [
    {
        key: "2",
        label: <div className="collapse-content">
            <FiClock className="collapse-icon" />
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
                <div className="delivery-instructions">
                    <Form layout="vertical">
                        <Form.Item label="Delivery Instructions">
                            <TextArea />
                        </Form.Item>
                    </Form>
                </div>
            </>
    },

    {
        key: '4',
        label: <div className="collapse-content">
            <MdOutlinePayment className="collapse-icon" />
            Payment Methods
        </div>
    }

    // {
    //     key: '4',
    //     label: <div className="collapse-content">
    //         <MdOutlinePayment className="collapse-icon" />
    //         Payment Methods
    //     </div>,

    //     children:
    //         <Form layout="vertical">
    //             <Radio.Group
    //             >
    //                 <div className="payment-card-main">
    //                     <Card className="payment-method-card">
    //                         <Radio value={4}>
    //                             <h5 className="payment-card-radio-title">Payment with Paypal</h5>
    //                             <p className="payment-card-description">You will be redirected to PayPal website to complete your purchase securely.</p>
    //                         </Radio>
    //                     </Card>

    //                     <Card className="payment-method-card">
    //                         <div className="radio-select">
    //                             <Radio value={4}>
    //                                 <h5 className="payment-card-radio-title">Credit / Debit Card</h5>
    //                                 <p className="payment-card-description">Safe money transfer using your bank accou k account. We support Mastercard tercard, Visa, Discover and Stripe.</p>
    //                             </Radio>
    //                         </div>

    //                         <Form.Item
    //                             label="Card Number"
    //                             className="input-main"
    //                         >
    //                             <Input
    //                                 className="card-detail-input"
    //                                 type="text"
    //                                 placeholder="123 4567 6789 4321" />
    //                         </Form.Item>

    //                         <div className="fields-main">
    //                             <Form.Item label="Name on Card">
    //                                 <Input
    //                                     className="card-detail-input"
    //                                     type="text"
    //                                     placeholder="Enter your first Name" />
    //                             </Form.Item>

    //                             <Form.Item label="Expiry Date">
    //                                 <DatePicker className="card-detail-input" onChange={onChange} />
    //                             </Form.Item>

    //                             <Form.Item label="CVV Code">
    //                                 <Input
    //                                     className="card-detail-input"
    //                                     type="text"
    //                                     placeholder="xxx" />
    //                             </Form.Item>
    //                         </div>
    //                     </Card>


    //                     <Card
    //                     >
    //                         <Radio className="radio-card">
    //                             <div>
    //                                 <h5>Pay with Pioneer</h5>
    //                                 <p>You will be redirected to Payoneer website to complete your purchase securely.</p>
    //                             </div>

    //                         </Radio>

    //                     </Card>

    //                     <Card
    //                     >
    //                         <Radio className="radio-card">
    //                             <div>
    //                                 <h5>Cash on Delivery</h5>
    //                                 <p>Pay with cash when your order is delivered..</p>
    //                             </div>

    //                         </Radio>

    //                     </Card>

    //                     <div className="card-footer-buttons">
    //                         <Button className="previous-btn">Prev</Button>
    //                         <Button className="place-order-btn">Place Order</Button>
    //                     </div>
    //                 </div>
    //             </Radio.Group>
    //         </Form>
    // },
];

export default data