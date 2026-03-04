import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Drawer, Badge, Row, Col, Dropdown, Popover, Result, InputNumber } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import LoginModal from "../loginModal/LoginModal"
import { useState } from "react"
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { GrLocation } from "react-icons/gr";
import { RiDashboardLine } from "react-icons/ri"
import { IoIosArrowDown } from "react-icons/io"
import { LuTrash2 } from "react-icons/lu"
import LocationModal from "../locationModal/LocationModal"
import { removeItem } from "../../store/cartSlice/CartSlice"

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const cartItems = useSelector((state) => state.cart.cartItems);
    const [search, setSearch] = useState("");

    const [showCartDrawer, setShowCartDrawer] = useState(false);

    const [openLocationModal, setOpenLocationModal] = useState(false);

    const navigate = useNavigate();

    const wishlistCount = useSelector((state) => state.wishlist.items.length);

    const itemCount = cartItems.length

    const homeMenu = [
        { key: "1", label: <span><a onClick={() => navigate("/")} className="bottom-nav-links" href="#">Home default</a></span> },
        { key: "2", label: <span><a className="bottom-nav-links" href="#">Home Modern </a></span> },
        { key: "3", label: <span><a className="bottom-nav-links" href="#">Home Creative</a></span> },
        { key: "4", label: <span><a className="bottom-nav-links" href="#">Home Local Store</a></span> },
        { key: "5", label: <span><a className="bottom-nav-links" href="#">Home Minimalist</a></span> },
    ]

    const shopMenu = [
        { key: "1", label: <span><a className="bottom-nav-links" href="#">Shop Grid Filter</a></span> },

        { key: "2", label: <span><a className="bottom-nav-links" href="#">Shop Grid 3 column</a></span> },

        { key: "3", label: <span><a className="bottom-nav-links" href="#">Shop List -Filter</a></span> },

        { key: "4", label: <span><a className="bottom-nav-links" href="#">Shop Filter</a></span> },

        { key: "6", label: <span><a className="bottom-nav-links" href="#">Shop Wide</a></span> },

        { key: "7", label: <span><a className="bottom-nav-links" href="#">Shop Single </a></span> },

        { key: "8", label: <span><a className="bottom-nav-links" href="#">Shop Single V2 </a></span> },

        { key: "9", label: <span><a onClick={() => navigate("/shopWishlist")} className="bottom-nav-links" href="#">Shop Wishlist </a></span> },

        { key: "10", label: <span><a className="bottom-nav-links" href="#">Shop Cart </a></span> },

        { key: "11", label: <span><a onClick={() => navigate("/shopCheckout")} className="bottom-nav-links" href="#">Shop Checkout </a></span> },
    ]

    const pages = [
        { key: "2", label: <span className="bottom-nav-links">Blog</span> },

        { key: "3", label: <span className="bottom-nav-links">Blog Single</span> },

        { key: "4", label: <span className="bottom-nav-links">Blog</span> },

        { key: "5", label: <span className="bottom-nav-links">404 Error</span> },

        { key: "6", label: <span className="bottom-nav-links">Contact</span> }
    ];

    const accountInfo = [
        {
            key: "2",
            label: <a className="bottom-nav-links" onClick={() => navigate("/signIn")}>Sign In</a>
        },

        {
            key: "3",
            label: <a className="bottom-nav-links">Sign Up</a>
        },

        {
            key: "4",
            label: <a className="bottom-nav-links" target="_blank" onClick={() => navigate("/forgotPassword")}>Forgot Password</a>
        },
        {
            key: 5,
            label: <a className="bottom-nav-links">My Account</a>,
            children: [
                {
                    key: 1,
                    label: <a className="bottom-nav-links" href="#">Orders</a>,

                },

                {
                    key: 1,
                    label: <a className="bottom-nav-links" href="#">Settings</a>,

                },

                {
                    key: 1,
                    label: <a className="bottom-nav-links" href="#">Address</a>,

                },

                {
                    key: 1,
                    label: <a className="bottom-nav-links" href="#">Payment Method</a>,

                },


                {
                    key: 1,
                    label: <a className="bottom-nav-links" href="#">Notifications</a>,
                },
            ]
        }
    ]

    const dispatch = useDispatch();

    return (
        <>
            <div className="section-container">
                <nav className="navbar">
                    <Col lg={2} md={6} xxl={3}>
                        <a href="#">
                            <img className="nav-logo" src={logo} onClick={() => navigate("/")} />
                        </a>
                    </Col>

                    <div className="nav-header-center">
                        <div className="input-group">
                            <Input
                                className="search-input"
                                placeholder="Search For products"
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                autoComplete="true"
                                suffix={<SearchOutlined
                                    className="search-icon-input" />}
                            >
                            </Input>
                        </div>
                        <Button
                            onClick={() => setOpenLocationModal(true)}
                            icon={<GrLocation />}
                            className="select-location-btn btn-outline-gray-400">Location</Button>
                    </div>

                    <div className="nav-actions">
                        <Badge
                            color="#0aad0a"
                            count={wishlistCount}
                            showZero
                            className="count-badge"
                        >
                            <FaRegHeart
                                onClick={(e) => {
                                    e.stopPropagation()
                                    navigate("/shopWishlist")
                                }}
                                className="social-icon" />
                        </Badge>

                        <FiUser onClick={() => setOpen(true)} className="social-icon" />

                        <Badge
                            color="#0aad0a"
                            count={itemCount}
                            showZero
                            className="count-badge"
                        >
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
                                {cartItems.map((item) => {
                                    return (
                                        <>
                                            <ul className="list-main">
                                                <li className="list-item">
                                                    <div className="list-item-group-main">
                                                        <Row gutter={[16, 16]} align="middle">
                                                            <Col lg={12} md={8} span={6}>
                                                                <div className="list-item-content">
                                                                    <img
                                                                        alt={item.title}
                                                                        className="cart-drawer-image"
                                                                        src={item.thumbnail} />

                                                                    <div className="list-item-right">
                                                                        <h6>{item.title}</h6>

                                                                        <div className="delete-main">
                                                                            <a
                                                                                onClick={() => {
                                                                                    dispatch(removeItem(item))
                                                                                }
                                                                                }

                                                                                className="remove-btn" href="#">
                                                                                <LuTrash2 className="delete-icon" />
                                                                                Remove
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={6} lg={9} span={19}>
                                                                <InputNumber
                                                                    min="1"
                                                                    max="10"
                                                                    defaultValue="1"
                                                                    mode="spinner"
                                                                    className="input-spinner"
                                                                />
                                                            </Col>

                                                            <Col md={2} span={2}>
                                                                <span>{item.price}</span>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </li>
                                            </ul>
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
                </nav>

                <Row gutter={[16, 16]}>
                    <nav className="bottom-nav-section">
                        <div className="navbar-default">
                            <Popover
                                trigger={["hover"]}
                            >
                                <Button className="all-department-btn" icon={<RiDashboardLine />}>All Departments</Button>
                            </Popover>
                        </div>

                        <div className="navbar-links-main">
                            <ul className="dropdown-links">

                                <Dropdown className="nav-dropdown" menu={{ items: homeMenu }} trigger={["hover"]}>
                                    <li>Home
                                        <IoIosArrowDown />
                                    </li>
                                </Dropdown>

                                <Dropdown menu={{ items: shopMenu }} trigger={["hover"]}>
                                    <li>
                                        Shop <IoIosArrowDown />
                                    </li>
                                </Dropdown>

                                <li>Stores</li>

                                <li>
                                    Mega Menu
                                </li>

                                <Dropdown menu={{ items: pages }} trigger={["hover"]}>
                                    <li>
                                        Pages <IoIosArrowDown />
                                    </li>
                                </Dropdown>

                                <Dropdown menu={{ items: accountInfo }} trigger={["hover"]}>
                                    <li>
                                        Account <IoIosArrowDown />
                                    </li>
                                </Dropdown>

                                <li className="dashboard-link">Dashboard</li>

                                <li>
                                    Docs
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Row>

                <LoginModal
                    isOpenloginModal={open}
                    setIsOpenloginModal={setOpen}
                />

                <LocationModal
                    isOpenLocationModal={openLocationModal}
                    setIsOpenLocationModal={setOpenLocationModal}
                />
            </div >
            <hr />
        </>



    )
}

export default Navbar