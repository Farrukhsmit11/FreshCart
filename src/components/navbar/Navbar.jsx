import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Drawer, Badge, Alert, Row, Col, InputNumber, Result } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import LoginModal from "../loginModal/LoginModal"
import { useState } from "react"
import { FiShoppingCart, FiTrash2, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineMenuFold } from "react-icons/ai"
import { removeCart } from "../../store/cartSlice/CartSlice"
import { GrLocation } from "react-icons/gr";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const [opemMobileDrawer, setOpenMobileDrawer] = useState(false);

    const navigate = useNavigate(false);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const wishlistCount = useSelector((state) => state.wishlist.value)

    const itemCount = cartItems.length

    const dispatch = useDispatch();

    return (
        <>
            <div className="section-container">
                <nav className="navbar">

                    <div className="nav-header-left">
                        <img className="nav-logo" src={logo} onClick={() => navigate("/")} />
                    </div>

                    <div className="nav-header-center">
                        <div className="input-group">
                            <Input
                                className="search-input"
                                placeholder="Search For products"
                                type="search"
                                suffix={<SearchOutlined className="search-icon-input" />}
                            ></Input>
                        </div>

                        <Button
                            icon={<GrLocation />}
                            className="select-location-btn btn-outline-gray-400">Location</Button>
                    </div>

                    <div className="nav-actions">
                        <Badge color="#0aad0a" count={wishlistCount}>
                            <FaRegHeart
                                onClick={(e) => {
                                    e.stopPropagation()
                                    navigate("/shopWishlist")
                                }}
                                className="social-icon" />
                        </Badge>

                        <FiUser onClick={() => setOpen(true)} className="social-icon" />

                        <Badge color="#0aad0a" count={itemCount}>
                            <FiShoppingCart className="social-icon" onClick={() => setShowCartDrawer(true)} />
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

                        {itemCount > 0 ? (
                            <div>
                                {
                                    cartItems.map((item) => {
                                        return (
                                            <>
                                                <div className="list-items-main">
                                                    <Row align="middle" gutter={[16, 16]}>

                                                        <Col span={4}>
                                                            <img className="list-image" src={item.thumbnail} />
                                                        </Col>

                                                        <Col span={10}>
                                                            <h4>{item.title}</h4>
                                                            <div className="remove-cart-main">
                                                                <FiTrash2 className="delete-icon" />
                                                                <Button
                                                                    onClick={() => dispatch(removeCart(item))}
                                                                    className="remove-cart-btn">Remove</Button>
                                                            </div>
                                                        </Col>

                                                        <Col span={4}>
                                                            <span>{item.price}</span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                                <div className="cart-drawer-buttons-main">
                                    <Button
                                        onClick={() => {
                                            navigate("/shop/shopId")
                                            setShowCartDrawer(false)
                                        }
                                        }
                                        className="continue-shopping-btn">Continue Shopping</Button>

                                    <Button
                                        onClick={() => {
                                            setShowCartDrawer(false)
                                            navigate("/shopCheckout")
                                        }
                                        }
                                        className="proceed-to-checkout-btn">Proceed to Checkout</Button>
                                </div>

                            </div>


                        ) : (
                            <Result
                                extra={
                                    <>
                                        <h1 className="cart-drawer-title">Opps</h1>
                                        <p className="cart-drawer-description">Your cart is empty</p>
                                        <Button
                                            onClick={() => {
                                                navigate("/shop/:shopId")
                                                setShowCartDrawer(false)
                                            }}
                                            className="cart-shop-now-btn" key="console">
                                            Shop Now
                                        </Button>
                                    </>

                                }
                            />
                        )}

                    </Drawer>


                    <div className="mobile-nav-section">
                        <AiOutlineMenuFold className="mobile-menu-icon" onClick={() => setOpenMobileDrawer(true)} />

                        <Drawer
                            title={<img src={logo} />}
                            open={opemMobileDrawer}
                            onClose={() => setOpenMobileDrawer(false)}
                            placement="left"
                            className="mobile-drawer"
                        >
                            <Input
                                className="search-input"
                                placeholder="Search For Products"
                                type="search"
                                suffix={<SearchOutlined />}
                            ></Input>


                        </Drawer>
                    </div>

                </nav>

                <LoginModal
                    isOpenloginModal={open}
                    setIsOpenloginModal={setOpen}
                />
            </div >
            <hr />
        </>



    )
}

export default Navbar