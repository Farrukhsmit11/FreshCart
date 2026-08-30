import { Route, Routes } from 'react-router-dom'
import { ShopCheckout, ShopWishlist, Shop } from '../pages'
import Home from "../pages/home/Home"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path="/shop/:shopId" element={<Shop />}></Route>
            <Route path="/shopWishlist" element={<ShopWishlist />}></Route>
            <Route path="/shopCheckout" element={<ShopCheckout />}></Route>
        </Routes>

    )
}

export default AppRoutes