import "./Banner.css"
import logo from "../../assets/freshcart-logo.svg"

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="banner-main">
                    <nav className="banner-nav">
                        <div className="nav-content">
                            <img src={logo} />
                        </div>

                        <div className="nav-text">
                            <p>Already have an account</p>
                            <a href="#">Sign In</a>

                        </div>


                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Banner