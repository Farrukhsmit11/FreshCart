import HeroCards from "../../components/heroCards/HeroCards"
import { DailyBestSells, FeatureCards, FeaturedCategories, Footer, Navbar, ShopNowCards } from "../../components"
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
    </div>
  )
}

export default Home