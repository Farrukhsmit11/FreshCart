import "./Navbar.css"
import logo from "../../assets/freshcart-logo.svg"
import { Button, Input, Form as AntForm } from "antd"
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

    const navigate = useNavigate();

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
                        <FaRegHeart className="social-icon" />
                        <FiUser onClick={() => setOpen(true)} className="social-icon" />
                        <FiShoppingBag className="social-icon" />
                    </div>
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