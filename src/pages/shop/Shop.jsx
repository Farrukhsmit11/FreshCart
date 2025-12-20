import { Breadcrumb, Button, Card, Checkbox, Col, Input, InputNumber, Menu, Rate, Select, Slider } from "antd"
import "./Shop.css"
import { useState } from "react";
import fruitsImg from "../../assets/assortment-fruits-img.png"
import { IoGridOutline } from "react-icons/io5";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { UnorderedListOutlined } from "@ant-design/icons";
import CardWrapper from "../../uiComponents/cardWrapper/CardWrapper";
import {products} from "../../uiComponents/cardWrapper/products.js"

const Shop = () => {
    const [inputValue, setInputValue] = useState(1);
    
    const onChange = newValue => {
        setInputValue(newValue);
    };

    const items = [
        {
            key: "sub1",
            label: "Dairy, Bread & Eggs",
            children: [
                { key: "1", label: "Milk" },
                { key: "2", label: "Bread" },
                { key: "3", label: "Eggs" },
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




    return (

        <div className="container">
            <div className="row">
                <div className="nav-main">
                    <div className="col">
                        <Breadcrumb
                            className="nav-links"
                            items={[
                                {
                                    title: <a href="">Shop</a>
                                }
                            ]}>

                        </Breadcrumb>
                    </div>
                </div>

                <div className="sider-main">
                    <div className="sidebar-menu-section">
                        <h1 className="menu-title">Categories</h1>
                        <Menu
                            className="sidebar-menu col"
                            mode="inline"
                            items={items}>

                        </Menu>
                    </div>


                    <div className="stores-section">

                        <h1 className="shop-title">Stores</h1>

                        <Input placeholder="Search By Store" className="shop-input"></Input>

                    </div>

                    <div className="price-slider">

                        <h1 className="shop-title">Price</h1>

                        <Col span={12}>
                            <Slider
                                className="price-range-slider"
                                min={30}
                                max={50}
                                onChange={onChange}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                            />
                        </Col>

                        <Col span={4}>
                            <InputNumber
                                min={50}
                                max={20}
                                style={{ margin: '0 16px' }}
                                value={inputValue}
                                onChange={onChange}
                                defaultValue={60}
                            />
                        </Col>
                    </div>


                    <div className="form-check-main">
                        <h1 className="shop-title">Rating</h1>
                        <Checkbox className="checkbox-input"><Rate className="text-warning"></Rate></Checkbox>
                        <Checkbox className="checkbox-input"><Rate className="text-warning"></Rate></Checkbox>
                        <Checkbox className="checkbox-input"><Rate className="text-warning"></Rate></Checkbox>
                        <Checkbox className="checkbox-input"><Rate className="text-warning"></Rate></Checkbox>
                    </div>

                    <div className="fresh-fruits-main">
                        <img className="fruits-card-image" src={fruitsImg} />
                        <div className="overlay-content">
                            <h1>Fresh Fruits</h1>
                            <p>Get Upto 25% Off</p>
                            <Button className="shop-now-btn">Shop Now</Button>
                        </div>
                    </div>
                </div>

                <section className="product-listing-section col-lg-9 col-md-12">
                    <div className="card">
                        <h1>Snack & Munchies</h1>
                    </div>

                    <div className="product-listing-controls">
                        <p>26 Products Found</p>

                        <div className="filters">

                            <UnorderedListOutlined />
                            <IoGridOutline />
                            <TfiLayoutGrid3 />

                            <Select
                                // className="form-select"
                                placeholder="Show:10"
                                style={{ width: 120 }}
                            />

                            <Select
                                className="form-select"
                                placeholder="Sort By: Featured"

                            />

                        </div>
                    </div>


                    <CardWrapper data={products}/>
                </section>

            </div>

        </div>

    )
}

export default Shop