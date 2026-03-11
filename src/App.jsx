import { useEffect, useState } from "react"
import "./App.css"
import { AuthBanner, Footer, Navbar, PageHeader } from "./components"
import Loader from "./components/loader/Loader";
import { Route, Routes, useLocation } from "react-router-dom";
import { Shop, ShopWishlist, SignIn, ForgotPassword, ProductDetail, ShopCheckout } from "./pages"
import Home from "./pages/home/Home"
import "./Media.css"
import ScrollToTop from "./scrollToTop/ScrollToTop";

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
  const IsSignInPage = location.pathname === '/signIn' || location.pathname === '/forgotPassword'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
