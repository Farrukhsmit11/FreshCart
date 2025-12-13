import HeroCards from "../../components/heroCards/HeroCards"
import { DailyBestSells, FeatureCards, FeaturedCategories, Footer, Navbar, ShopNowCards } from "../../components"
import CardWrapper from "../../uiComponents/cardWrapper/CardWrapper"
import PopularProducts from "../../components/popularProducts/PopularProducts"

const Home = () => {
  return (
    <div>
      <HeroCards />
      <FeaturedCategories />
      <ShopNowCards />
      <PopularProducts />
      <DailyBestSells />
      <FeatureCards />
      <Footer />
    </div>
  )
}

export default Home