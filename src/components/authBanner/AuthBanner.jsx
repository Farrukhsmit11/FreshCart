import "./AuthBanner.css"
import logo from "../../assets/freshcart-logo.svg"
import { useNavigate } from "react-router-dom"

const AuthBanner = () => {
    const navigate = useNavigate();

    return (
        <nav className="auth-nav">
            <div className="section-container">
                <div className="auth-content">
                    <div className="auth-banner-left">
                        <img className="nav-logo" src={logo} onClick={() => navigate("/")} />
                    </div>

                    <div className="auth-banner-right">
                        <p>Already have an Account?</p>
                        <a href="#" onClick={() => navigate("/signIn")}>Sign in </a>
                    </div>
                </div>

            </div>
        </nav>

    )
}

export default AuthBanner