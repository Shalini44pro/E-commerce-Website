import { useState } from "react";
import Layout from "./Layout";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([
    {
      orderId: "#4556ty",
      customerName: "aditya",
      email: "xyx@gmail.com",
      products: "lenovo Ideapad i5",
      phone: " +91 3489584988",
      amount: "55,000",
      date: "4-5-2024 10-15-14 AM",
      status: "pending",
    },

    {
      orderId: "#4556ty",
      customerName: "aditya",
      email: "xyx@gmail.com",
      products: "lenovo Ideapad i5",
      phone: " +91 3489584988",
      amount: "55,000",
      date: "4-5-2024 10-15-14 AM",
      status: "pending",
    },

    {
      orderId: "#4556ty",
      customerName: "aditya",
      email: "xyx@gmail.com",
      products: "lenovo Ideapad i5",
      phone: " +91 3489584988",
      amount: "55,000",
      date: "4-5-2024 10-15-14 AM",
      status: "pending",
    },

    {
      orderId: "#4556ty",
      customerName: "aditya",
      email: "xyx@gmail.com",
      products: "lenovo Ideapad i5",
      phone: " +91 3489584988",
      amount: "55,000",
      date: "4-5-2024 10-15-14 AM",
      status: "pending",
    },

    {
      orderId: "#4556ty",
      customerName: "aditya",
      email: "xyx@gmail.com",
      products: "lenovo Ideapad i5",
      phone: " +91 3489584988",
      amount: "55,000",
      date: "4-5-2024 10-15-14 AM",
      status: "pending",
    },
  ]);
  return (
    <Layout>
      <div className="p-3">
        <h1 className="text-xl font-semibold">Orders Details</h1>
        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-500 text-white">
                <th className="py-4">Order Id</th>
                <th>Customer`s Name</th>
                <th>Email</th>
                <th>products</th>
                <th>Phone</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {ordersData.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="text-center"
                    style={{
                      background: (index + 1) % 2 === 0 ? "$f1f5f9" : "white",
                    }}
                  >
                    <td className="py-4">{data.orderId}</td>
                    <td className="capitalize">{data.customerName}</td>
                    <td>{data.email}</td>
                    <td className="capitalize">{data.products}</td>
                    <td>{data.phone}</td>
                    <td>₹{data.amount.toLocaleString()}</td>
                    <td>{data.date}</td>
                    <select className="p-1 bg-gray-100 mt-2">
                      <option value="pending">pending</option>
                      <option value="processing">processing</option>
                      <option value="dispatched">dispatched</option>
                      <option value="returned">returned</option>
                    </select>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
