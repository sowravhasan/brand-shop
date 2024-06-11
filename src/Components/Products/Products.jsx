import { Link } from "react-router-dom";
// import { MdUpdateDisabled } from "react-icons/md";
// import { BiCommentDetail } from "react-icons/bi";

const Products = () => {
  return (
    <div className="w-72">
      <div className="border border-gray-400 rounded-md">
        <img src="/Rectangle 16.png" alt="" />
      </div>

        {/* Timer */}
      <div className="border border-gray-400 rounded-md bg-slate-100 py-3 flex justify-center items-center mt-2">
        <span className="countdown font-mono text-2xl">
        <span style={{"--value":13}}></span>:
        <span style={{"--value":10}}></span>:
        <span style={{"--value":24}}></span>:
        <span style={{"--value":34}}></span>
        </span>
      </div>


      {/* details */}
      <div>
        <h1 className="text-2xl font-bold mb-2 mt-2">Smasung A51</h1>
       <div className="flex justify-between items-center">
        <p className="text-gray-500 mb-2">Smartphone</p>
        <p className="text-gray-500 mb-2">Brand : Samsung</p>
       </div>
        <div className="flex gap-3 items-center">
            <p className="text-2xl text-red-600 font-bold">$ 499</p>
            <p className="text-lg text-gray-500 line-through">$ 550</p>
        </div>
        <div>
            <div className="flex justify-between items-center mb-3">
                {/* rating */}
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>

                <div className="flex gap-5">
                    <button className="border border-gray-400 rounded-md bg-slate-100 p-2 font-bold">Cart</button>
                    <button className="border border-gray-400 rounded-md bg-slate-100 p-2 font-bold">Wish List</button>
                </div>
            </div>

            <div className=" mt-4 flex justify-between gap-4">
                <Link className="focus:outline-none h-12 w-auto p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center">
                 View details
                </Link>
                <Link to={"/"} className="focus:outline-none h-12 w-auto px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center">
                 Update Details
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
