import { Breadcrumb, Button, Card, Checkbox, Col, Collapse, Form, Input, Modal, Radio, Row, Select } from "antd"
import "./ShopCheckout.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { Form as AntForm } from "antd"
import { LuMapPin } from "react-icons/lu";
import { data } from "./helper";

const ShopCheckout = () => {

    const navigate = useNavigate();

    const [openDeliveryModal, setOpenDeliveryModal] = useState(false);

    const [form] = AntForm.useForm();


    const countries = [

        { label: "India", value: "India" },

        { value: "UAE" },

        { label: "Uk", value: "UK" },

        { label: "Usa", value: "USA" },
    ]

    const places = [
        {
            label: "Northern Ireland",
            value: "northern-ireland"
        },

        {
            label: "Gujrat",
            value: "Gujrat"
        },

        {
            label: "Alaska",
            value: "Alaska"
        },

        {
            label: "Abu dhabi",
            value: "abu-dhabi"
        }
    ]

    const address = [
        {
            name: "Home",
            location: `Jitu Chauhan
            "4450 North Avenue Oakland,"
             "Nebraska United States"
             "402-776-1106`
        },

        {
            name: "Office",
            location: `Nitu Chauhan
            3853 Coal Road, Tannersville
            Pennsylvania 18372 United States
            402-776-1106`
        }
    ]

 

    return (
        <div>
            <div className="section-container">
                <Row>
                    <Breadcrumb
                        items={[
                            {
                                title: <a onClick={() => navigate("/")} href="">Home</a>
                            },

                            {
                                title: <a onClick={() => navigate("/shop")} href="#">Shop</a>
                            },

                            {
                                title: "Shop Checkout"
                            }
                        ]}
                    ></Breadcrumb>
                </Row>

                <section className="checkout-section">
                    <div className="checkout-section-header">
                        <h1>Checkout</h1>
                        <p>Already have an account? Click here to.
                            <a
                                onClick={() => navigate("/signIn")}
                                href="#">Sign In</a>
                        </p>
                    </div>
                    <Row gutter={[24,]}>
                        <Col md={12}>
                            <div className="delivery-header">
                                <div className="delivery-title">
                                    <h3> <LuMapPin className="add-delivery-icon" />Add Delivery address</h3>
                                </div>
                                <div className="add-controls">
                                    <Button
                                        onClick={() => {
                                            setOpenDeliveryModal(true)
                                        }}
                                        className="add-delivery-btn">Add a new address</Button>
                                </div>
                            </div>

                            <div className="radio-group-parent">
                                <Radio.Group>
                                    <Row gutter={[16, 16]}>
                                        {address.map((addres) => {
                                            return (
                                                <Col xs={24} sm={12} md={12}>
                                                    <Card className="address-card">
                                                        <Radio className="radio-card">
                                                            <h3 className="radio-card-title">{addres.name}</h3>
                                                            <p className="radio-card-subtitle">{addres.location}</p>

                                                            <span className="text-danger">Default address</span>

                                                            <div className="card-actions">
                                                                <p>Edit</p>
                                                                <a className="text-danger" href="">Delete</a>
                                                            </div>
                                                        </Radio>
                                                    </Card>
                                                </Col>
                                            )
                                        })}

                                    </Row>
                                </Radio.Group>


                                <div className="accordion-item">
                                    <Collapse
                                        accordion
                                        className="custom-collapse"
                                        bordered={false}
                                        style={{ background: "none" }}
                                        items={data} defaultActiveKey={'1'} />
                                </div>
                            </div>
                        </Col>
                    </Row>



                    {/* Address Modal */}
                    <Modal
                        destroyOnClose
                        className="shipping-address-modal"
                        title={<div className="modal-header">

                            <h1 className="modal-header-title">New Shipping Address</h1>
                            <p>Add new shipping address for your order delivery.</p>
                        </div>}
                        closable={{ 'aria-label': 'Custom Close Button' }}
                        open={openDeliveryModal}
                        footer={
                            null
                        }
                        onCancel={() => setOpenDeliveryModal(false)}
                    >

                        <AntForm
                            className="checkout-form" form={form} layout="vertical">
                            <AntForm.Item>
                                <Input className="shipping-address-input" type="text" placeholder="First Name"></Input>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Input className="shipping-address-input" type="text" placeholder="Last Name"></Input>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Input className="shipping-address-input" type="text" placeholder="Address Line 1"></Input>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Input className="shipping-address-input" type="text" placeholder="Address Line 2"></Input>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Input className="shipping-address-input" type="text" placeholder="City"></Input>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Select
                                    className="shipping-address-input"
                                    defaultValue="India "
                                    // onChange={handleChange}
                                    options={countries}></Select>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Select
                                    options={places}
                                    // onChange={handleChange}
                                    className="shipping-address-input"
                                ></Select>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Input
                                    placeholder="Zip Code "
                                    type="text" className="shipping-address-input"></Input>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Input
                                    placeholder="Business Name"
                                    type="text" className="shipping-address-input"></Input>
                            </AntForm.Item>

                            <AntForm.Item>
                                <Checkbox className="set-default-checkbox">Set as Default</Checkbox>
                            </AntForm.Item>

                            <div className="modal-footer-main">
                                <Button
                                    onClick={() => setOpenDeliveryModal(false)}
                                    className="cancel-btn">Cancel</Button>
                                <Button
                                    htmlType="submit"
                                    className="save-address-btn">Save Address</Button>
                            </div>
                        </AntForm>
                    </Modal>
                </section>



            </div>
        </div >

    )
}

export default ShopCheckout