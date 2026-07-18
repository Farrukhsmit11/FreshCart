import { SearchOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, Input } from 'antd'
import React, { useState } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import logo from "../../assets/freshcart-logo.svg"
import { FiGrid, FiShoppingCart, FiUser } from "react-icons/fi";
import { homeMenu, shopMenu, storesData, accountInfo, pages } from '../navbar/helper';

const MobileDrawer = ({ isOpenMobileDrawer, setOpenMobileDrawer }) => {

    return (
        <div>
            {/* Mobile  */}
            <div className="mobile-nav-section">
                <Drawer
                    placement="left"
                    title={<img src={logo}></img>}
                    closable={{ 'aria-label': 'Close Button' }}
                    onClose={() => setOpenMobileDrawer(false)}
                    className="mobile-nav-drawer"
                    open={isOpenMobileDrawer}
                >
                    <Input
                        className="search-input"
                        placeholder="Search For products"
                        type="search"
                        suffix={<SearchOutlined
                            className="search-icon-input" />}
                    >
                    </Input>

                    <Button className="all-departments-btn" icon={<FiGrid />}>
                        All Departments
                    </Button>

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

                            <li>Dashboard</li>
                            <li>
                                Docs
                            </li>
                        </ul>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default MobileDrawer