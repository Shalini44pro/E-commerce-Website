import { useState } from "react";
import Layout from "./Layout";

const Customer = () => {
  const [customerData, setCustoemrData] = useState([
    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      date: "4-5-2024 10-15-14 AM",
      address: "leaf-village  Akatsuki",
    },

    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      date: "4-5-2024 10-15-14 AM",
      address: "leaf-village  Akatsuki",
    },

    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      date: "4-5-2024 10-15-14 AM",
      address: "leaf-village  Akatsuki",
    },

    {
      customerName: "aditya",
      email: "xyx@gmail.com",
      phone: " +91 3489584988",
      date: "4-5-2024 10-15-14 AM",
      address: "leaf-village  Akatsuki",
    },
  ]);

  return (
    <Layout>
      <div className="p-3">
        <h1 className="text-xl font-semibold">Customer`s Details</h1>
        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-500 text-white text-left">
                <th className="px-3 py-4">Customer`s Name</th>
                <th>Email</th>

                <th>Phone</th>

                <th>Date</th>
                <th>Address</th>
              </tr>
            </thead>

            <tbody>
              {customerData.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="text-left"
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

                    <td>{data.date}</td>
                    <td>{data.address}</td>
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

export default Customer;
