import { Breadcrumb, Layout, Menu } from "antd"
import "./Shop.css"
import Sider from "antd/es/layout/Sider"

const Shop = () => {

    const menuItems = [
        { key: "1", label: "Dairy, Bread & Eggs" },
        { key: "2", label: "Snacks & Munchies" },
        { key: "3", label: "Fruits & Vegetables" },
        { key: "4", label: "Cold Drinks & Juices" },
        { key: "5", label: "Breakfast & Instant Food" },
        { key: "6", label: "Bakery & Biscuits" },
        { key: "7", label: "Chicken, Meat & Fish" },
    ];


    return (
        <div className="container">
            <div className="row">
                <div className="shop-page-main">
                    <Breadcrumb
                        className="social-links"
                        items={[
                            {
                                title: 'Home',
                            },

                            {
                                title: <a href="">Shop Grid</a>,
                            }
                        ]}
                    />
                    <Layout>
                        <Sider style={{ background: "#fff" }}
                            width={260} trigger={null}>

                            <h3>Categories</h3>

                            <div className="demo-logo-vertical" />

                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                items={menuItems}
                            />
                        </Sider>
                    </Layout>
                </div>
            </div>
        </div>
    )
}

export default Shop