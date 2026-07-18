import { Breadcrumb, Button, Col, Divider, message, Popconfirm, Table, Tag } from "antd"
import { useState } from "react";
import "./ShopWishlist.css"
import { PlusOutlined } from "@ant-design/icons";
import { LuTrash2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ShopWishlist = () => {

    const [selectionType, setSelectionType] = useState('checkbox');
    const [messageApi] = message.useMessage();

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };

    const dispatch = useDispatch();

    const cancel = e => {
        messageApi.error('Click on No');
    };

    const columns = [

        {
            title: "",
            dataIndex: "thumbnail",
            render: (img) => {
                return (
                    <img className="wishlist-table-image" src={img} />

                )
            }
        },

        {
            title: "Product",
            dataIndex: 'title',
        },

        {
            title: 'Amount',
            dataIndex: 'price',
            render: (price) => {
                return (
                    <span className="item-price">{price}</span>
                )
            }

        },

        {
            title: "Status",
            dataIndex: 'availabilityStatus',
            render: (status) => {
                return (
                    <Tag className="status-tag">
                        {status}
                    </Tag>
                )
            }

        },

        {
            title: "Actions",
            render: (_, record) => (
                <Button
                    onClick={() => dispatch(addToCart(record))}
                    icon={<PlusOutlined />}
                    className="add-to-cart-btn"
                >Add</Button>
            )
        },

        {
            title: "Remove",
            dataIndex: "remove",
            render: (_, record) => (
                <Popconfirm
                    title="Delete the Product"
                    description="Are you sure to delete this product?"
                    onCancel={cancel}
                    onConfirm={() => {
                        dispatch(removeWishlist(record))
                    }}
                    okText="Yes"
                    cancelText="No"
                >
                    <LuTrash2 className="delete-wishlist-icon" />
                </Popconfirm>
            )

        }
    ]

    const wishlist = useSelector((state) => state.wishlist.items);

    const navigate = useNavigate();
    const itemCount = wishlist.length

    return (
        <div className="section-container">
            <div className="links-parent">
                <Col flex={1}>
                    <Breadcrumb
                        className="page-links-main"
                        items={[
                            {
                                title: <a className="page-links" href="#" onClick={() => navigate("/")}>Home</a>,
                            },

                            {
                                title: <a href="#" onClick={() => navigate("/shop/:shopId")} className="page-links">Shop</a>,
                            },

                        ]}
                    >
                    </Breadcrumb>
                </Col>

            </div>

            <section className="wishlist-section">
                <Col lg={12}>
                    <div className="table-header">
                        <h1> My Wishlist</h1>
                    </div>
                </Col>

                <div className="table-main">
                    <Table
                        key="id"
                        rowSelection={{ type: selectionType, ...rowSelection }}
                        columns={columns}
                        dataSource={wishlist}
                        rowKey="id"
                        className="wishlist-table"
                    >
                    </Table>
                </div>
            </section >

        </div >
    )
}

export default ShopWishlist