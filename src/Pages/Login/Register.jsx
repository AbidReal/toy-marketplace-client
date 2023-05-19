import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  //   const [error1, setError1] = useState("");
  //   const [error3, setError3] = useState("");
  const { createUser, userProfile } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    const from = location.state?.from?.pathname || "/login";

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userProfile(name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    setError("");
  };

  //   setError1("");
  //   setError3("");
  //   if (password.length < 6) {
  //     setError("Password must be 6 characters long");
  //   } else if (email.length < 1 || password.length < 1) {
  //     setError1("You cannot submit empty email and password field");
  //   }
  return (
    <div>
      <div className="hero my-20 lg:my-40 text-black">
        <div className="w-96">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-3xl font-extrabold text-center ">
                Register
              </div>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control items-center mt-6">
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-btnL to-btnR "
                  >
                    Register
                  </button>
                </div>
                <p>
                  Already have an account?{" "}
                  <Link className="text-blue-700 hover:underline " to="/login">
                    Login
                  </Link>
                </p>
                <p className="text-red-500 ">{error}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
