import { Modal } from "antd"
import "./QuickViewModal.css"
const QuickViewModal = ({ isOpenQuickViewModal, setIsOpenQuickViewModal }) => {
    return (
        <Modal
            open={isOpenQuickViewModal}
            footer={null}
            onCancel={() => setIsOpenQuickViewModal(false)}
        ></Modal>
    )
}

export default QuickViewModal