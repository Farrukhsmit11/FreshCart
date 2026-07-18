import { Breadcrumb, Button, Card, Col, Drawer, Input, Menu, Row, Select, } from "antd"
import "./Shop.css"
import { useNavigate, useParams } from "react-router-dom";
import fruitsImg from "../../assets/assortment-fruits-img.png"
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosArrowRoundForward, IoIosList } from "react-icons/io";
import { BiFilterAlt, BiGridAlt } from "react-icons/bi";
import categories from '../../components/featuredCategories/categories'
import ShopProducts from "../../components/shopProducts/ShopProducts"
import { useState } from "react";
import { items, options, selectOptions } from "./data";

const Shop = () => {

    const navigate = useNavigate();
    const { shopId } = useParams();

    const [openFiltersDrawer, setOpenFiltersDrawer] = useState(false);
    const [selectValue, setSelectValue] = useState(null);

    const handleSelectedCategory = categories?.find(item => item.id === Number(shopId));

    return (
        <>
            <div className="section-container">
                <Row gutter={[16, 16]}>
                    <div className="main">
                        <Col span={24}>
                            <Breadcrumb
                                className="page-links-main"
                                items={[

                                    {
                                        title: <a className="page-links" href="#" onClick={() => navigate("/")}>Home</a>
                                    },
                                ]}>
                            </Breadcrumb>
                        </Col>
                    </div>
                </Row>
            </div>

            <div className="category-section-main">
                <div className="section-container">
                    <Row gutter={[48, 48]}>
                        <Col xs={0} md={6}>
                            <div className="sidebar-main">
                                <h1 className="menu-title">Categories</h1>
                                <Menu className="sidebar-menu" mode="inline" items={items}></Menu>
                            </div>

                            <div className="stores-section">
                                <h3 className="menu-title">Stores</h3>

                                <div className="input-section">
                                    <Input className="search-store-input" placeholder="Serach by Stores"></Input>
                                </div>
                            </div>

                            <div className="fruits-card-main">
                                <div className="card-overlay">
                                    <h3>Fresh Fruits</h3>
                                    <p>Get up to 35% Off</p>
                                    <Button className="fresh-fruits-btn" icon={<IoIosArrowRoundForward className="fruits-arrow-icon" />}>Shop Now</Button>
                                </div>
                                <img className="fruits-img" src={fruitsImg} alt="Fruits" />
                            </div>
                        </Col>

                        <Col xs={24} md={18}>
                            <Card
                                className="shop-card"
                                title={<h3>
                                    {handleSelectedCategory ? <h3 className="selected-category-title">{handleSelectedCategory.title}</h3> : <h3 className="selected-category-title">All Categories</h3>}
                                </h3>}
                            >
                            </Card>

                            <div className="listing-controls">
                                <div className="listing-controls-header">
                                    <p>26 Products found</p>
                                </div>

                                <div className="listing-controls-body">
                                    <div className="filters-main">
                                        <div className="icons">
                                            <IoIosList className="list-menu-icon" />
                                            <BiGridAlt className="list-icon" />
                                            <BsGrid3X3Gap className="list-icon" />
                                        </div>
                                    </div>

                                    <Select
                                        options={options}
                                        className="form-select"
                                        value={selectValue}
                                        placeholder={
                                            <span className="form-select-placeholder">Show: 12</span>
                                        }
                                        defaultValue="Show Now">
                                    </Select>

                                    <Select
                                        options={selectOptions}
                                        className="form-select"
                                        value={selectValue}
                                        placeholder={
                                            <span className="form-select-placeholder">Sort By: Featured</span>
                                        }
                                    ></Select>
                                </div>
                            </div>
                            <ShopProducts limit="8" />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Shop