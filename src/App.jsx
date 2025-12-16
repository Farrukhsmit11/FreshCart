  import { useEffect, useState } from "react"
  import "./App.css"
  import { Footer, Navbar, PageHeader } from "./components"
  import Loader from "./components/loader/Loader";
  import { Route, Routes } from "react-router-dom";
  import { Shop, ShopWishlist, SignIn, ForgotPassword } from "./pages"
  import Home from "./pages/home/Home"

  function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    if (loading) {
      return <Loader />
    }

    return (
      <>

        <PageHeader />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shopWishlist" element={<ShopWishlist />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>

        </Routes>

        <Footer />
      </>
    )
  }

  export default App
