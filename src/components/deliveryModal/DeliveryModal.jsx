import { Modal, Form as AntForm, Select, Input, Checkbox, Button } from 'antd'

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

    return (
        <Modal
            destroyOnClose
            centered
            className="shipping-address-modal"
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

            <AntForm
                className="checkout-form"
                form={form}
                layout="vertical"
            >
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
                        options={countries}></Select>
                </AntForm.Item>

                <AntForm.Item>
                    <Select
                        options={places}
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
                        onClick={() => setIsOpenDeliveryModal(false)}
                        className="cancel-btn">Cancel</Button>
                    <Button
                        htmlType="submit"
                        className="save-address-btn">Save Address</Button>
                </div>
            </AntForm>
        </Modal>
    )
}

export default DeliveryModal