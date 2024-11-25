import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseAppConfig);

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");
  const [loader, setLoader] = useState(false);
  const [isError, setIstError] = useState(null);
  const [formVlaue, setFormValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  async function signup(e) {
    try {
      e.preventDefault();
      setLoader(true);
      await createUserWithEmailAndPassword(
        auth,
        formVlaue.email,
        formVlaue.password
      );
      navigate("/");
    } catch (err) {
      setIstError(err.message);
    } finally {
      setLoader(false);
    }
  }

  const handleOnChange = (e) => {
    let input = e.target;
    let name = input.name;
    let value = e.target.value;
    setFormValue({
      ...formVlaue,
      [name]: value,
    });
    setIstError(null);
  };

  return (
    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
      <img
        src="https://img.freepik.com/free-vector/sales-promotion-concept-illustration_114360-18718.jpg?semt=ais_hybrid"
        className="w-full h-full"
      />
      <div className="flex flex-col md:p-16 p-8">
        <h1 className="text-4xl font-bold">New User</h1>
        <p className="text-gray-600 text-lg mb-1">
          Create your Account to start your shopping
        </p>
        <form className="mt-8 space-y-4" onSubmit={signup}>
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-1">Username</label>
            <input
              onChange={handleOnChange}
              required
              name="fullname"
              placeholder="Er. Aditya"
              className="p-3 boder border-gray-100 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-1">Email</label>
            <input
              onChange={handleOnChange}
              required
              name="email"
              type="email"
              placeholder="xyzxx@gmail.com"
              className="p-3 boder border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="font-semibold text-lg mb-1">Password</label>
            <input
              onChange={handleOnChange}
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
          {loader == "true" ? (
            <h1 className="text-lg font-semibold text-gray-600">Loading...</h1>
          ) : (
            <button className=" bg-cyan-900 py-3 px-6 rounded font-semibold text-white hover:bg-yellow-600 mt-2">
              Sing Up
            </button>
          )}
        </form>
        <div className="mt-2">
          Already have an account ?{" "}
          <Link to={"/login"} className="text-blue-600 font-semibold">
            Login
          </Link>
        </div>
        {isError && (
          <div className=" flex items-center justify-between mt-2 p-3 bg-rose-500 text-white font-semibold animate__animated animate__pulse">
            <p>{isError}</p>
            <button
              onClick={() => {
                setIstError(null);
              }}
            >
              <i className="ri-close-large-line"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Signup; //time 54min lec35
