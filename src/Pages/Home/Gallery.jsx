// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Gallery = () => {
  return (
    <div className="custom-container">
      <div className="text-center font-extrabold text-5xl mt-40 mb-20  ">
        <span className=" text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 via-blue-800 to-btnR">
          Gallery
        </span>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-cover aspect-square"
            src="https://live.staticflickr.com/1435/5151054517_2ca28dd61c_b.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover aspect-square"
            src="https://live.staticflickr.com/2877/33733336176_1ff07aa3b9_c.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover aspect-square"
            src="https://live.staticflickr.com/8372/8439549238_94d6d25791_c.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover aspect-square"
            src="https://live.staticflickr.com/65535/52354257335_d984e15ab5_c.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover aspect-square"
            src="https://live.staticflickr.com/2863/33270956664_73fcd7de20_c.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover aspect-square"
            src="https://live.staticflickr.com/3721/9392438133_810e956f5c_z.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
