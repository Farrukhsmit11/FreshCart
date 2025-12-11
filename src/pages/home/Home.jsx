import PageHeader from "../../components/pageHeader/PageHeader"
import HeroCards from "../../components/heroCards/HeroCards"
import { DailyBestSells, FeaturedCategories, PopularProducts, ShopNowCards } from "../../components"

const Home = () => {
  return (
    <div>
      <PageHeader />
      <HeroCards />
      <FeaturedCategories />
      <ShopNowCards />
      <PopularProducts/>
      <DailyBestSells/>
    </div>
  )
}

export default Home