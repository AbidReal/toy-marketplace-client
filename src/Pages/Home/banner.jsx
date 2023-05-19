const banner = () => {
  return (
    <div className="custom-container">
      <div className=" flex flex-col-reverse gap-5 lg:flex-row justify-center  lg:justify-between items-center ">
        <div className=" text-center  lg:text-left    text-4xl lg:text-5xl font-extrabold lg:absolute ">
          <div>
            The Best place to <br /> find your favorite <br /> Action Figures
          </div>
          <button className=" mt-10 px-7 py-4 btn-color font-extrabold text-lg rounded-lg  lg:flex ">
            Collections
          </button>
        </div>

        <div className=" flex justify-end lg:overflow-hidden">
          <div className="lg:rounded-r-full"></div>
          <img
            src="https://i.ibb.co/zJTsWm0/image-2023-05-19-081920204.jpg"
            alt="Your Image"
            className="object-cover h-full w-full lg:w-3/5 lg:rounded-l-full"
          />
        </div>
      </div>
    </div>
  );
};

export default banner;
