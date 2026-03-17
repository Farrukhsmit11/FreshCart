import { Button, Checkbox, Col, Descriptions, Input, InputNumber, Modal, Rate, Row } from "antd"
import "./QuickViewModal.css"
import { useState } from "react"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { LuShoppingBag } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice/CartSlice";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { addToWishlist } from "../../store/wishlistSlice/WishlistSlice";

const QuickViewModal = ({ IsOpenViewModal, setIsOpenViewModal, product }) => {

    const [thumbSwiper, setThumbSwiper] = useState(null);

    const images = [
        {
            id: 1,
            src: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-1.jpg",
        },
        {
            id: 2,
            src: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-2.jpg",
        },
        {
            id: 3,
            src: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-3.jpg",
        },
        {
            id: 4,
            src: "https://freshcart-next-js-template.netlify.app/images/products/product-single-img-4.jpg",
        },
    ];

    const dispatch = useDispatch();


    return (
        <Modal
            open={IsOpenViewModal}
            onCancel={() => setIsOpenViewModal(false)}
            centered
            footer={null}
            width={1100}
            className="quick-view-modal"
        >
            <Row gutter={[32, 0]}>
                <Col lg={12} xs={24}>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={false}
                        thumbs={{ swiper: thumbSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {images.map((img) => {
                            return (
                                <SwiperSlide key={img.id}>
                                    <div className="image-wrapper">
                                        <img className="thumb-image" src={img.src} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <div className="product-thumbnails">
                            {images.map((img) => {
                                return (
                                    <SwiperSlide key={img.id}>
                                        <img className="thumb1-image" src={img.src} />
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </Col>

                <Col lg={12} xs={24}>
                    <div className="selected-product-info">
                        <a className="product-category">
                            {product?.category}
                        </a>
                        <h2 className="quick-view-modal-title">{product?.title}</h2>
                        <div className="rating-section">
                            <Rate className="reviews" allowHalf>{product?.rating}</Rate>
                            <a className="reviews-count">(4 reviews)</a>
                        </div>

                        <div>
                            <span>${product?.price}</span>
                        </div>
                        <hr className="divider" />

                        {/* <div className="checkox-categories">
                            <Radio.Group optionType="button" className="size-radio" >
                                <Radio.Button>250g</Radio.Button>
                                <Radio.Button>500g</Radio.Button>
                                <Radio.Button>1kg</Radio.Button>
                            </Radio.Group>
                        </div> */}

                        <div className="input-spinner">
                            <InputNumber min="1" max="10" mode="spinner" defaultValue="1" />
                        </div>

                        <div className="modal-actions">
                            <Button
                                onClick={() => dispatch(addToCart(product))}
                                className="product-add-btn"
                                icon={<LuShoppingBag />}>Add</Button>

                            <Col md={4}>
                                <div className="button-main">
                                    <Button icon={<IoIosGitCompare />} className="modal-action-btn"></Button>
                                    <Button onClick={() => dispatch(addToWishlist(product))} icon={<IoMdHeartEmpty />} className="modal-action-btn"></Button>
                                </div>
                            </Col>
                        </div>
                        <hr className="divider" />

                        <div className="product-details">
                            <Descriptions column={1} colon={true} className="details-description" labelStyle={{ fontWeight: "600" }}
                            >
                                <Descriptions.Item label="Product Code">
                                    {product?.sku}
                                </Descriptions.Item>

                                <Descriptions.Item label="Availability">
                                    {product?.availabilityStatus}
                                </Descriptions.Item>

                                <Descriptions.Item label="Type">
                                    {product?.category}
                                </Descriptions.Item>

                                <Descriptions.Item label="Shipping">
                                    {product?.shippingInformation}
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal >
    )
}

export default QuickViewModal