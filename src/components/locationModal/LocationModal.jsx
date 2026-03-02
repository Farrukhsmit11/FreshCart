import { Button, Input, List, Modal } from "antd"
import "./LocationModal.css"
import { locations } from "./locations"

const LocationModal = ({ isOpenLocationModal, setIsOpenLocationModal }) => {
    return (
        <Modal
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isOpenLocationModal}
            onCancel={() => setIsOpenLocationModal(false)}
            footer={null}
            className="choose-delivery-modal"
        >
            <div className="delivery-modal-header">
                <h5 className="delivery-modal-title">Choose delivery location</h5>
                <p>Enter your address and we will specify the offer you area.</p>
            </div>

            <div className="search-area-section">
                <Input className="search-area-input" placeholder="Search your area"></Input>
            </div>

            <div className="location-lists-main">
                <h6>Select Location</h6>
                <Button className="clear-all-btn">Clear All</Button>
            </div>

            <div className="list-main">
                <List
                    dataSource={locations}
                    renderItem={(location) => (
                        <div className="list-group-main">
                            <h5>{location.name}</h5>
                            <p>{location.minOrder}</p>
                        </div>
                    )}
                />
            </div>


        </Modal >
    )
}

export default LocationModal