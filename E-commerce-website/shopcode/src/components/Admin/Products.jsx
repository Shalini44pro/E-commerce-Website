import { useState } from "react";
import Layout from "./Layout";

const products = () => {
  const [products, setProducts] = useState([
    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 4999,
      discount: 15,
      image: "/products/shirt.jpg",
    },

    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 1199,
      discount: 15,
      image: "/products/shirt2.jpg",
    },

    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 999,
      discount: 15,
      image: "/products/shirt3.jpg",
    },

    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 3035,
      discount: 15,
      image: "/products/shirt4.jpg",
    },

    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 1999,
      discount: 15,
      image: "/products/shirt5.jpg",
    },

    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 499,
      discount: 15,
      image: "/products/shirt6.jpg",
    },

    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 1000,
      discount: 15,
      image: "/products/shirt7.jpg",
    },

    {
      title: "men shirt",
      description: "this is simple men shirt",
      price: 9090,
      discount: 15,
      image: "/products/shirt8.jpg",
    },
  ]);
  return (
    <Layout>
      <div className="p-2">
        <h2 className="text-xl font-semibold mb-3">Products....</h2>
        <div className="grid md:grid-cols-4 gap-3">
          {products.map((data, index) => {
            return (
              <div key={index} className="bg-white rounded-md shadow-xl">
                <img
                  src={data.image}
                  className="rounded-t-md w-full h-[280px] object-cover"
                />

                <div className="p-4">
                  <h1 className="font-semibod text-md">{data.title}</h1>
                  <p className="text-gray-600">
                    {data.description.slice(0, 50)}
                  </p>
                  <div className="flex gap-2">
                    <label>
                      ₹{data.price - (data.price * data.discount) / 100}
                    </label>
                    <del>₹{data.price}</del>
                    <label>({data.discount}% off)</label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default products;
