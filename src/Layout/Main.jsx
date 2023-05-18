import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen ">
        <NavBar></NavBar>
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>

        <Footer className="mt-auto"></Footer>
      </div>
    </div>
  );
};

export default Main;
