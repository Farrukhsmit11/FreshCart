import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Drawer, Badge, Row, Col, Popover, Result, InputNumber, Dropdown, Collapse } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import LoginModal from "../loginModal/LoginModal"
import { useState } from "react"
import { FiGrid, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { GrLocation } from "react-icons/gr";
import { LuTrash2 } from "react-icons/lu"
import LocationModal from "../locationModal/LocationModal"
import { removeItem } from "../../store/cartSlice/CartSlice"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineMenuFold } from "react-icons/ai"
import Panel from "antd/es/splitter/Panel"

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [showCartDrawer, setShowCartDrawer] = useState(false);
    const [openLocationModal, setOpenLocationModal] = useState(false);
    const [currentValue, setCurrentValue] = useState({});
    const [openMobileNav, setopenMobileNav] = useState(false);

    const navigate = useNavigate();

    const wishlistCount = useSelector((state) => state.wishlist.items.length);

    const itemCount = cartItems.length

    const dispatch = useDispatch();

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
            label: <a className="bottom-nav-links" onClick={() => navigate("/signUp")}>Sign Up</a>
        },

        {
            key: "4",
            label: <a className="bottom-nav-links" target="_blank" onClick={() => navigate("/forgotPassword")}>Forgot Password</a>
        },
    ]

    const handleQuantityChange = (newValue) => {
        setCurrentValue(newValue)
    }

    return (
        <>
            <div className="section-container">
                <nav className="navbar">
                    <Col lg={2} md={6} xxl={3}>
                        <a href="#">
                            <img className="nav-logo" src={logo} onClick={() => navigate("/")} />
                        </a>
                    </Col>

                    {/* Dekstop */}
                    <div className="nav-header-center">
                        <div className="input-group">
                            <Input
                                className="search-input"
                                placeholder="Search For products"
                                type="search"
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



                    {/* Mobile */}
                    <div className="mobile-nav-section">
                        <Button
                            onClick={() => setopenMobileNav(true)}
                            icon={<AiOutlineMenuFold className="menu-icon" />}
                            className="menu-btn"
                        ></Button>
                        <Drawer
                            placement="left"
                            title={<img src={logo}></img>}
                            closable={{ 'aria-label': 'Close Button' }}
                            onClose={() => setopenMobileNav(false)}
                            className="mobile-nav-drawer"
                            open={openMobileNav}
                        >
                            <Input
                                className="search-input"
                                placeholder="Search For products"
                                type="search"
                                suffix={<SearchOutlined
                                    className="search-icon-input" />}
                            >
                            </Input>

                            {/* <Popover trigger={["hover"]} placement="bottomLeft">
                                <Button className="all-department-btn" icon={<FiGrid />}>
                                    All Departments
                                </Button>
                            </Popover> */}
                            <div className="navbar-links-main">
                                <ul className="dropdown-links">

                                    <Collapse ghost className="mobile-collapse">
                                        <Panel header="Home" key="1">
                                            {homeMenu.map(item => <div>{item.label}</div>)}
                                        </Panel>

                                        <Panel header="Shop" key="2">
                                            {shopMenu.map(item => <div>Home</div>)}
                                        </Panel>

                                        <Panel header="Stores" key="3">
                                            <p>Stores Content</p>
                                        </Panel>

                                        <Panel header="Mega Menu" key="4">
                                            <p>Mega Menu Content</p>
                                        </Panel>

                                        <Panel header="Pages" key="5">
                                            {pages.map(item => <div>{item.label}</div>)}
                                        </Panel>

                                        <Panel header="Account" key="6">
                                            {accountInfo.map(item => <div>{item.label}</div>)}
                                        </Panel>
                                    </Collapse>
                                    {/* 
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
 */}
                                    {/* <li className="dashboard-link">Dashboard</li> */}

                                    {/* <li> */}
                                    {/* Docs */}
                                    {/* </li> */}
                                </ul>
                            </div>
                        </Drawer>
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
                                                                    key={item.id}
                                                                    min={1}
                                                                    mode="spinner"
                                                                    max="10"
                                                                    value={currentValue}
                                                                    onChange={handleQuantityChange}
                                                                    className="input-spinner"
                                                                />
                                                            </Col>

                                                            <Col md={2} span={2}>
                                                                <span>
                                                                    {currentValue * item.price}
                                                                </span>
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


                <nav className="bottom-nav-section">
                    <div className="navbar-default">
                        <Popover trigger={["hover"]} placement="bottomLeft">
                            <Button className="all-department-btn" icon={<FiGrid />}>
                                All Departments
                            </Button>
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
            </div >

            <LoginModal
                isOpenloginModal={open}
                setIsOpenloginModal={setOpen}
            />

            <LocationModal
                isOpenLocationModal={openLocationModal}
                setIsOpenLocationModal={setOpenLocationModal}
            />

            <hr className="nav-divider" />
        </>
    )
}

export default Navbar