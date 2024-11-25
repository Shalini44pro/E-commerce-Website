import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseAppConfig from "../util/firebase-config";
import { useEffect, useState } from "react";
const auth = getAuth(firebaseAppConfig);
const Layout = ({ children }) => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else setSession(false);
    });
  }, []);
  const menues = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },

    {
      label: "Categories",
      href: "/categories",
    },

    {
      label: "Products",
      href: "/products",
    },
  ];

  if (session == null) {
    return (
      <div className="bg-gray-200 fixed h-full flex items-center justify-center w-full">
        <span className="relative flex h-8 w-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-8 w-8 bg-sky-500"></span>
        </span>
      </div>
    );
  }

  return (
    <div>
      <nav className="shadow-lg bg-slate-50">
        <div className="w-10/12 mx-auto flex items-center justify-between">
          <img className="w-[100px] bg-white" src="/images/slogo.avif" />
          <button className="md:hidden">
            <i className="ri-menu-3-line"></i>
          </button>
          <ul className="md:flex gap-4 items-center hidden">
            {menues.map((data, index) => {
              return (
                <li key={index}>
                  <Link
                    className="block py-2 text-center w-[100px] hover:bg-pink-600 hover:text-white hover:transition duration-300 hover:rounded-e-xl"
                    to={data.href}
                  >
                    {data.label}
                  </Link>
                </li>
              );
            })}

            {!session && (
              <>
                <Link
                  className="block py-2 text-center w-[100px] hover:bg-pink-600 hover:text-white hover:transition duration-300 hover:rounded-e-xl"
                  to={"/login"}
                >
                  LogIn
                </Link>
                <Link
                  className="bg-yellow-500 text-white py-2 hover:text-white hover:transition duration-300  px-4 hover:bg-rose-500  rounded font-semibold text-center"
                  to={"/signup"}
                >
                  SignUp
                </Link>
              </>
            )}

            {session && <h1>Hi user...</h1>}
          </ul>
        </div>
      </nav>

      <div>{children}</div>

      <footer style={{ background: "#FF329B" }} className="py-16">
        <div className="w-10/12 grid grid-cols-4 gap-4 mx-auto">
          <div>
            <h1 className="text-white font-semibold text-2xl mb-3">
              Brand`s Detail
            </h1>
            <p className="text-gray-100 mb-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latinl
              literature, discovered the undoubtable source
            </p>

            <img
              className="w-[100px] bg-white bg-inherit"
              src="/images/slogo.avif"
            />
          </div>

          <div className="ml-4">
            <h1 className="text-white text-3xl font-semibold mb-3">
              Useful Links
            </h1>
            <ul className="mt-2 space-y-2">
              {menues.map((data, index) => {
                return (
                  <li key={index}>
                    <Link className="text-slate-300" to={data.href}>
                      {data.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link className="text-slate-300" to={"/login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-slate-300" to={"/signin"}>
                  SignUp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-white text-3xl font-semibold mb-3">
              Social Meida
            </h1>

            <ul className="space-y-2 text-slate-50">
              <li>
                <Link to={"/"}>Facebook</Link>
              </li>
              <li>
                <Link to={"/"}>whatsapp</Link>
              </li>
              <li>
                <Link to={"/"}>Instagram</Link>
              </li>
              <li>
                <Link to={"/"}>Twitter</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-white font-semibold text-2xl mb-3">
              Contact Us
            </h1>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="enter your full name"
                name="fullname"
                className="w-full rounded p-3"
                required
              />

              <input
                type="text"
                placeholder="enter Emailid"
                name="emailId"
                className="w-full rounded p-3"
                required
              />

              <textarea
                placeholder="your Message"
                className="w-full rounded p-3"
                rows={2}
              />
              <button className="bg-yellow-500 py-2 px-2 text-white">
                Send Data
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

//lrc-37 time 20min
