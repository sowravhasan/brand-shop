import { Link, NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import bgVideo from "/bgVideo.mp4"

const Banner = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDark = () => {
    setTheme(theme === "light" && "dark");
  };
  const handleLight = () => {
    setTheme(theme === "dark" && "light");
  };


  // navbar functions



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
       <li className= "hover:text-orange-400 hover:transition transform scale-100"><NavLink to={"/"}>Home</NavLink></li>
       <li className= "hover:text-orange-400 hover:transition transform scale-100"><NavLink to={"/brands"}>Brands</NavLink></li>
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
       <li className= "hover:text-orange-400 hover:transition transform scale-100"><NavLink to={"/myCart"}>My Cart</NavLink></li>
       <li className= "hover:text-orange-400 hover:transition transform scale-100"><NavLink to={"/about"}>About Us</NavLink></li>
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
    <div className="relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" src={bgVideo}></video>
      <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
        
      {/* navbar */}
      <div>
      <div className="navbar px-10">
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
            <h1 className="text-3xl font-bold text-white"><span className="text-purple-700 text-4xl">T</span>ech<span className="text-orange-600 text-4xl">N</span>est</h1>

            <div className="flex items-center gap-4 text-4xl">
        <button className="text-white" onClick={handleDark}><MdDarkMode></MdDarkMode></button>
        <button onClick={handleLight}><MdLightMode className="text-yellow-400"></MdLightMode></button>
      </div>
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



          <h1 className="text-2xl font-bold text-yellow-100">
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

      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div  className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3 bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-orange-500">Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mt-6 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10 py-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-orange-200">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-orange-200">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3 bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-yellow-100">Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mb-6 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10 py-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-orange-200">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-orange-200">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3 bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-yellow-100" >Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mb-6 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10 py-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-orange-200">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-orange-200">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="px-20 py-9 grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h1 className="text-white font-bold text-5xl mb-3 bg-gradient-to-br from-yellow-300  to-red-600 bg-clip-text text-transparent dark:text-yellow-100">Experience the Latest Ever Smartphones By This Era...</h1>
        <p className="text-white mb-6 text-justify">Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options. Find the perfect device to stay connected and capture life's moments.Explore a world of cutting-edge smartphones, from flagship models to budget-friendly options.</p>
        <div className="flex gap-10 py-10">
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-32">
            Read More
            </Link>
            <Link to={"/signup"} className="rounded-lg focus:outline-none h-12 px-5 bg-gradient-to-br from-yellow-300  to-red-600 text-white font-semibold flex items-center w-28">
            Join Now
            </Link>
        </div>
        </div>

        <div>
            <img className="w-auto" src="/Untitled-3.png" alt="" />
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-orange-200">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-orange-200">❯</a>
    </div>
  </div>
</div>
        </div>
    </div>
  );
};

export default Banner;
// 