import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Breadcrumb, Button, Col, Descriptions, Dropdown, InputNumber, Rate, Row, Select, Slider, Tabs } from 'antd';
import "./ProductDetail.css"
import "react-image-gallery/styles/css/image-gallery.css";
import { fetchProducts } from '../../store/productSlice/ProductSlice';
import "react-image-gallery/styles/css/image-gallery.css";
import { LuShoppingBag } from 'react-icons/lu';
import { IoGitCompareOutline } from 'react-icons/io5';
import { HeartOutlined } from '@ant-design/icons';
import InformationView from './informationView/InformationView';
import { addToCart } from "../../store/cartSlice/CartSlice"
import { addToWishlist } from "../../store/wishlistSlice/WishlistSlice"
import ReviewView from './reviewView/ReviewView';
import ProductView from './productView/ProductView'
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import PopularProducts from "../../components/popularProducts/PopularProducts"


const ProductDetail = () => {
    const { productId } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const products = useSelector((state) => state.products.items);

    const selectedProduct = products?.find(item => item.id === Number(productId))

    const weights = [
        {
            value: "250g"
        },

        {
            value: "500g"
        },

        {
            value: "1kg"
        }
    ]

    const onChange = value => {
        console.log('changed', value);
    };

    const handleTabs = key => {
        console.log(key);
    };

    const handleSelect = value => {
        console.log(`selected ${value}`)
    }

    const tabItems = [

        {
            key: "1",
            label: "Product Details",
            children: <ProductView />
        },

        {
            key: "2",
            label: "Information",
            children: <InformationView product={selectedProduct} />
        },

        {
            key: "3",
            label: "Reviews",
            children: <ReviewView product={selectedProduct} />
        }
    ];

    const dropdownItems = [
        {
            value: "Facebook",
            label: (
                <div className='dropdown-item'>
                    <FaFacebook className='dropdown-icon' />
                    Facebook
                </div>
            )
        },
        {
            value: "Instagram",
            label: (
                <div className='dropdown-item'>
                    <FaInstagram className='dropdown-icon' />
                    Instagram
                </div>
            )
        },
        {
            value: "Twitter",
            label: (
                <div className='dropdown-item'>
                    <FaTwitter className='dropdown-icon' />
                    Twitter
                </div>
            )
        }
    ];

    return (
        <>
            <div className='section-container'>
                <div className='route-links-main'>
                    <Breadcrumb
                        className="routes-links"
                        items={[

                            {
                                title: <a href="" onClick={() => navigate("/")}>Home</a>
                            },

                            {
                                title: <a href="" onClick={() => navigate("/shop")}>Shop</a>
                            },
                        ]}>

                    </Breadcrumb>
                </div>

                <div className='product-detail-main'>
                    <Row gutter={[16, 16]}>

                        <Col md={12}>
                            <img src={selectedProduct?.thumbnail} />
                        </Col>

                        <Col md={12}>
                            <div className="product-detail-content">
                                <p className='product-detail-description'>{selectedProduct?.category}</p>
                                <h1 className='product-detail-title'>{selectedProduct?.title}</h1>

                                <div className='detail-info'>
                                    <Rate className='product-detail-rate' defaultValue={3} allowClear={false} />
                                </div>

                                <span className='product-price'>
                                    {selectedProduct?.price}
                                </span>

                                <hr className='divider' />

                                <div className='weight-buttons-main'>
                                    {weights.map((quantity, index) => {
                                        return (
                                            <Button key={index} className='weight-button'>
                                                {quantity.value}
                                            </Button>
                                        )
                                    })}

                                </div>

                                <div className="input-price-main">
                                    <InputNumber
                                        mode="spinner"
                                        min="1"
                                        max="10"
                                        defaultValue="1"
                                        onChange={onChange}
                                        className='input-price-spinner'
                                    />
                                </div>

                                <div className='product-actions'>
                                    <Button
                                        className='add-product-btn'
                                        onClick={() => dispatch(addToCart(selectedProduct))}
                                        icon={<LuShoppingBag className='add-to-cart-icon' />
                                        }>Add To cart</Button>

                                    <Button className='product-detail-btn' icon={<IoGitCompareOutline />}></Button>

                                    <Button
                                        onClick={() => dispatch(addToWishlist(selectedProduct))}
                                        className='product-detail-btn'
                                        icon={<HeartOutlined />}></Button>

                                </div>

                                <hr className='divider' />

                                <Descriptions
                                    bordered
                                    column={1}
                                    size="middle"
                                >
                                    <Descriptions.Item
                                        label="Product Code"
                                    >
                                        {selectedProduct?.sku}

                                    </Descriptions.Item>

                                    <Descriptions.Item
                                        label="Stock"
                                    >
                                        {selectedProduct?.availabilityStatus}

                                    </Descriptions.Item>

                                    <Descriptions.Item
                                        label="Type"
                                    >
                                        {selectedProduct?.category}
                                    </Descriptions.Item>

                                    <Descriptions.Item
                                        label="Shipping"
                                    >
                                        {selectedProduct?.shippingInformation}
                                    </Descriptions.Item>

                                </Descriptions>

                                <div className='dropdown-main'>
                                    <Select
                                        onChange={handleSelect}
                                        defaultValue="Share" options={dropdownItems}></Select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


                <section className='tabs-section'>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Tabs
                                className='table-tabs-view'
                                defaultActiveKey="1"
                                items={tabItems}
                                onChange={handleTabs} />
                        </Col>
                    </Row>
                </section>
            </div>

            <div>
                <PopularProducts limit={5} />
            </div>
        </>
    )
}

export default ProductDetail