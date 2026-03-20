import { Modal, Form as AntForm, Select, Input, Checkbox, Button, Col } from 'antd'
import { Formik } from 'formik';
import { deliverySchema } from "./Validations"
import "./DeliveryModal.css"

const DeliveryModal = ({ IsOpenDeliveryModal, setIsOpenDeliveryModal }) => {

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

    const initialValues = {
        firstName: "",
        lastName: "",
        addressline1: "",
        addressline2: "",
        zipCode: "",
        businessName: "",
        city: "",
        places: "",
        country: ""
    }

    const handleForm = (value) => {
        console.log("Adress saved", value);
    }

    return (
        <Modal
            destroyOnClose
            className="shipping-address-modal"
            centered
            title={<div className="modal-header">

                <h1 className="modal-header-title">New Shipping Address</h1>
                <p>Add new shipping address for your order delivery.</p>
            </div>}
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={IsOpenDeliveryModal}
            footer={
                null
            }
            onCancel={() => setIsOpenDeliveryModal(false)}
        >
            <Formik
                validationSchema={deliverySchema}
                initialValues={initialValues}
                onSubmit={handleForm}
            >
                {({
                    handleSubmit,
                    handleBlur,
                    handleChange,
                    values,
                    errors,
                    setFieldValue,
                    setFieldTouched,
                    touched
                }) => (
                    <AntForm
                        className="checkout-form"
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                    >
                        <Col span={24}>
                            <AntForm.Item
                                help={
                                    errors.firstName && touched.firstName ? (
                                        <span className='form-error'>{errors.firstName}</span>
                                    ) : null
                                }>
                                <Input
                                    name='firstName'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    className="shipping-address-input" type="text" placeholder="First Name"></Input>
                            </AntForm.Item>
                        </Col>

                        <Col span={24}>
                            <AntForm.Item
                                validateStatus={errors.lastName && touched.lastName ? "error" : ""}
                                help={
                                    errors.lastName && touched.lastName ? (
                                        <span className='form-error'>{errors.lastName}</span>
                                    ) : null
                                }
                            >
                                <Input
                                    className="shipping-address-input"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    name='lastName'
                                    placeholder="Last Name"
                                ></Input>
                            </AntForm.Item>
                        </Col>

                        <Col span={24}>
                            <AntForm.Item
                                validateStatus={errors.addressline1 && touched.addressline1 ? "error" : ""}
                                help={
                                    errors.addressline1 && touched.addressline1 ? (
                                        <span className='form-error'>{errors.addressline1}</span>
                                    ) : null
                                }
                            >
                                <Input
                                    name='addressline1'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="shipping-address-input"
                                    type="text"
                                    value={values.addressline1}
                                    placeholder="Address Line 1"
                                ></Input>
                            </AntForm.Item>
                        </Col>

                        <Col span={24}>
                            <AntForm.Item
                                validateStatus={errors.addressline2 && touched.addressline2 ? "error" : ""}
                                help={
                                    errors.addressline2 && touched.addressline2 ? (
                                        <span className='form-error'>{errors.addressline2}</span>
                                    ) : null

                                }
                            >
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='addressline2'
                                    className="shipping-address-input"
                                    type="text"
                                    value={values.addressline2}
                                    placeholder="Address Line 2"
                                ></Input>
                            </AntForm.Item>
                        </Col>

                        <AntForm.Item
                            validateStatus={errors.city && touched.city ? "error" : ""}
                            help={
                                errors.city && touched.city ? (
                                    <span className='form-error'>{errors.city}</span>
                                ) : null
                            }
                        >
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                                name='city'
                                className="shipping-address-input"
                                type="text"
                                placeholder="City"
                            ></Input>
                        </AntForm.Item>

                        <AntForm.Item
                            validateStatus={errors.country && touched.country ? "error" : ""}
                            help={
                                errors.country && touched.country ? (
                                    <span className='form-error'>{errors.country}</span>
                                ) : null
                            }
                        >
                            <Select
                                className="shipping-address-input"
                                defaultValue="India "
                                options={countries}
                                onChange={(value) => {
                                    setFieldValue("country", value)
                                }}
                                onBlur={(value) => {
                                    setFieldTouched("country", value)
                                }}
                            >

                            </Select>
                        </AntForm.Item>

                        <AntForm.Item
                            validateStatus={errors.places && touched.places ? "error" : ""}
                            help={
                                errors.places && touched.places ? (
                                    <span className='form-error'>{errors.places}</span>
                                ) : null
                            }
                        >
                            <Select
                                options={places}
                                value={values.places}
                                onChange={(value) => {
                                    setFieldValue("places", value)
                                }}
                                onBlur={(value) => {
                                    setFieldTouched("places", value)
                                }}
                                className="shipping-address-input"
                            ></Select>
                        </AntForm.Item>

                        <AntForm.Item
                            validateStatus={errors.zipCode && touched.zipCode ? "error" : ""}
                            help={
                                errors.zipCode && touched.zipCode ? (
                                    <span className='form-error'>{errors.zipCode}</span>
                                ) : null
                            }
                        >
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zipCode}
                                name='zipCode'
                                placeholder="Zip Code "
                                type="text" className="shipping-address-input"
                            ></Input>
                        </AntForm.Item>

                        <AntForm.Item
                            validateStatus={errors.businessName && touched.businessName ? "error" : ""}
                            help={
                                errors.businessName && touched.businessName ? (
                                    <span className='form-error'>{errors.businessName}</span>
                                ) : null
                            }
                        >
                            <Input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.businessName}
                                name='businessName'
                                placeholder="Business Name"
                                type="text" className="shipping-address-input"></Input>
                        </AntForm.Item>

                        <AntForm.Item>
                            <Checkbox className="set-default-checkbox">Set as Default</Checkbox>
                        </AntForm.Item>

                        <div className="modal-footer-main">
                            <Button
                                onClick={() => setIsOpenDeliveryModal(false)}
                                className="cancel-btn">Cancel</Button>
                            <Button
                                htmlType="submit"
                                type='default'
                                className="save-address-btn">Save Address</Button>
                        </div>
                    </AntForm>
                )
                }

            </Formik>
        </Modal>
    )
}

export default DeliveryModal