import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Drawer, Badge, Row, Col, } from "antd"
import { IoLocationOutline } from "react-icons/io5"
import { SearchOutlined } from "@ant-design/icons"
import LoginModal from "../loginModal/LoginModal"
import { useState } from "react"
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const navigate = useNavigate(false);

    const count = useSelector((state) => state.cart.value);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const wishlistCount = useSelector((state) => state.wishlist.value);

    return (

        <>
            <div className="section-container">
                <nav className="navbar">
                    <Row justify="space-between" align="middle">

                        <img className="nav-logo" src={logo} />

                        <div className="nav-center-right">
                            <Input
                                className="search-input"
                                placeholder="Search For Products"
                                type="search"
                                suffix={<SearchOutlined />}
                            ></Input>
                            <Button className="select-location-btn"><IoLocationOutline />Location</Button>
                        </div>

                        <div className="nav-actions">

                            <Badge count={wishlistCount}>
                                <FaRegHeart
                                    onClick={() => {
                                        navigate("/shopWishlist")
                                    }}
                                    className="social-icon" />
                            </Badge>

                            <FiUser onClick={() => setOpen(true)} className="social-icon" />

                            <Badge count={count}>
                                <FiShoppingCart onClick={() => setShowCartDrawer(true)} className="social-icon" />
                            </Badge>
                        </div>

                        <Drawer
                            onClose={() => setShowCartDrawer(false)}
                            className="products-drawer"
                            title={<span><h1 className="drawer-title">Shop Cart</h1>
                                <p className="products-drawer-desc">Location in 382480</p>
                            </span>}
                            open={showCartDrawer}
                        >
                            {cartItems.map((item, index) => {
                                return (
                                    <div>

                                    </div>
                                )
                            })}

                        </Drawer>
                    </Row>
                </nav>


                <LoginModal
                    isOpenloginModal={open}
                    setIsOpenloginModal={setOpen}
                />

            </div>

            <hr />

        </>


    )
}

export default Navbar