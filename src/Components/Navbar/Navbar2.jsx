import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar2 = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
    return (
        <div className="max-w-6xl mx-auto py-10">
            <div className="flex justify-between">
            <div className="relative inline-block">
      <button
        className="flex justify-between items-center rounded-md focus:outline-none w-60 p-3 bg-orange-400 text-white font-semibold hover:bg-orange-500 transition duration-300"
        onClick={toggleDropdown}
      >
        <h1>All Categories</h1>
        <button className="text-2xl">
          <AiOutlineMenuUnfold />
        </button>
      </button>
      {isDropdownOpen && (
        <div className="absolute mt-2 py-2 w-60 bg-white border rounded shadow-lg z-10">
          {/* Dropdown menu content goes here */}
          <ul>
          <li className="px-4 py-2 hover:bg-gray-100">Mobile</li>
            <li className="px-4 py-2 hover:bg-gray-100">Tablet</li>
            <li className="px-4 py-2 hover:bg-gray-100">Laptop</li>
            <li className="px-4 py-2 hover:bg-gray-100">PC</li>
            <li className="px-4 py-2 hover:bg-gray-100">Smart Watch</li>
            <li className="px-4 py-2 hover:bg-gray-100">Headphone</li>
          </ul>
        </div>
      )}
    </div>

            <div className="flex items-center rounded-l-md bg-white border w-96">
                <button className="flex items-center justify-between rounded-l-md focus:outline-none w-80 h-12  text-gray-600 font-semibold hover:bg-orange-400 hover:text-white transition duration-300">
                    <h1 className="m-2">Product</h1>
                    <button className="text-xl"><AiOutlineMenuUnfold></AiOutlineMenuUnfold></button>
                </button>
            <div>
              <input
                className="h-12 px-5 text-sm focus:outline-none focus:border-orange-400 transition duration-300 ease-in-out hover:border-orange-800"
                type="text"
                id="exampleInput"
                placeholder="Samsung phone..."
              />
            </div>
            <div className="">
              <button className="rounded-r-md focus:outline-none p-3 bg-orange-400 text-white font-semibold hover:bg-orange-500 transition duration-300">
                Search
              </button>
            </div>
          </div>

          <button className="flex justify-between items-center rounded-md focus:outline-none w-60 p-3 bg-orange-400 text-white font-semibold hover:bg-orange-500 transition duration-300">
                    <button className="text-2xl"><BsFillCartPlusFill></BsFillCartPlusFill></button>
                    <h1>0 items</h1>
                    <h1>$ 00</h1>
                </button>
          
            </div>
        </div>
    );
};

export default Navbar2;

