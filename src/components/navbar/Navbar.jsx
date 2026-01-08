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
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../../store/cartSlice/CartSlice"

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
        defaultValue: 1,
        onChange,
    };

    const disptach = useDispatch()

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

                        <Alert title="You’ve got FREE delivery. Start!" className="message-alert" type="success"></Alert>

                        {cartItems.map((item) => {
                            return (

                                <div className="list-items-main">
                                    <Row align="middle" gutter={[16, 16]}>

                                        <Col span={4}>
                                            <img className="list-image" src={item.thumbnail} />
                                        </Col>

                                        <Col span={10}>
                                            <h4>{item.title}</h4>
                                            <div className="remove-cart-main">
                                                <FiTrash2 className="delete-icon" />
                                                <Button onClick={() => disptach(removeItem(item))} className="remove-cart-btn">Remove</Button>
                                            </div>
                                        </Col>

                                        <Col span={6} xs={6}>
                                        
                                            <InputNumber
                                                {...sharedProps}
                                            />
                                        </Col>

                                        <Col span={4}>
                                            <span>{item.price}</span>
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