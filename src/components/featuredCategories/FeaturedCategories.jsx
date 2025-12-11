import "./FeaturedCategories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import category from "./category";
import { Card } from "antd";

const FeaturedCategories = () => {

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="featured-categories-header">
                        <h1 className="featured-title">Featured Categories</h1>
                    </div>
                    <div className="slider-container">
                        <Swiper
                            slidesPerView={5}
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
                           
                        >
                            {category.map((product, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card hoverable className="category-card">
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