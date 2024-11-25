import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  return (
    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
      <img
        src="https://img.freepik.com/free-vector/sales-promotion-concept-illustration_114360-18718.jpg?semt=ais_hybrid"
        className="w-full h-full"
      />
      <div className="flex flex-col md:p-16 p-8">
        <h1 className="text-4xl font-bold">User Login</h1>
        <p className="text-gray-600 text-lg mb-1">
          Enter your Credentials for Login
        </p>
        <form className="mt-8">
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-1">Email</label>
            <input
              required
              name="Email"
              type="email"
              placeholder="xyzxx@gmail.com"
              className="p-3 boder border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="font-semibold text-lg mb-1">Password</label>
            <input
              required
              name="password"
              type={showPassword}
              placeholder="*****"
              className="p-3 border-black rounded"
            />
            <button
              onClick={() =>
                setShowPassword(
                  showPassword == "password" ? "text" : "password"
                )
              }
              type="button"
              className=" absolute top-10 right-4 w-8 h-8 rounded full hover:bg-cyan-300 hover:text-blue-600"
            >
              {showPassword == "password" ? (
                <i className="ri-eye-line" />
              ) : (
                <i className="ri-eye-off-line"></i>
              )}
            </button>
          </div>
          <button className=" bg-cyan-900 py-3 px-6 rounded font-semibold text-white hover:bg-yellow-600 mt-2">
            Login
          </button>
        </form>
        <div className="mt-2">
          Don`t have an account ?{" "}
          <Link to={"/signup"} className="text-blue-600 font-semibold">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
