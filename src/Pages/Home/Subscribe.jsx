import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Subscribe = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className=" py-20 flex flex-col justify-center items-center gap-4  bg bg-[url('https://i.vimeocdn.com/video/665321658-770ecc7e16eb218c49ac762ab10d6d3c7ad4b7a87bb00ae7713ac8b141192910-d_640x360.jpg')] bg-cover bg-center">
        <div className="custom-container text-center font-extrabold text-5xl">
          Subscribe to Our Newsletter
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
            <button className="btn  btn-color">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
