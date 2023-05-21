import { useEffect } from "react";
import Banner from "./banner";
import Discount from "./Discount";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import Subscribe from "./Subscribe";
const Home = () => {
  //dynamic title
  const pageName = "Home";

  useEffect(() => {
    document.title = `${pageName} | AceFig`;
  }, [pageName]);
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
