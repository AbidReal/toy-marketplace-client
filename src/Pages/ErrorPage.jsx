import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" text-center align-middle font-extrabold text-8xl ">
        404 <br /> Error
      </div>
      <Link to="/">
        <button className=" my-20 px-4  py-4 btn-color  font-extrabold md:text-lg rounded-lg ">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
