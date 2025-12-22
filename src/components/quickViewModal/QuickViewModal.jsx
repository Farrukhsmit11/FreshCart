import { Modal } from "antd"
import "./QuickViewModal.css"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const QuickViewModal = ({ isOpenQuickViewModal, setIsOpenQuickViewModal }) => {

    const images = [
        {
            imageSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-1.jpg"
        },

        {
            imageSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-2.jpg"
        },

        {
            imageSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-3.jpg"
        },

        {
            imageSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-4.jpg"
        }
    ]

    const formattedImages = images.map((item) => ({
        original: item.imageSrc,
        thumbnail: item.imageSrc,
    }));

    return (
        <Modal
            open={isOpenQuickViewModal}
            footer={null}
            onCancel={() => setIsOpenQuickViewModal(false)}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ImageGallery
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showNav={false}
                            items={formattedImages}
                        ></ImageGallery>

                    </div>

                    <div className="col-lg-3">
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default QuickViewModal