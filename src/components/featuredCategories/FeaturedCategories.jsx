import "./FeaturedCategories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import category from "./category";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const FeaturedCategories = () => {

    const navigate = useNavigate();

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="featured-categories-header">
                        <h1 className="featured-title">Featured Categories</h1>
                    </div>
                    <div className="slider-container">
                        <Swiper
                            slidesPerView={6}
                            navigation={true}
                            loop={true}
                            spaceBetween={30}

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
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {category.map((product, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card
                                            onClick={() => navigate("/shop")}
                                            hoverable
                                            className="category-card">
                                            <div className="category-card-content">
                                                <img src={product.imgSrc} />
                                                <p className="card-desc">{product.title}</p>
                                            </div>
                                        </Card>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default FeaturedCategories