import { Breadcrumb, Button, Card, Col, Input, Menu, Row, Select, } from "antd"
import "./Shop.css"
import { useNavigate, useParams } from "react-router-dom";
import fruitsImg from "../../assets/assortment-fruits-img.png"
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoIosList } from "react-icons/io";
import { BiGridAlt } from "react-icons/bi";
import category from '../../components/featuredCategories/category'
import PopularProducts from "../../components/popularProducts/PopularProducts"

const Shop = () => {

    const navigate = useNavigate();
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

    const handleSelectedCategory = category?.find(item => item.id === Number(shopId));

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
                                    title: <a className="page-links" href="#" onClick={() => navigate("/")}>Home</a>
                                },

                                {
                                    title: <a className="page-links" href="#" onClick={() => navigate("/shop")}>Shop</a>
                                },
                            ]}>
                        </Breadcrumb>
                    </div>
                </Row>
            </div>

            <div className="category-section-main">
                <div className="section-container">
                    <Row gutter={[48, 48]}>
                        <Col xs={24} md={6}>
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
                                    <Button className="fresh-fruits-btn">Shop Now</Button>
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

                                <div className="filters-main">

                                    <div className="icons">
                                        <div>
                                            <BsGrid3X3Gap className="list-icon" />
                                            <BiGridAlt className="list-icon" />
                                            <IoIosList className="list-icon" />
                                        </div>
                                    </div>

                                    <Select
                                        options={options}
                                        className="form-select"
                                        defaultValue="Show Now">
                                    </Select>

                                    <Select
                                        options={selectOptions}
                                        className="form-select"
                                        value="Sort by Featured"
                                    ></Select>
                                </div>
                            </div>

                            <div>
                                <PopularProducts limit="8" showTitle={false} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Shop