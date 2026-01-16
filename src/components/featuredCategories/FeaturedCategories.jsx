import "./FeaturedCategories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import category from "./category";
import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const FeaturedCategories = () => {

    const navigate = useNavigate();

    return (
        <section className="section-padding">
            <div className="section-container">
                <div className="featured-categories-header">
                    <h1 className="featured-title">Featured Categories</h1>
                </div>
                <div className="slider-container">
                    <Swiper
                        slidesPerView={6}
                        navigation={true}
                        // loop={true}
                        spaceBetween={30}

                        // speed={1000}
                        // autoplay={{
                        //     delay: 2000,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                        breakpoints={{

                            320: { slidesPerView: 2, spaceBetween: 10 },
                            480: { slidesPerView: 2 },
                            768: {
                                slidesPerView: 6,
                                spaceBetween: 40

                            }
                        }}

                    >
                        {category.map((product) => {
                            return (
                                <SwiperSlide>
                                        <Card
                                            onClick={() => navigate(`/shop/${product.id}`)}
                                            hoverable
                                            className="featured-categories-card">
                                            <div className="category-card-content">
                                                <img className="featured-categories-img" src={product.imgSrc} />
                                                <p className="card-desc">{product.title}</p>
                                            </div>
                                        </Card>



                                </SwiperSlide>
                            )
                        })}


                    </Swiper>

                </div>
            </div >
        </section>


    )
}

export default FeaturedCategories