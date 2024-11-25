import { useState } from "react";
import Layout from "./Layout";

const Payments = () => {
  const [customerData, setCustoemrData] = useState([
    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      date: "4-5-2024 10-15-14 AM",
      amount: 50000,
    },

    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      amount: 50000,
      date: "4-5-2024 10-15-14 AM",
    },

    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      amount: 50000,
      date: "4-5-2024 10-15-14 AM",
    },

    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      amount: 50000,
      date: "4-5-2024 10-15-14 AM",
    },
  ]);

  return (
    <Layout>
      <div className="p-3">
        <h1 className="text-xl font-semibold">Customer`s Details</h1>
        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-500 text-white ">
                <th>Customer`s Name</th>
                <th>Email</th>

                <th>Phone</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {customerData.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="text-center"
                    style={{
                      background: (index + 1) % 2 === 0 ? "$f1f5f9" : "white",
                    }}
                  >
                    <td className="capitalize px-3 py-2 text-left">
                      <div className="flex gap-3 items-center">
                        <img
                          className="w-12 h-12 rounded-full"
                          src="/images/avt2.avif"
                        />
                        <div className="flex flex-col justify-center">
                          <span>{data.customerName}</span>
                          <span>{data.date}</span>
                        </div>
                      </div>
                    </td>
                    <td>{data.email}</td>

                    <td>{data.phone}</td>

                    <td>{data.amount.toLocaleString()}</td>

                    <td>{data.date}</td>
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

export default Payments;
