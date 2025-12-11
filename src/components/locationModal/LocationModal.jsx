import { Button, Input, Menu, Modal } from "antd"
import "./LocationModal.css"
import { SearchOutlined } from "@ant-design/icons"
import LocationData from "./LocationData"

const LocationModal = ({ isOpenLocationModal, setIsOpenLocationModal }) => {
    return (

        <Modal
            title={<span><h2 className="modal-header-title">Choose your  Delivery Location</h2>
                <p>Enter your address and we will specify the offer you area</p>
            </span>}
            open={isOpenLocationModal}
            destroyOnClose
            footer={null}
            onCancel={() => setIsOpenLocationModal(false)}
            className="select-location-modal"
        >

            <div className="modal-content">
                <Input
                    placeholder="Search your area"
                    type="search"
                    className="form-input"
                    suffix={<SearchOutlined />}
                ></Input>
            </div>

            <div className="select-location-main">
                <h4>Select Location</h4>
                <Button className="clear-all-btn">Clear All</Button>
            </div>
        </Modal>
    )
}

export default LocationModal