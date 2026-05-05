import { Alert, Button, Col, Drawer, InputNumber, Result, Row } from "antd";
import "./CartDrawer.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuTrash2 } from "react-icons/lu";
import { removeItem } from "../../store/cartSlice/CartSlice";

const CartDrawer = ({ isOpenCartDrawer, setIsOpenCartDrawer }) => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);
    const [IsCartItems, setIsCartItems] = useState(cartItems);
    const [isItemCount, setIsItemCount] = useState(1);
    const [showCartDrawer, setShowCartDrawer] = useState(false);

    const navigate = useNavigate();

    const itemCount = cartItems.length

    const dispatch = useDispatch();

    const manageQuantity = (id, quantity) => {
        // agar item.id match krti ha id ke toh ye ek new object create krega {...item} with the new quantity
        // const cartTemp = cartItems.map((item) => {
        //     if (item.id === id) {
        //         return {
        //             ...item,
        //             quantity: quantity,
        //         };
        //     }
        //     return item;
        // })
        // console.info('cartTemp', cartTemp)

        const existingItem = quantity.find((item => item.id === id))
        if (existingItem) {
            existingItem.quantity += 1
        }

        const data = JSON.parse().localStorage.getItem('quantity');
        const pre = data.find(item => item.id === id).quantity
        const setData = { id: id, quantity: data ? data + 1 : 1 }
        localStorage.setItem('quantity', data)
        // setIsCartItems(cartTemp);
    }

    const findQuantityById = (id) => {
        const data = localStorage.getItem('quantity')
        const a = data.find(item => item.id === id)
        return a
    }

    return (
        <Drawer
            width={560}
            onClose={() => setIsOpenCartDrawer(false)}
            className="products-drawer"
            title={<span><h1 className="drawer-title">Shop Cart</h1>
                <p className="products-drawer-desc">Location in 382480</p>
            </span>}
            open={isOpenCartDrawer}
        >
            {itemCount > 0 ? (
                <div>
                    <Alert
                        title={
                            <span className="alert-content">
                                You’ve got FREE delivery. Start shopping!
                                <a
                                    href="#"
                                    className="checkout-now-link"

                                    onClick={() => {
                                        navigate("/shopCheckout")
                                        setShowCartDrawer(false);
                                    }
                                    }
                                >checkout now</a>
                            </span>
                        }
                        type="success" className="free-delivery-alert" />

                    {cartItems.map((item) => {
                        return (
                            <>
                                <ul className="list-main" key={item.id}>
                                    <li className="list-item">
                                        <div className="list-item-group-main">
                                            <Row gutter={[16, 16]} align="middle">
                                                <Col lg={12} md={6} span={6}>
                                                    <div className="list-item-content">
                                                        <img
                                                            alt={item.title}
                                                            className="cart-drawer-image"
                                                            src={item.thumbnail} />

                                                        <div className="list-item-right">
                                                            <h6>{item.title}</h6>

                                                            <div className="delete-main">
                                                                <a
                                                                    onClick={() => {
                                                                        dispatch(removeItem(item))
                                                                    }
                                                                    }

                                                                    className="remove-btn" href="#">
                                                                    <LuTrash2 className="delete-icon" />
                                                                    Remove
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col xs={12} sm={12} md={6} lg={10}>
                                                    <InputNumber
                                                        key={item.id}
                                                        min={1}
                                                        mode="spinner"
                                                        max="10"
                                                        defaultValue="1"
                                                        value={() => manageQuantity(item.id)}
                                                        className="input-spinner"
                                                    />
                                                </Col>

                                                <span>
                                                    {(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}
                                                </span>
                                            </Row>
                                        </div>
                                    </li>
                                </ul>
                            </>
                        )
                    })
                    }

                    <div className="cart-drawer-buttons-main">
                        <Button
                            onClick={() => {
                                navigate("/shop/shopId")
                                setShowCartDrawer(false)
                            }
                            }
                            className="continue-shopping-btn">Continue Shopping</Button>

                        <Button
                            onClick={() => {
                                setShowCartDrawer(false)
                                navigate("/shopCheckout")
                            }
                            }
                            className="proceed-to-checkout-btn">Proceed to Checkout</Button>
                    </div>
                </div>
            ) : (
                <Result
                    extra={
                        <>
                            <h1 className="cart-drawer-title">Opps</h1>
                            <p className="cart-drawer-description">Your cart is empty</p>
                            <Button
                                onClick={() => {
                                    navigate("/shop/:shopId")
                                    setShowCartDrawer(false)
                                }}
                                className="cart-shop-now-btn" key="console">
                                Shop Now
                            </Button>
                        </>
                    }
                />
            )}
        </Drawer>
    )
}

export default CartDrawer