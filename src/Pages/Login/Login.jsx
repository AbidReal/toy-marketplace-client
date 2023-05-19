import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/Fc";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log("login page location ", location);
  const from = location.state?.from?.pathname || "/";

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignInPopUp()
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const { signIn, googleSignInPopUp } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="hero my-20 lg:my-40 text-black">
        <div className="w-96">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-3xl font-extrabold text-center ">Login</div>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control items-center mt-6">
                  <button className="btn bg-gradient-to-r from-btnL to-btnR ">
                    Login
                  </button>
                </div>
                <p className="mx-auto text-center mt-6">
                  Don&apos;t have an account?{" "}
                  <Link
                    className="text-blue-700 hover:underline "
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
                <FcGoogle
                  onClick={handleGoogleSignIn}
                  className=" mt-6 text-5xl text-center mx-auto hover:scale-110 transform transition-all duration-300 ease-in-out"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
