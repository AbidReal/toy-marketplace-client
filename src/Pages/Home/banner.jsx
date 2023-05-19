const banner = () => {
  return (
    <div className="custom-container">
      <div className="relative flex justify-center  lg:justify-between items-center ">
        <div className="z-10 text-center  lg:text-left lg:ml-0 lg:mr-auto absolute text-xl lg:text-5xl font-extrabold ">
          <div>
            The Best place to <br /> find your favorite <br /> Action Figures
          </div>
          <button className=" mt-4 px-7 py-4 btn-color font-extrabold md:text-lg rounded-lg  lg:flex ">
            Collections
          </button>
        </div>

        <div className=" flex justify-end overflow-hidden">
          <div className="rounded-r-full"></div>
          <img
            src="https://i.ibb.co/zJTsWm0/image-2023-05-19-081920204.jpg"
            alt="Your Image"
            className="object-cover h-full w-full lg:w-3/5 rounded-l-full"
          />
        </div>
      </div>
    </div>
  );
};

export default banner;
