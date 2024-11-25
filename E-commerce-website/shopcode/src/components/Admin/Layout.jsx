import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [size, setSize] = useState(280);
  const [mobileSize, setMobileSize] = useState(0);
  const [menue, setMenue] = useState(false);

  const location = useLocation();

  const menues = [
    {
      label: "Dsahboard",
      icon: <i className="ri-dashboard-3-line mr-2"></i>,
      link: "/admin/dashboard",
    },

    {
      label: "Customers",
      icon: <i className="ri-user-line mr-2"></i>,
      link: "/admin/customer",
    },

    {
      label: "Products",
      icon: <i className="ri-shopping-cart-line mr-2"></i>,
      link: "/admin/products",
    },

    {
      label: "Orders",
      icon: <i className="ri-shape-line mr-2"></i>,
      link: "/admin/orders",
    },
    {
      label: "Payments",
      icon: <i className="ri-secure-payment-line mr-2"></i>,
      link: "/admin/payments",
    },

    {
      label: "Settings",
      icon: <i className="ri-settings-line mr-2"></i>,
      link: "/admin/setting",
    },
  ];
  return (
    <>
      <div className="md:block hidden">
        <aside
          className="h-full fixed top-0 left-0 bg-indigo-500 overflow-hidden"
          style={{
            width: size,
            transition: "0.4",
          }}
        >
          <div className="flex flex-col py-1">
            {menues.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="px-4 py-3 text-gray-50 text-[17px] hover:bg-rose-500 hover:text-white mr-2"
                  style={{
                    background:
                      location.pathname === item.link
                        ? "#E11D48"
                        : "transparent",
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
            <button className="px-4 py-3 text-gray-50 text-[17px] hover:bg-rose-500 hover:text-white mr-2 text-left">
              <i className="ri-logout-circle-r-line mr-2"></i>
              Logout
            </button>
          </div>
        </aside>

        <section
          className="bg-gray-100 h-screen"
          style={{
            marginLeft: size,
            transition: "0.4s",
          }}
        >
          <nav className="bg-white p-4 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setSize(size === 280 ? 0 : 280)}
                className="bg-gray-50 hover:bg-indigo-400 hover:text-white w-8 h-8"
              >
                {" "}
                <i className="ri-menu-2-line" />{" "}
              </button>
              <h1 className="font-semibold text-xl">ShopCode</h1>
            </div>
            <div>
              <button className="relative">
                <img
                  onClick={() => setMenue(!menue)}
                  src="/images/avt3.avif"
                  className="w-12 h-12 rounded-full"
                ></img>

                {menue && (
                  <div className="absolute top-12 right-0 bg-white w-[200px] shadow p-6">
                    <div>
                      <h1 className="text-lg font-semibold">TFS ADITYA</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                      <div className="border bg-gray-200 my-2" />
                      <button>
                        <i className="ri-logout-circle-r-line mr-2"></i>Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div>{children}</div>
        </section>
      </div>

      {/* this code for mobile specific only */}
      <div className="md:hidden block">
        <aside
          className="h-full z-50 fixed top-0 left-0 bg-indigo-500 overflow-hidden"
          style={{
            width: mobileSize,
            transition: "0.4",
          }}
        >
          <div className="flex flex-col py-1">
            <button
              className="text-left mx-4 mt-2"
              onClick={() => setMobileSize(mobileSize === 280 ? 0 : 280)}
            >
              <i className="ri-close-line text-white text-2xl"></i>
            </button>
            {menues.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="px-4 py-3 text-gray-50 text-[17px] hover:bg-rose-500 hover:text-white mr-2"
                  style={{
                    transition: "0.3s, linear",
                    background:
                      location.pathname === item.link
                        ? "#E11D48"
                        : "transparent",
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
            <button className="px-4 py-3 text-gray-50 text-[17px] hover:bg-rose-500 hover:text-white mr-2 text-left">
              <i className="ri-logout-circle-r-line mr-2"></i>
              Logout
            </button>
          </div>
        </aside>

        <section className="bg-gray-100 h-screen">
          <nav className="bg-white p-4 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
                className="bg-gray-50 hover:bg-indigo-400 hover:text-white w-8 h-8"
              >
                {" "}
                <i className="ri-menu-2-line" />{" "}
              </button>
              <h1 className="font-semibold text-xl">ShopCode</h1>
            </div>
            <div>
              <button className="relative">
                <img
                  onClick={() => setMenue(!menue)}
                  src="/images/avt3.avif"
                  className="w-12 h-12 rounded-full"
                ></img>

                {menue && (
                  <div className="absolute top-12 right-0 bg-white w-[200px] shadow p-6">
                    <div>
                      <h1 className="text-lg font-semibold">TFS ADITYA</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                      <div className="border bg-gray-200 my-2" />
                      <button>
                        <i className="ri-logout-circle-r-line mr-2"></i>Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div>{children}</div>
        </section>
      </div>
    </>
  );
};

export default Layout;
