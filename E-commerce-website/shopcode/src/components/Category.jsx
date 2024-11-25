import { useState } from "react";
import Layout from "./Layout";

const Category = () => {
  const [category, setCategory] = useState([
    {
      title: "Electronics",
    },

    {
      title: "Faishon",
    },

    {
      title: "Smartphone",
    },

    {
      title: "Furniture",
    },
    {
      title: "Apperance",
    },
    {
      title: "Electronics",
    },
    {
      title: "Electronics",
    },
  ]);

  return (
    <Layout>
      <div className="md:p-16 p-8">
        <div className="w-10/12 mx-auto grid md:grid-cols-4 gap-10">
          {category.map((data, index) => {
            return (
              <div
                key={index}
                className="hover:bg-orange-600 hover:text-white border-rounded-lg p-8 flex justify-center items-center flex-col"
              >
                <i className="ri-menu-search-line text-6xl"></i>
                <h1 className="font-bold text-xl">{data.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
