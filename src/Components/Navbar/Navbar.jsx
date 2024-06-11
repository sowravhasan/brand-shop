import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const handleLogout = () => {
      logout()
      .then(result => {
        console.log(result.user);
      })
      .then(error => {
        console.log(error);
      })
  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const navlinks = <>
       <li><NavLink to={"/"}>Home</NavLink></li>
       <li><NavLink to={"/brands"}>Brands</NavLink></li>
       <div>
      <button
        className="hover:text-orange-400 hover:transition transform scale-100"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add Product
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
        <div className="flex justify-between items-center flex-row-reverse">
          <form method="dialog">
            <button className="w-8 h-8 rounded-full border bg-white text-gray-600">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-orange-400 mb-4">
            Which Brand's Product You Wanna Add?
          </h3>
          </div>
          <h3 className="font-bold text-lg">Which Brand's Product You Wanna Add?</h3>
          <div className="flex justify-around py-6">
          <Link to={"/addProduct"} className="w-24 bg-white border rounded-md p-2 text-xl font-semibold text-orange-400 flex justify-center">Samsung</Link>
          <Link to={"/addGoogle"} className="w-24 bg-white border rounded-md p-2 text-xl font-semibold text-orange-400 flex justify-center">Google</Link>
          <Link to={"/addSony"} className="w-24 bg-white border rounded-md p-2 text-xl font-semibold text-orange-400 flex justify-center">Sony</Link>
          </div>

          <div className="flex justify-around">
          <Link to={"/addApple"} className="w-24 bg-white border rounded-md p-2 text-xl font-semibold text-orange-400 flex justify-center">Apple</Link>
          <Link to={"/appXiomi"} className="w-24 bg-white border rounded-md p-2 text-xl font-semibold text-orange-400 flex justify-center">Xiomi</Link>
          <Link to={"/addHuawei"} className="w-24 bg-white border rounded-md p-2 text-xl font-semibold text-orange-400 flex justify-center">Huawei</Link>
          </div>
        </div>
      </dialog>
    </div>
       <li><NavLink to={"/home"}>My Cart</NavLink></li>
       <li><NavLink to={"/about"}>About Us</NavLink></li>
       <div>
      <button
        className=""
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Contact Us
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="flex justify-between items-center flex-row-reverse">
          <form method="dialog">
            <button className="w-8 h-8 rounded-full border bg-white text-gray-600">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-orange-400 mb-4">
            Send Message!
          </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
            <div>
              <h1 className="font-semibold mb-2">Name</h1>
              <input
                type="text"
                name="name"
                placeholder="Enter Product Name"
                className="border bg-white p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]"
              />
            </div>
            <div>
              <h1 className="font-semibold">Subject</h1>
              <input
                type="text"
                name="subject"
                placeholder="Enter Brand Name"
                className="border bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]"
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold mb-2">Message</h1>
            <input
              type="text"
              name="subject"
              placeholder="Enter Brand Name"
              className="border bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]"
            />
          </div>

          <div>
            <Link to={"/"}
              className="
                        w-full p-2 rounded-md bg-white border text-orange-400"
            >
              Send Message
            </Link >
          </div>
        </div>
      </dialog>
    </div>
       {
        !user && <li><NavLink to={"/signin"}>Signin</NavLink></li>
       }
    
    </>
  return (
<div>
      <div className="navbar bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="flex gap-8 dropdown-content mt-3 z-[1] text-white "
            >
              {navlinks}
            </ul>
          </div>
          <NavLink to={"/"} className="flex gap-2 items-center">
            <img className="w-16" src="/Logo.png" alt="" />
            <h1 className="text-3xl font-bold"><span className="text-purple-700">T</span>ech<span className="text-orange-600">N</span>est</h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 text-white">
            {navlinks}
          </ul>
        </div>
        
        <div className="navbar-end gap-3">



<div className="relative">
      <div className="w-14 h-14 rounded-full border border-orange-400 cursor-pointer transition-transform transform hover:scale-105" onClick={toggleMenu}>
        <img className="w-14 h-14 rounded-full p-2" src={user ? user.photoURL : '/user.png'} alt="" />
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul>
            <Link
              className="px-4 py-2"
              onClick={() => {
                toggleMenu();
                // Handle the profile option
              }}
            >
              Profile
            </Link>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                toggleMenu();
                handleLogout(); // Call the handleLogout function when Logout is clicked
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>



          <h1 className="text-2xl font-bold text-orange-100">
            {
              user && user.displayName

            }
          </h1>
        
          <div>
            {
              user ? <NavLink onClick={handleLogout} className="w-auto p-3 rounded-lg bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold">Sign Out</NavLink>
              : <NavLink to={"/signup"} className="btn">Sign Up</NavLink>
            }
          </div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
