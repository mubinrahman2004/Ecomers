import Banner from "./components/Home/Banner";
import BestDils from "./components/Home/BestDils";
import Catagories from "./components/Home/Catagories";
import DailyShoping from "./components/Home/DailyShoping";
import DealsOfDay from "./components/Home/DealsOfDay";
import PopularProduct from "./components/Home/PopularProduct";
import ProductBanner from "./components/Home/ProductBanner";
import TopSell from "./components/Home/TopSell";

export default async function Home() {
  return (
    <>
      <Banner />
      <Catagories />
      <ProductBanner />
      <PopularProduct />
      <BestDils />
      <DealsOfDay />
      <TopSell />
      <DailyShoping />
    </>
  );
}
