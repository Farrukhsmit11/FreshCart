import { Breadcrumb, Button, Divider, Popconfirm, Radio, Row, Table } from "antd"
import { useState } from "react";
import "./ShopWishlist.css"
import { useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { BiSolidTrashAlt } from "react-icons/bi";

const ShopWishlist = () => {

    const [selectionType, setSelectionType] = useState('checkbox');

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };

    const confirm = e => {
        console.log(e);
        messageApi.success('Click on Yes');
    };
    const cancel = e => {
        console.log(e);
        messageApi.error('Click on No');
    };

    const columns = [
        {
            title: "Product",
            dataIndex: 'product',

        },

        {
            title: 'Amount',
            dataIndex: 'amount',

        },

        {
            title: "Status",
            dataIndex: 'status',

        },

        {
            title: "Actions",
            dataIndex: 'actions',
            render: () => (
                <Button
                    icon={<PlusOutlined />}
                    className="add-to-cart-btn"
                >Add</Button>
            )
        },

        {
            title: "Remove",
            dataIndex: "remove",
            render: (_,) => [
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <BiSolidTrashAlt />
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
                    <p>There are 4 products in this wishlist.</p>
                </div>

                <div className="table-main">

                    <Divider />
                    <Table
                        rowSelection={{ type: selectionType, ...rowSelection }}
                        columns={columns}
                        dataSource={wishlist}
                    >

                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ShopWishlist