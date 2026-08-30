import { HeroCards, DailyBestSells, FeatureCards, FeaturedCategories, ShopNowCards, PopularProducts, Navbar, PageHeader } from "../../components"

const Home = () => {
  return (
    <div>
      <PageHeader />
      <Navbar />
      <HeroCards />
      {/* <FeaturedCategories /> */}
      {/* <ShopNowCards /> */}
      <PopularProducts />
      {/* <DailyBestSells /> */}
      <FeatureCards />
    </div>
  )
}

export default Home