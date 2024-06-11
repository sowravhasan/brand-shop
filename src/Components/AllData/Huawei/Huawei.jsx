import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Huawei = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-side-server.vercel.app/huaweiData")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <div>
      <div>
        <div className="">
          <div className="carousel w-full bg-gradient-to-b from-gray-900 to-gray-600 mb-16">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-white font-bold text-5xl mb-7">
                    Experience the Latest Ever Xiomi Smartphones By This Era...
                  </h1>
                  <p className="text-white mb-3 text-justify">
                    Explore a world of cutting-edge smartphones, from flagship
                    models to budget-friendly options. Find the perfect device
                    to stay connected and capture life's moments.Explore a world
                    of cutting-edge smartphones, from flagship models to
                    budget-friendly options.
                  </p>
                  <div className="flex gap-10">
                    <Link
                      to={"/signup"}
                      className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-auto"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    className="w-3/4"
                    src="..//xiomi (6).png"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-white font-bold text-5xl mb-7">
                    Experience the Latest Ever Xiomi Smartphones By This Era...
                  </h1>
                  <p className="text-white mb-3 text-justify">
                    Explore a world of cutting-edge smartphones, from flagship
                    models to budget-friendly options. Find the perfect device
                    to stay connected and capture life's moments.Explore a world
                    of cutting-edge smartphones, from flagship models to
                    budget-friendly options.
                  </p>
                  <div className="flex gap-10">
                    <Link
                      to={"/signup"}
                      className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-auto"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    className="w-3/4"
                    src="..//xiomi (2).png"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-white font-bold text-5xl mb-7">
                    Experience the Latest Ever Xiomi Smartphones By This Era...
                  </h1>
                  <p className="text-white mb-3 text-justify">
                    Explore a world of cutting-edge smartphones, from flagship
                    models to budget-friendly options. Find the perfect device
                    to stay connected and capture life's moments.Explore a world
                    of cutting-edge smartphones, from flagship models to
                    budget-friendly options.
                  </p>
                  <div className="flex gap-10">
                    <Link
                      to={"/signup"}
                      className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-auto"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    className="w-3/4"
                    src="..//xiomi (7).png"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-white font-bold text-5xl mb-7">
                    Experience the Latest Ever Xiomi Smartphones By This Era...
                  </h1>
                  <p className="text-white mb-3 text-justify">
                    Explore a world of cutting-edge smartphones, from flagship
                    models to budget-friendly options. Find the perfect device
                    to stay connected and capture life's moments.Explore a world
                    of cutting-edge smartphones, from flagship models to
                    budget-friendly options.
                  </p>
                  <div className="flex gap-10">
                    <Link
                      to={"/signup"}
                      className="rounded-lg focus:outline-none h-12 px-5 bg-[#a18157] text-white font-semibold hover:bg-[#E3B577] transition duration-300 flex items-center w-auto"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    className="w-3/4"
                    src="..//xiomi (6).png"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {data.map((card) => {
            return (
              <div key={card._id}>
                <div className="w-72 mb-20">
                  <div className="border border-gray-400 rounded-md">
                    <img className="w-72 h-72" src={card.img} alt="" />
                  </div>

                  {/* Timer */}
                  <div className="border border-gray-400 rounded-md bg-slate-100 py-3 flex justify-center items-center mt-2">
                    <span className="countdown font-mono text-2xl">
                      <span style={{ "--value": 13 }}></span>:
                      <span style={{ "--value": 10 }}></span>:
                      <span style={{ "--value": 24 }}></span>:
                      <span style={{ "--value": 34 }}></span>
                    </span>
                  </div>

                  {/* details */}
                  <div>
                    <h1 className="text-2xl font-bold mb-2 mt-2">
                      {card.name}
                    </h1>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 mb-2">{card.type}</p>
                      <p className="text-gray-500 mb-2">Brand : {card.brand}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <p className="text-2xl text-red-600 font-bold">
                        {card.price}
                      </p>
                      <p className="text-lg text-gray-500 line-through">
                        {card.previousPrice}
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        {/* rating */}
                        <div className="rating rating-md">
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>

                        <div className="flex gap-5">
                          <button className="border border-gray-400 rounded-md bg-slate-100 p-2 font-bold">
                            Cart
                          </button>
                          <button className="border border-gray-400 rounded-md bg-slate-100 p-2 font-bold">
                            Wish List
                          </button>
                        </div>
                      </div>

                      <div className=" mt-4 flex justify-between gap-4">
                        <Link
                          to={`/huaweiDetails/${card._id}`}
                          className="focus:outline-none h-12 w-auto p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center"
                        >
                          View details
                        </Link>
                        <Link
                          to={"/"}
                          className="focus:outline-none h-12 w-auto px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center"
                        >
                          Update Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Huawei;
