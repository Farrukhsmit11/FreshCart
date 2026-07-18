import { useEffect, useState } from "react"
import "./App.css"
import { AuthBanner, Footer, Navbar, PageHeader } from "./components"
import Loader from "./components/loader/Loader";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Shop, ShopWishlist, ShopCheckout, SignUp, Login } from "./pages"
import Home from "./pages/home/Home"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { FloatButton } from "antd";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbShoppingCartShare } from "react-icons/tb";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])


  if (loading) {
    return <Loader />
  }

  return (
    <>

      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop/:shopId" element={<Shop />}></Route>
        <Route path="/shopWishlist" element={<ShopWishlist />}></Route>
        <Route path="/shopCheckout" element={<ShopCheckout />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>

    </>
  )
}

export default App
