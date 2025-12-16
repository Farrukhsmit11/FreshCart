import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Form as AntForm, Drawer } from "antd"
import { IoLocationOutline } from "react-icons/io5"
import { SearchOutlined } from "@ant-design/icons"
import LoginModal from "../loginModal/LoginModal"
import { useState } from "react"
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import LocationModal from "../../components/locationModal/LocationModal"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [updateLocation, setupdateLocation] = useState(false);
    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const navigate = useNavigate(false);
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar">
                    <div className="nav-header-left">
                        <img className="nav-logo" src={logo} />
                    </div>

                    <div className="nav-center-right">
                        <div className="input-group">
                            <Input
                                className="search-input"
                                placeholder="Search For Products"
                                type="search"
                                suffix={<SearchOutlined />}
                            ></Input>
                        </div>
                        <span>
                            <Button onClick={() => setupdateLocation(true)} className="select-location-btn"><IoLocationOutline />Location</Button>
                        </span>
                    </div>

                    <div className="nav-actions">
                        <FaRegHeart onClick={() => navigate("/shopWishlist")} className="social-icon" />
                        <FiUser onClick={() => setOpen(true)} className="social-icon" />
                        <FiShoppingBag onClick={() => setShowCartDrawer(true)} className="social-icon" />
                    </div>

                    <Drawer
                        onClose={() => setShowCartDrawer(false)}
                        className="cart-drawer"
                        title={<span><h1 className="drawer-title">Shop Cart</h1>
                            <p className="cart-drawer-desc">Location in 382480</p>
                        </span>}
                        open={showCartDrawer}>
                    </Drawer>

                </nav>
            </div>

            <LoginModal
                isOpenloginModal={open}
                setIsOpenloginModal={setOpen}
            />

            <LocationModal
                isOpenLocationModal={updateLocation}
                setIsOpenLocationModal={setupdateLocation}
            />
        </div>
    )
}

export default Navbar