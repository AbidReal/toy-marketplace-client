import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Discount = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div data-aos="zoom-in-up">
      <div className=" mt-10  py-32 lg:py-60 bg-gradient-to-r from-slate-900 to-black ">
        <div className="custom-container text-xl flex flex-col gap-20  items-center lg:flex-row ">
          <div className="  font-extrabold text-7xl lg:text-8xl text-blue-600 font-serif">
            -20%
          </div>
          <div className="text-3xl ">
            We have developed a
            <span className="text-blue-600">
              discount program that will help you buy
            </span>{" "}
            <br />
            your favourite action figures even more profitably and even cheaper
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Discount;
