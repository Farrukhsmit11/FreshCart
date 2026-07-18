import { Alert, Button, Col, Drawer, InputNumber, Result, Row } from "antd";
import "./CartDrawer.css";
import { LuTrash2 } from "react-icons/lu";

const CartDrawer = ({ isOpenCartDrawer, setIsOpenCartDrawer }) => {
    return (
        <Drawer
            width={560}
            open={isOpenCartDrawer}
            onClose={() => setIsOpenCartDrawer(false)}
            className="products-drawer"
            title={
                <span>
                    <h1 className="drawer-title">Shop Cart</h1>
                    <p className="products-drawer-desc">
                        Location in 382480
                    </p>
                </span>
            }
        >
            {/* Cart Item */}

            <Alert
                className="free-delivery-alert"
                type="success"
                title={
                    <span className="alert-content">
                        You’ve got FREE delivery. Start shopping!
                        <a href="#" className="checkout-now-link">
                            Checkout Now
                        </a>
                    </span>
                }
            />

            <ul className="list-main">
                <li className="list-item">
                    <div className="list-item-group-main">
                        <Row gutter={[16, 16]} align="middle">
                            <Col lg={12} md={6} span={6}>
                                <div className="list-item-content">
                                    <img
                                        src="https://dummyjson.com/image/300x300"
                                        alt="Product"
                                        className="cart-drawer-image"
                                    />

                                    <div className="list-item-right">
                                        <h6>Product Name</h6>

                                        <div className="delete-main">
                                            <a href="#" className="remove-btn">
                                                <LuTrash2 className="delete-icon" />
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={10}>
                                <InputNumber
                                    min={1}
                                    max={10}
                                    defaultValue={1}
                                    className="input-spinner"
                                />
                            </Col>

                            <span>$99.99</span>
                        </Row>
                    </div>
                </li>
            </ul>

            <div className="cart-drawer-buttons-main">
                <Button className="continue-shopping-btn">
                    Continue Shopping
                </Button>

                <Button className="proceed-to-checkout-btn">
                    Proceed to Checkout
                </Button>
            </div>
        </Drawer>
    );
};

export default CartDrawer;