import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Form as AntForm, Drawer, Badge, Divider, Alert } from "antd"
import { IoLocationOutline } from "react-icons/io5"
import { SearchOutlined } from "@ant-design/icons"
import LoginModal from "../loginModal/LoginModal"
import { useState } from "react"
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import LocationModal from "../../components/locationModal/LocationModal"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { LuTrash } from "react-icons/lu"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [updateLocation, setupdateLocation] = useState(false);
    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const navigate = useNavigate(false);

    const count = useSelector((state) => state.cart.value);

    const cartItems = useSelector((state) => state.cart.cartItems);

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

                        <Badge count={count}>
                            <FiShoppingBag onClick={() => setShowCartDrawer(true)} className="social-icon" />
                        </Badge>
                    </div>

                    <Drawer
                        width={560}
                        onClose={() => setShowCartDrawer(false)}
                        className="products-drawer"
                        title={<span><h1 className="drawer-title">Shop Cart</h1>
                            <p className="products-drawer-desc">Location in 382480</p>
                        </span>}
                        open={showCartDrawer}
                    >
                        {cartItems.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="list-items-main">

                                        <div className="list-item-left">
                                            <img className="list-image" src={item.thumbnail} />
                                        </div>

                                        <div className="list-items-right">

                                            <h6>{item.title}</h6>
                                            <p>{item.category}</p>

                                            <span><LuTrash /> Remove</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                        {/* <div className="buttons">

                            <Button className="shopping-btn">Continue Shopping</Button>

                            <Button className="checkout-btn">Proceed to Checkout</Button>
                        </div> */}

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
        </div >
    )
}

export default Navbar