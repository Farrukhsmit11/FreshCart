import HeroCards from "../../components/heroCards/HeroCards"
import { DailyBestSells, FeatureCards, FeaturedCategories, Footer, Navbar, PageHeader, ShopNowCards , PopularProducts } from "../../components"

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