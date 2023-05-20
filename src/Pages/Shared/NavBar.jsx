import { Link, NavLink, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import logo from "../../../src/assets/logo_white.svg";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="custom-container">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="flex items-center gap-0">
            <img className="h-8 w-8 -mr-1" src={logo} alt="blank" />
            <div className=" font-extrabold text-4xl ">ceFig</div>
          </Link>

          {/* nav section  */}

          <ul className="items-center hidden space-x-8 lg:flex text-2xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? " border-b-4 pb-2 border-blue-800" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-toys"
                className={({ isActive }) =>
                  isActive ? "border-b-4 pb-2 border-blue-800" : "default"
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  to="/my-toys"
                  className={({ isActive }) =>
                    isActive ? "border-b-4 pb-2 border-blue-800" : "default"
                  }
                >
                  My Toys
                </NavLink>
              )}
            </li>
            <li>
              <NavLink
                to="/add-a-toy"
                className={({ isActive }) =>
                  isActive ? "border-b-4 pb-2 border-blue-800" : "default"
                }
              >
                Add A Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "border-b-4 pb-2 border-blue-800" : "default"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            {user && (
              <NavLink className="text-5xl hidden lg:block">
                <div className=" object-cover relative group  ">
                  {user.photoURL ? (
                    <img
                      className="h-14 w-14 rounded-full ring-4 ring-blue-600 "
                      src={user?.photoURL}
                    ></img>
                  ) : (
                    <FaUserCircle className="text-blue-600 h-14 w-14"></FaUserCircle>
                  )}

                  {user.displayName && (
                    <div
                      className="absolute bg-gray-800 text-white py-1 px-2 rounded-md text-sm pointer-events-none transition-opacity opacity-0 group-hover:opacity-100  "
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {user?.displayName}
                    </div>
                  )}
                </div>
              </NavLink>
            )}

            {user ? (
              <button
                onClick={handleLogOut}
                className=" px-4  py-4 btn-color  font-extrabold md:text-lg rounded-lg hidden lg:flex "
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className=" px-4  py-4 btn-color  font-extrabold md:text-lg rounded-lg hidden lg:flex  ">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className=" lg:hidden flex items-center space-x-4 md:space-x-10">
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Bars3Icon className="w-6"></Bars3Icon>
              </button>
              {/* mobile responsive nav bar */}
              {isMenuOpen && (
                <div className="absolute z-20 top-0 left-0 w-full">
                  <div className="p-5 bg-[#1b1d2a] border rounded-lg shadow-sm">
                    {/* logo */}
                    <div className="flex items-center justify-between mg-4">
                      <Link to="/" className="flex items-center gap-0">
                        <img className="h-8 w-8 -mr-1" src={logo} alt="blank" />
                        <div className=" font-extrabold text-4xl ">ceFig</div>
                      </Link>

                      {/* dropdown close button */}
                      <div>
                        <button onClick={() => setIsMenuOpen(false)}>
                          <XMarkIcon className="w-6"></XMarkIcon>
                        </button>
                      </div>
                    </div>
                    {/* nav items section  */}
                    <nav>
                      <ul className="space-y-4 py-5">
                        <li>
                          <Link to="/" className="nav-items-style">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/all-toys" className="nav-items-style">
                            All Toys
                          </Link>
                        </li>
                        <li>
                          {user && (
                            <Link to="/my-toys" className="nav-items-style">
                              My Toys
                            </Link>
                          )}
                        </li>
                        <li>
                          <Link to="/add-a-toy" className="nav-items-style">
                            Add A Toy
                          </Link>
                        </li>
                        <li>
                          <Link to="/blogs" className="nav-items-style">
                            Blogs
                          </Link>
                        </li>
                        <li>
                          {user ? (
                            <div className="flex flex-col gap-5">
                              <NavLink className="text-5xl  lg:hidden">
                                <div className=" object-cover relative group  ">
                                  {user.photoURL ? (
                                    <img
                                      className="h-10 w-10 "
                                      src={user?.photoURL}
                                    ></img>
                                  ) : (
                                    <FaUserCircle className="text-blue-600 h-14 w-14"></FaUserCircle>
                                  )}

                                  {user.displayName && (
                                    <div
                                      className="absolute bg-gray-800 text-white py-1 px-2 rounded-md text-sm pointer-events-none transition-opacity opacity-0 group-hover:opacity-100  "
                                      style={{ whiteSpace: "nowrap" }}
                                    >
                                      {user?.displayName}
                                    </div>
                                  )}
                                </div>
                              </NavLink>
                              <button
                                onClick={handleLogOut}
                                className=" px-4  py-4 btn-color  font-extrabold md:text-lg rounded-lg "
                              >
                                Logout
                              </button>
                            </div>
                          ) : (
                            <Link to="/login">
                              <button className=" px-4  py-4 btn-color  font-extrabold md:text-lg rounded-lg ">
                                Login
                              </button>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </nav>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
