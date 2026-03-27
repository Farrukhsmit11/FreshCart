import "./FeaturedCategories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import category from "./category";
import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FeaturedCategories = () => {

    const navigate = useNavigate();

    return (
        <section className="section-padding">
            <div className="section-container">
                <Row align="middle">
                    <Col span={24}>
                        <div className="featured-categories-header">
                            <h1 className="featured-title">Featured Categories</h1>
                            <div className="custom-navigation-container">
                                <div className="custom-prev"><IoIosArrowBack className="forward-icon" /></div>
                                <div className="custom-next"><IoIosArrowForward className="back-icon" /></div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="slider-container">
                    <Swiper
                        slidesPerView={6}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        loop={true}
                        spaceBetween={20}
                        speed={1000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"

                        breakpoints={{

                            320: { slidesPerView: 2, spaceBetween: 10 },
                            480: { slidesPerView: 2 },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            }
                        }}
                    >
                        <div className="main-parent">
                            <Row gutter={[16, 16]}>
                                {category.map((product) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="category-card-sub-parent">
                                                <Card
                                                    onClick={() => navigate(`/shop/${product.id}`)}
                                                    hoverable
                                                    className="featured-categories-card">
                                                    <div className="category-card-content">
                                                        <img className="featured-categories-img" src={product.imgSrc} />
                                                        <p className="card-desc">{product.title}</p>
                                                    </div>
                                                </Card>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })}
                            </Row>
                        </div>
                    </Swiper>

                </div>
            </div >
        </section >


    )
}

export default FeaturedCategories