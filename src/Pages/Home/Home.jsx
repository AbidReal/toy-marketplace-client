import Banner from "./banner";
import Discount from "./Discount";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import Subscribe from "./Subscribe";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Discount></Discount>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
