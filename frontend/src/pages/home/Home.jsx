import { HeroCards, DailyBestSells, FeatureCards, FeaturedCategories, ShopNowCards, PopularProducts } from "../../components"

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