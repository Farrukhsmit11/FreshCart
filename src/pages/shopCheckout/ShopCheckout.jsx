import { Breadcrumb, Button, Card, Col, Collapse, Row, } from "antd"
import "./ShopCheckout.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import DeliveryModal from "../../components/deliveryModal/DeliveryModal";
import DeliveryInstructions from "./deliveryInstructions/DeliveryInstructions";
import PaymentMethod from "./paymentMethod/PaymentMethod"
import AddDeliveryAddress from "./addDeliveryAddress/AddDeliveryAddress";
import DeliveryTime from "./deliveryTime/DeliveryTime"
import { LuMapPin, LuShoppingBag } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";

const ShopCheckout = () => {

    const navigate = useNavigate();

    const [openDeliveryModal, setOpenDeliveryModal] = useState(false);

    const items = [
        {
            key: 1,
            label: (
                <>

                    <div className="collapse-main">
                        <div className="collapse-content">
                            <LuMapPin className="collapse-icon" />
                            <span>Add Delivery Address</span>
                        </div>

                        <Button
                            className="add-delivery-btn"
                            onClick={(e) => {
                                e.stopPropagation()
                                setOpenDeliveryModal(true)
                            }}
                        >add delivery address</Button>
                    </div>


                </>

            ),
            children: <AddDeliveryAddress />,
        },

        {
            key: 2,
            label: (
                <div className="collapse-content">
                    <FiClock className="collapse-icon" />  Delivery Time
                </div>
            ),
            children: <DeliveryTime />
        },

        {
            key: 3,
            label: (
                <div className="collapse-content">
                    <LuShoppingBag className="collapse-icon" />
                    Delivery Instructions
                </div>
            ),
            children: <DeliveryInstructions />
        },

        {
            key: 4,
            label: (
                <div className="collapse-content">
                    <MdOutlinePayment className="collapse-icon" /> Payment Method
                </div>
            ),
            children: <PaymentMethod />
        }
    ]

    return (

        <div className='section-container'>
            <div className='main'>
                <Row gutter={[16, 16]}>
                    <Col flex={1}>
                        <Breadcrumb
                            className="page-links-main"
                            items={[
                                {
                                    title: <a className="page-links" onClick={() => navigate("/")} href="#">Home</a>
                                },

                                {
                                    title: <a className="page-links" onClick={() => navigate("shop/shopId")} href="#">Shop</a>
                                }
                            ]}
                        >
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>

            <section className="checkout-section">
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div className="checkout-heading-main">
                            <h1>Checkout</h1>
                            <p>Already have an account? Click here to Sign in.
                                <a href="#" onClick={() => navigate("/signIn")}>Sign In</a>
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Collapse
                        className="custom-collapse"
                        accordion
                        defaultActiveKey={['1']}
                        ghost
                        items={items}
                    />

                </Row>
            </section>

            <DeliveryModal
                IsOpenDeliveryModal={openDeliveryModal}
                setIsOpenDeliveryModal={setOpenDeliveryModal} />
        </div>
    )
}

export default ShopCheckout