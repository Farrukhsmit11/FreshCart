import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Drawer, Badge, Layout, Alert, Row, Col, InputNumber, Flex } from "antd"
import { IoLocationOutline } from "react-icons/io5"
import { SearchOutlined } from "@ant-design/icons"
import LoginModal from "../loginModal/LoginModal"
import { useState } from "react"
import { FiShoppingCart, FiTrash2, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { MdGridView } from "react-icons/md"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showCartDrawer, setShowCartDrawer] = useState(false);

    const navigate = useNavigate(false);

    const cartItems = useSelector((state) => state.cart.cartItems);
    const count = useSelector((state) => state.cart.value);

    const wishlistCount = useSelector((state) => state.wishlist.value);

    const onChange = value => {
        console.log('changed', value);
    };
    const sharedProps = {
        mode: 'spinner',
        min: 1,
        max: 10,
        defaultValue: 3,
        onChange,
    };

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
                                placeholder="Search For Products"
                                type="search"
                                suffix={<SearchOutlined />}
                            ></Input>
                        </div>

                        <Button className="select-location-btn btn-outline-gray-400"><IoLocationOutline />Location</Button>
                    </div>


                    <div className="nav-actions">
                        <Badge color="#0aad0a" count={wishlistCount}>
                            <FaRegHeart
                                onClick={() => {
                                    navigate("/shopWishlist")
                                }}
                                className="social-icon" />
                        </Badge>

                        <FiUser onClick={() => setOpen(true)} className="social-icon" />

                        <Badge color="#0aad0a" count={count}>
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

                        {cartItems.map((item, index) => {
                            return (

                                <div className="list-items-main">
                                    <Row align="middle" gutter={[16, 16]}>
                                        <Col>
                                            <img className="list-image" src={item.thumbnail} />
                                        </Col>

                                        <Col md={6} lg={7}>
                                            <h4>{item.title}</h4>

                                            <div className="remove-cart-main">
                                                <FiTrash2 />
                                                <span>
                                                    <p className="remove-cart-title">Remove</p>
                                                </span>
                                            </div>
                                        </Col>

                                        <Col md={6} lg={7}>
                                            <Flex vertical gap="middle">
                                                <InputNumber {...sharedProps} >

                                                </InputNumber>
                                            </Flex>
                                        </Col>

                                        <Col md={6} lg={6}>
                                            <p>{item.price}</p>
                                        </Col>

                                    </Row>
                                </div>
                            )
                        })}

                    </Drawer>

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