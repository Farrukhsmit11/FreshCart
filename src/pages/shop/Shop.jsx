import { Breadcrumb, Button, Card, Checkbox, Col, Input, Menu, Pagination, Rate, Row, Select, } from "antd"
import "./Shop.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fruitsImg from "../../assets/assortment-fruits-img.png"
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import CardMainComponent from "../../components/cardMainComponent/CardMainComponent";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosList } from "react-icons/io";
import { BiGridAlt } from "react-icons/bi";

const Shop = () => {

    const navigate = useNavigate()

    const [value, setValue] = useState(false);


    const desc = [
        'terrible',
        { placement: 'top', title: 'bad', trigger: 'hover' },
        'normal',
        'good',
        'wonderful',
    ];
    function getDescTitle(value, desc) {
        const item = desc?.[value - 1];
        return typeof item === 'object' ? item.title : item;
    }

    const items = [
        {
            key: "sub1",
            label: "Dairy, Bread & Eggs",
            children: [
                { key: "1", label: "Milk" },
                { key: "2", label: "Bread" },
                { key: "3", label: "Eggs" },
                { key: "4", label: "Bread" },
                { key: "5", label: "Buns & Bakery " },
                { key: "6", label: "Butter & More" },
                { key: "7", label: "Cheese" },
                { key: "8", label: "Panner & Tofu" },
                { key: "9", label: "Cream & Whitener" },
                { key: "10", label: "Condensed Milk" },
                { key: "17", label: "Vegan Drinks" },
            ],
        },
        {
            key: "sub2",
            label: "Snacks & Munchies",
            children: [
                { key: "4", label: "Chips" },
                { key: "5", label: "Biscuits" },
            ],
        },
        {
            key: "sub3",
            label: "Fruits & Vegetables",
            children: [
                { key: "6", label: "Fruits" },
                { key: "7", label: "Vegetables" },
            ],
        },
        {
            key: "sub4",
            label: "Cold Drinks & Juices",
            children: [
                { key: "8", label: "Soft Drinks" },
                { key: "9", label: "Juices" },
            ],
        },
        {
            key: "sub5",
            label: "Breakfast & Instant Food",
            children: [
                { key: "10", label: "Cereals" },
                { key: "11", label: "Noodles" },
            ],
        },
        {
            key: "sub6",
            label: "Bakery & Biscuits",
            children: [
                { key: "12", label: "Cakes" },
                { key: "13", label: "Cookies" },
            ],
        },
        {
            key: "sub7",
            label: "Chicken, Meat & Fish",
            children: [
                { key: "14", label: "Chicken" },
                { key: "15", label: "Fish" },
            ],
        },
    ];

    const products = useSelector((state) => state.products.items);
    console.log(products)

    const sortOptions = [
        {
            value: "featured",
            label: "Featured",
        },
        {
            value: "price_low_high",
            label: "Price: Low to High",
        },
        {
            value: "price_high_low",
            label: "Price: High to Low",
        },
        {
            value: "release_date",
            label: "Release Date",
        },
        {
            value: "avg_rating",
            label: "Avg. Rating",
        },
    ];

    const quantityOptions = [
        {
            value: 10,
            label: "10",
        },
        {
            value: 20,
            label: "20",
        },
        {
            value: 30,
            label: "30",
        },
    ];


    return (
        <>
            <div className="main">
                <div className="section-container">
                    <Row gutter={[16, 18]}>

                        <Col span={24}>
                            <Breadcrumb
                                className="routes-links"
                                items={[

                                    {
                                        title: <a href="" onClick={() => navigate("/")}>Home</a>
                                    },

                                    {
                                        title: <a href="" onClick={() => navigate("/shop")}>Shop</a>
                                    },

                                    {
                                        title: "Shop Grid"
                                    }
                                ]}>

                            </Breadcrumb>
                        </Col>

                        <Col xs={24} md={6}>
                            <div className="sidebar-main">
                                <h1 className="menu-title">Categories</h1>
                                <Menu className="sidebar-menu" mode="inline" items={items}></Menu>
                            </div>

                            <div className="stores-section">
                                <h3 className="menu-title">Stores</h3>

                                <div className="input-section">
                                    <Input className="search-store-input" placeholder="Serach Stores"></Input>
                                </div>
                            </div>

                            <div>
                                <h3 className="menu-title">Rating</h3>
                                <div className="form-check-main">
                                    <Checkbox>
                                        <Rate tooltips={desc} onChange={setValue} value={value} />
                                        {value ? <span>{getDescTitle(value, desc)}</span> : null}
                                    </Checkbox>
                                    <Checkbox>
                                        <Rate tooltips={desc} onChange={setValue} value={value} />
                                        {value ? <span>{getDescTitle(value, desc)}</span> : null}
                                    </Checkbox>
                                    <Checkbox>
                                        <Rate tooltips={desc} onChange={setValue} value={value} />
                                        {value ? <span>{getDescTitle(value, desc)}</span> : null}
                                    </Checkbox>
                                </div>
                            </div>

                            <div className="fresh-fruits-main">
                                <div className="overlay-content">
                                    <h1>Fresh Fruits</h1>
                                    <p>Get Up to 25% off</p>
                                    <Button icon={<FaArrowRight className="show-now-icon" />
                                    } className="show-now-btn">Show Now</Button>
                                </div>
                                <div>
                                    <img className="fruits-card-image" src={fruitsImg} />
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} md={17}>

                            <Card
                                className="shop-card"
                            >
                            </Card>

                            <div className="products-main">
                                <div className="products-header">
                                    <p>26 Products found</p>
                                </div>

                                <div className="product-listing-controls">
                                    <div className="icons-main">
                                        <BsGrid3X3Gap className="list-icon" />
                                        <BiGridAlt className="list-icon" />
                                        <IoIosList className="list-icon" />
                                    </div>

                                    <div className="filters">
                                        <Select className="form-select" defaultValue={value} options={quantityOptions}></Select>
                                        <Select className="form-select" defaultValue={value} options={sortOptions}></Select>
                                    </div>
                                </div>
                            </div>


                            <CardMainComponent data={products} />

                        </Col>





                    </Row>

                </div>


            </div>

        </>


    )
}

export default Shop