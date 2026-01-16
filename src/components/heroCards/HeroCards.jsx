import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroCards.css"
import { Button } from "antd";
import { hero } from "./hero";
import { FaArrowRight } from "react-icons/fa";

const HeroCards = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
          
        ]
    };

    return (
        <div className="section-container">
            <Slider className="hero-slider" {...settings} >
                {hero.map((item) => {
                    return (
                        <div className="slide-wrapper">
                            <div className="slide-wrapper-right">
                                <img className="hero-img" src={item.imgSrc} />
                            </div>
                            <div className="slide-wrapper-left">
                                <div className="text-content">
                                    <span className="custom-badge">{item.badgeText}</span>
                                    <h1>{item.title} </h1>
                                    <p className="text-primary">{item.text}</p>

                                    <p className="hero-description">{item.description}</p>

                                    <div className="slide-actions">
                                        <Button icon={<FaArrowRight className="show-now-icon" />
                                        } className="show-now-btn">Show Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default HeroCards