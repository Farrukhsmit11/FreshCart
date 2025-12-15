import { Breadcrumb, Layout, Menu } from "antd"
import "./Shop.css"
const { Header, Footer, Sider, Content } = Layout;

const Shop = () => {

    // const items = [
    //     {
    //         key: "sub1",
    //         label: "Dairy, Bread & Eggs",
    //         children: [
    //             { key: "1", label: "Milk" },
    //             { key: "2", label: "Bread" },
    //             { key: "3", label: "Eggs" },
    //         ],
    //     },
    //     {
    //         key: "sub2",
    //         label: "Snacks & Munchies",
    //         children: [
    //             { key: "4", label: "Chips" },
    //             { key: "5", label: "Biscuits" },
    //         ],
    //     },
    //     {
    //         key: "sub3",
    //         label: "Fruits & Vegetables",
    //         children: [
    //             { key: "6", label: "Fruits" },
    //             { key: "7", label: "Vegetables" },
    //         ],
    //     },
    //     {
    //         key: "sub4",
    //         label: "Cold Drinks & Juices",
    //         children: [
    //             { key: "8", label: "Soft Drinks" },
    //             { key: "9", label: "Juices" },
    //         ],
    //     },
    //     {
    //         key: "sub5",
    //         label: "Breakfast & Instant Food",
    //         children: [
    //             { key: "10", label: "Cereals" },
    //             { key: "11", label: "Noodles" },
    //         ],
    //     },
    //     {
    //         key: "sub6",
    //         label: "Bakery & Biscuits",
    //         children: [
    //             { key: "12", label: "Cakes" },
    //             { key: "13", label: "Cookies" },
    //         ],
    //     },
    //     {
    //         key: "sub7",
    //         label: "Chicken, Meat & Fish",
    //         children: [
    //             { key: "14", label: "Chicken" },
    //             { key: "15", label: "Fish" },
    //         ],
    //     },
    // ];

    return (

        <main>
            <div className="nav-main">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb
                                items={[
                                    {
                                        title: <a href="">Shop</a>,
                                    },
                            
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="sidebar-main">
                {/* <Layout>
                   
                    <div style={{ padding: '0 48px' }}>
                        <Breadcrumb
                            style={{ margin: '16px 0' }}
                            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                        />
                        <Layout
                        >
                            <Sider width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                />
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                        </Layout>
                    </div>

                </Layout> */}
            </div>
        </main>





    )
}

export default Shop