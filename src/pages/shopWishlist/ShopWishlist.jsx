import { Breadcrumb, Button, Divider, message, Popconfirm, Radio, Row, Table } from "antd"
import { useState } from "react";
import "./ShopWishlist.css"
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { LuTrash2 } from "react-icons/lu";
import { removeItem } from "../../store/wishlistSlice/WishlistSlice";
import { addToCart } from "../../store/cartSlice/CartSlice"

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
            title: "Product",
            dataIndex: 'title',
        },

        {
            title: 'Amount',
            dataIndex: 'price',

        },

        {
            title: "Status",
            dataIndex: 'availabilityStatus',

        },

        {
            title: "Actions",
            dataIndex: 'actions',
            render: (_, record) => (
                <div>
                    <Button
                        onClick={() => dispatch(addToCart(record.id))}
                        icon={<PlusOutlined />}
                        className="add-to-cart-btn"
                    >Add</Button>
                </div>

            )
        },

        {
            title: "Remove",
            dataIndex: "remove",
            render: (_, record) => [
                <Popconfirm
                    key={record.id}
                    title="Delete the Product"
                    description="Are you sure to delete this product?"
                    onConfirm={() => dispatch(removeItem(record.id))}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <LuTrash2 className="delete-wishlist-icon" />
                </Popconfirm>
            ]
        }
    ]

    const wishlist = useSelector((state) => state.wishlist.items)

    return (
        <div className="section-container">
            <div className="shop-wishlist-main">
                <Breadcrumb
                    className="routes-links"
                    items={[
                        {
                            title: 'Home',
                        },

                        {
                            title: <a href="">Shop Wishlist</a>,
                        }

                    ]}
                >
                </Breadcrumb>

                <div className="table-header">
                    <h1> My Wishlist</h1>
                </div>

                <div className="table-main">
                    <Divider />

                    <Table
                        rowSelection={{ type: selectionType, ...rowSelection }}
                        columns={columns}
                        dataSource={wishlist}
                        rowKey="id"
                    >
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ShopWishlist