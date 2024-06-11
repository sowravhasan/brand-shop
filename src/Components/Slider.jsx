import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
        <div className="py-8">
                <h1 className="text-3xl font-bold mb-4 text-orange-400 dark:text-white">Our All Brands</h1>
                <div className="flex items-center">
                    <div className="bg-gradient-to-br from-yellow-300  to-red-600 w-64 h-1"></div>
                    <div className="bg-slate-400 w-full h-1"></div>
                </div>
            </div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-40 px-20">
                <Link className="shadow-xl " to={"/samsung"}>
                    <img className="w-56 hover:shadow-xl  transform hover:scale-105 duration-500 ease-in-out" src="/samsung.png" alt="" />
                </Link >
                <Link className="shadow-xl" to={"/apple"}>
                    <img className="w-56 hover:shadow-xl  transform hover:scale-105 duration-500 ease-in-out" src="/apple.png" alt="" />
                </Link>
                <Link className="shadow-xl" to={"/google"}>
                    <img className="w-56 hover:shadow-xl  transform hover:scale-105 duration-500 ease-in-out" src="/google.png" alt="" />
                </Link>
                </div>
        </div>
        <div id="item2" className="carousel-item w-full">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-40 px-20">
               <Link className="shadow-xl" to={"/huawei"}>
                    <img className="w-56 hover:shadow-xl  transform hover:scale-105 duration-500 ease-in-out" src="/huawei.png" alt="" />
                </Link>
                <Link className="shadow-xl" to={"/sony"}>
                    <img className="w-56 hover:shadow-xl  transform hover:scale-105 duration-500 ease-in-out" src="/sony.png" alt="" />
                </Link>
                <Link className="shadow-xl" to={"/xiomi"}>
                    <img className="w-56 hover:shadow-xl  transform hover:scale-105 duration-500 ease-in-out" src="/xiomi.png" alt="" />
                </Link>
               </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-sm tooltip flex items-center bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-orange-500 font-bold" data-tip="1st Page">
          1
        </a>
        <a href="#item2" className="btn btn-sm tooltip flex items-center bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-orange-500 font-bold" data-tip="2nd Page">
          2
        </a>
      </div>
    </div>
  );
};

export default Slider;


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                
           </div>