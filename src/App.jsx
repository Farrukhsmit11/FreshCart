import { useEffect, useState } from "react"
import "./App.css"
import { DailyBestSells, FeatureCards, FeaturedCategories, HeroCards, Navbar, PageHeader, ShopNowCards } from "./components"
import Loader from "./components/loader/Loader";
import PopularCards from "./uiComponents/popularCards/PopularCards"

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
      <HeroCards />
      <FeaturedCategories />
      <ShopNowCards />
      <PopularCards />
      <DailyBestSells />
      <FeatureCards />
    </>
  )
}

export default App
