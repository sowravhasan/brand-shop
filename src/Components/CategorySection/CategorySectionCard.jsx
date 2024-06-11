import { Link } from "react-router-dom";


const CategorySectionCard = ({product}) => {
    const {_id, name, brand, type, price, previousPrice, description, photo} = product;
    return (
        <div>
            <div className="w-72 mb-20">
      <div className="border border-gray-400 rounded-md">
        <img className="w-72 h-72" src={photo} alt="" />
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
        <h1 className="text-2xl font-bold mb-2 mt-2">{name}</h1>
       <div className="flex justify-between items-center">
        <p className="text-gray-500 mb-2">{type}</p>
        <p className="text-gray-500 mb-2">Brand : {brand}</p>
       </div>
        <div className="flex gap-3 items-center">
            <p className="text-2xl text-red-600 font-bold">{price}</p>
            <p className="text-lg text-gray-500 line-through">{previousPrice}</p>
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
                <Link to={`/details/${_id}`} className="focus:outline-none h-12 w-auto p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center">
                 View details
                </Link>
                <Link to={"/"} className="focus:outline-none h-12 w-auto px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center">
                 Update Details
                </Link>
            </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CategorySectionCard;