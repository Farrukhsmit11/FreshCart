import "./CartDrawer.css";
import { Drawer } from "antd"

const CartDrawer = ({ isOpenCartDrawer, setIsOpenCartDrawer }) => {
    return (
        <Drawer
            width={560}
            open={isOpenCartDrawer}
            onClose={() => setIsOpenCartDrawer(false)}
            className="products-drawer"
        >
        </Drawer>
    );
};

export default CartDrawer;