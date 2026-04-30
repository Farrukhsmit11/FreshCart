import { useEffect, useState } from "react"
import "./App.css"
import { AuthBanner, Footer, Navbar, PageHeader } from "./components"
import Loader from "./components/loader/Loader";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Shop, ShopWishlist, SignIn, ForgotPassword, ProductDetail, ShopCheckout, SignUp } from "./pages"
import Home from "./pages/home/Home"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { FloatButton } from "antd";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbShoppingCartShare } from "react-icons/tb";
import "./Media.css"

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

  const location = useLocation();
  const IsSignInPage = location.pathname === '/signIn' || location.pathname === '/forgotPassword' || location.pathname === "/signUp"

  return (
    <>
      {IsSignInPage ? (
        <AuthBanner />
      ) : (
        <>
          <PageHeader />
          <Navbar />
        </>
      )}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop/:shopId" element={<Shop />}></Route>
        <Route path="/shopWishlist" element={<ShopWishlist />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/productDetail/:productId" element={<ProductDetail />}></Route>
        <Route path="/shopCheckout" element={<ShopCheckout />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>

      <FloatButton
        shape="square"
        type="secondary"
        href="https://codescandy.com/"
        target="_blank"
        className="custom-float-button"
        style={{ insetInlineEnd: 24 }}
        description={
          <div className="button-description-main">
            <TbShoppingCartShare className="float-button-icon" />
            <span className="custom-description">Buy Now</span>
          </div>
        }
      />

      <Footer />
    </>
  )
}

export default App
