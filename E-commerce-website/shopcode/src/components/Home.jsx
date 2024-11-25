import { useState } from "react";
import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const [product, setProduct] = useState([
    {
      title: "green men shirt",
      price: 2000,
      discount: 15,
      thumbnail: "/products/shirt.jpg",
    },
    {
      title: "green men shirt",
      price: 2000,
      discount: 15,
      thumbnail: "/products/shirt.jpg",
    },
    {
      title: "green men shirt",
      price: 2000,
      discount: 18,
      thumbnail: "/products/shirt.jpg",
    },
    {
      title: "green men shirt",
      price: 2000,
      discount: 15,
      thumbnail: "/products/shirt.jpg",
    },
    {
      title: "green men shirt",
      price: 2000,
      discount: 19,
      thumbnail: "/products/shirt.jpg",
    },
    {
      title: "green men shirt",
      price: 2000,
      discount: 15,
      thumbnail: "/products/shirt.jpg",
    },
    {
      title: "green men shirt",
      price: 2000,
      discount: 15,
      thumbnail: "/products/shirt.jpg",
    },
    {
      title: "green men shirt",
      price: 2000,
      discount: 15,
      thumbnail: "/products/shirt.jpg",
    },
  ]);
  return (
    <Layout>
      <div>
        <header>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              {" "}
              <img src="/images/bg1.jpg" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/images/bg4.jpg" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/images/bg-2.jpg" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/images/bg4.jpg" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/images/bg-3.jpg" />{" "}
            </SwiperSlide>
          </Swiper>
        </header>

        <div className="md:p-16 p-4">
          <h1 className="text-3xl font-bold text-center">Latest Products</h1>
          <p className="text-gray-600 w-7/12 m-auto mt-2 mb-12 text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem{" "}
          </p>
          <div className="md:w-10/12 grid md:grid-cols-4  gap-12 m-auto border">
            {product.map((data, index) => {
              return (
                <div key={index} className="bg-white shadow-lg">
                  <img src={data.thumbnail} />
                  <div className="p-4">
                    <h2 className="text-lg font-semi-bold">{data.title}</h2>
                    <div className="space-x-2">
                      <label className="font-bold text-lg ">
                        ₹{data.price - (data.price * data.discount) / 100}
                      </label>
                      <del>₹{data.price}</del>
                      <label>({data.discount}%)</label>
                    </div>
                    <button className="bg-green-600 w-full py-2 rounded text-white font-semibold mt-2">
                      Buy Now
                    </button>
                    <button className="bg-rose-600 w-full py-2 rounded text-white font-semibold mt-2">
                      <i className="ri-shopping-cart-line mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
{
  /* <img src="/images/bg1.jpg" />{" "} */
}
export default Home;
