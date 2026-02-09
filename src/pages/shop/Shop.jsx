import { Breadcrumb, Button, Card, Col, Input, Menu, Row, Select, } from "antd"
import "./Shop.css"
import { useNavigate, useParams } from "react-router-dom";
import fruitsImg from "../../assets/assortment-fruits-img.png"
import { FaArrowRight } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosList } from "react-icons/io";
import { BiGridAlt } from "react-icons/bi";
import category from '../../components/featuredCategories/category'

const Shop = () => {

    const navigate = useNavigate()
    const { shopId } = useParams();

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

    const handleSelectedProduct = category?.find(item => item.id === Number(shopId));

    const options = [
        {
            value: "10"
        },

        {
            value: "20"
        },

        {
            value: "30"
        },
    ]

    const selectOptions = [
        {
            value: "Price low to high"
        },

        {
            value: "Price high to low"
        },


        {
            value: "Release Date"
        },

        {
            value: "Avg:Rating"
        }
    ]

    return (
        <>
            <div className="section-container">
                <Row gutter={[16, 16]}>
                    <div className="main">
                        <Breadcrumb
                            className="page-links-main"
                            items={[

                                {
                                    title: <a className="page-links" href="" onClick={() => navigate("/")}>Home</a>
                                },

                                {
                                    title: <a className="page-links" href="" onClick={() => navigate("/shop")}>Shop</a>
                                },

                                {
                                    title: <a href="#" className="active-link">Shop Grid</a>
                                }
                            ]}>

                        </Breadcrumb>
                    </div>
                </Row>


                <section className="category-detail-section">
                    <Row gutter={[24, 24]}>
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

                            <div className="fresh-fruits-main">
                                <div className="overlay-content">
                                    <h1>Fresh Fruits</h1>
                                    <p>Get Up to 25% off</p>
                                    <Button icon={<FaArrowRight className="show-now-icon" />
                                    } className="show-now-btn">Shop Now</Button>
                                </div>
                                <img className="fruits-card-image" src={fruitsImg} />
                            </div>
                        </Col>

                        <Col xs={24} md={16}>

                            <Card
                                className="shop-card"
                                title={<h3 className="shop-card-title">{handleSelectedProduct?.title}</h3>}
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

                                    <div className="product-header-filters">
                                        <Select options={options} className="form-select" defaultValue="Show Now"></Select>

                                        <Select
                                            options={selectOptions}
                                            className="form-select"
                                            value="Sort by: Featured"
                                        ></Select>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>

        </>
    )
}

export default Shop