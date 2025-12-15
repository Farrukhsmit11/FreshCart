import "./Footer.css"
import americanLogo from "../../assets/american-express-logo.svg"
import visaLogo from "../../assets/visa-logo.svg"
import mastercardLogo from "../../assets/mastercard-logo.svg"
import amazonLogo from "../../assets/amazonpay-logo.svg"
import paypalLogo from "../../assets/paypal-logo.svg"
import googleplayLogo from "../../assets/googleplay-btn.svg"
import applestoreLogo from "../../assets/appstore-btn.svg"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-12 col-12">
                        <h3 className="sub-footer-title">Categories</h3>

                        <div className="row">
                            <div className="col-6">
                                <div className="nav-main">
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Vegetable & Fruits</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Breakfast & instant food</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Bakery & Biscuits</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Atta, rice & dal</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Sauces & spreads</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Baby Care</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Cleaning essentials</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Personal Care</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="nav-main">
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Vegetable & Fruits</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Breakfast & instant food</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Bakery & Biscuits</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Atta, rice & dal</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Sauces & spreads</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Baby Care</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Cleaning essentials</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Personal Care</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="row">

                            <div className="col-md-3 col-sm-6 col-6">
                                <h3 className="sub-footer-title">Get to Know</h3>

                                <div className="nav-main">
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Company</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Help Center</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Our Value</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3 col-sm-6 col-6">
                                <h3 className="sub-footer-title">For Consumers</h3>

                                <div className="nav-main">
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Payments</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Shipping</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Product Returns</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">FAQ</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Shop Checkout</a>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-6">
                                <h3 className="sub-footer-title">Became a Shopper</h3>

                                <div className="nav-main">
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Shopper Oportunities</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Became a Shopper</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Earnings</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Ideas & Guidelines</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">New Retailers</a>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-3 col-sm-6 col-6">
                                <h3 className="sub-footer-title">FreshCart Programs</h3>

                                <div className="nav-main">
                                    <div className="nav-item">
                                        <a className="nav-link" href="#">FreshCart Programs</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Gift Cards</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Promos & Coupons</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">freshCart ads</a>
                                    </div>

                                    <div className="nav-item">
                                        <a className="nav-link" href="#">Careers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="footer-actions py-4">
                            <div className="payment-section-main">
                                <div className="payment-section-left">
                                    <h4 className="footer-actions-title">Payment Parthners</h4>

                                    <div className="footer-payment-methods">
                                        <img className="payment-btn" src={americanLogo} alt="American Express" />
                                        <img className="payment-btn" src={mastercardLogo} alt="Mastercard" />
                                        <img className="payment-btn" src={paypalLogo} alt="Paypal" />
                                        <img className="payment-btn" src={amazonLogo} alt="Amazon Pay" />
                                        <img className="payment-btn" src={visaLogo} alt="Amazon Pay" />
                                    </div>
                                </div>

                                <div className="payment-section-right">
                                    <p className="footer-actions-title">Get deliveries with FreshCart</p>
                                    <div className="download-section-main">
                                        <img className="download-image" src={applestoreLogo} />
                                        <img className="download-image" src={googleplayLogo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-section">
                        <div className="rights-reserved">
                            <h3>© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by</h3>
                            <span><a href="#"></a>Codescandy.</span>
                        </div>

                        <div className="platform-links">
                            <p>Follow us on</p>
                            <FaInstagram className="social-link" />
                            <FaFacebook className="social-link" />
                            <FaTwitter className="social-link" />
                        </div>
                    </div>
                </div>
            </div>
        </footer >

    )
}

export default Footer