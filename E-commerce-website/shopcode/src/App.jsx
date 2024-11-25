import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "animate.css";
import NotFound from "./components/NotFound";
import AdminProducts from "./components/Admin/Products";
import Products from "./components/Products";
import Orders from "./components/Admin/Orders";
import Customer from "./components/Admin/Customer";
import Dashboard from "./components/Admin/Dashboard";
import Payments from "./components/Admin/Payments";
import Setting from "./components/Admin/Setting";
import Home from "./components/Home";
import Category from "./components/Category";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path={"/categories"} element={<Category />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin">
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customer" element={<Customer />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="payments" element={<Payments />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
