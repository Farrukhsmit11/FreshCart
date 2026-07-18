import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Drawer, Badge, Row, Col, Popover, Result, InputNumber, Dropdown, Collapse, Alert } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from "react"
import { FiGrid, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { GrLocation } from "react-icons/gr";
import { LuTrash2 } from "react-icons/lu"
import LocationModal from "../locationModal/LocationModal"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineMenuFold } from "react-icons/ai"
import { homeMenu, shopMenu, storesData, pages, content, accountInfo } from "./helper"
import CartDrawer from "../cartDrawer/CartDrawer"
import MobileDrawer from "../../components/mobileDrawer/MobileDrawer"

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [openLocationModal, setOpenLocationModal] = useState(false);
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const [openCartDrawer, setOpenCartDrawer] = useState(false);


    const navigate = useNavigate();

    return (
        <>
            <div className="section-container">
                <Row gutter={[
                    { xs: 0, sm: 0, md: 0, lg: 8 },
                    0
                ]}>
                    <nav className="navbar">
                        <Col xxl={3} lg={6} md={6} xs={10}>
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
                                showZero
                                className="count-badge"
                            >
                                <FiShoppingCart
                                    className="social-icon"
                                    onClick={() => setOpenCartDrawer(true)} />
                            </Badge>
                        </div>

                        <Button
                            onClick={() => setOpenMobileNav(true)}
                            icon={<AiOutlineMenuFold className="menu-icon" />}
                            className="menu-btn"
                        ></Button>

                        <MobileDrawer />
                    </nav>
                </Row>
            </div>

            <div className="section-container">
                <nav className="bottom-nav-section">
                    <div className="navbar-default">
                        <Popover trigger={["hover"]} placement="bottomLeft" content={content()}>
                            <Button className="all-departments-btn" icon={<FiGrid />}>
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

                            <Dropdown menu={{ items: storesData }} trigger="hover">
                                <li>
                                    Stores   <IoIosArrowDown />
                                </li>
                            </Dropdown>

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
            </div>

    

            <CartDrawer
                isOpenCartDrawer={openCartDrawer}
                setIsOpenCartDrawer={setOpenCartDrawer}
            />

            <MobileDrawer
                isOpenMobileDrawer={openMobileNav}
                setOpenMobileDrawer={setOpenMobileNav}
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