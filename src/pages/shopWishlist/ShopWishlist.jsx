import { Breadcrumb, Divider, Radio, Table } from "antd"
import { useState } from "react";
import "./ShopWishlist.css"

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

        },
    ]

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sydney No. 1 Lake Park',
        },
    ];


    return (
        <div className="container">
            <div className="row">
                <div className="shop-wishlist-main col-lg-12">
                    <Breadcrumb
                        className="links-crumb"
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
                            dataSource={data}
                        />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default ShopWishlist