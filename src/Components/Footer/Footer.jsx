import { FaFacebookF,FaTwitter,FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="mt-10">
        <div className="relative z-10">
        <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r flex justify-around items-center p-6">
            <div className="flex gap-6 items-center">
                <button className="w-10 h-10 rounded-full bg-white text-xl text-gray-800 border flex justify-center items-center hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaFacebookF/></button>
                <button className="w-10 h-10 rounded-full bg-white text-xl text-gray-800 border flex justify-center items-center hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaTwitter/></button>
                <button className="w-10 h-10 rounded-full bg-white text-xl text-gray-800 border flex justify-center items-center hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaGooglePlusG/></button>
                <button className="w-10 h-10 rounded-full bg-white text-xl text-gray-800 border flex justify-center items-center hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaLinkedinIn/></button>
            </div>

            <h1 className="text-2xl font-bold text-white">Sign Up For Newsletter & Get <span className="text-orange-400"> 20% Off</span></h1>

            <div className="flex">
            <div>
              <input
                className="border-2 border-gray-300 bg-white h-12 px-5 pr-10 rounded-l-full text-sm focus:outline-none focus:border-orange-400 transition duration-300 ease-in-out hover:border-orange-800"
                type="text"
                id="exampleInput"
                placeholder="Enter your email..."
              />
            </div>
            <div className="-ml-3">
              <button className="rounded-r-full focus:outline-none h-12 px-5 pr-10 bg-orange-400 text-white font-semibold hover:bg-orange-500 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>


      <footer className="footer p-10 text-neutral-content bg-white">
        
        <nav>
          <header className="font-bold text-xl text-orange-400">Home</header>
          <a className="link link-hover text-gray-600">Brands</a>
          <a className="link link-hover text-gray-600">Product</a>
          <a className="link link-hover text-gray-600">My Cart</a>
          <a className="link link-hover text-gray-600">Login</a>
        </nav>
        <nav>
          <header className="font-bold text-xl text-orange-400">Company</header>
          <a className="link link-hover text-gray-600">About us</a>
          <a className="link link-hover text-gray-600">Contact</a>
          <a className="link link-hover text-gray-600">Jobs</a>
          <a className="link link-hover text-gray-600">Press kit</a>
        </nav>
        <nav>
          <header className="font-bold text-xl text-orange-400">Legal</header>
          <a className="link link-hover text-gray-600">Terms of use</a>
          <a className="link link-hover text-gray-600">Privacy policy</a>
          <a className="link link-hover text-gray-600">Cookie policy</a>
        </nav>
      </footer>
      <hr/>


      <div className="flex justify-between items-center px-10 py-5">
        <p>TechNest © 2023 Demo Store. All Rights Reserved By Designer <span className="text-orange-400">Rahul Sutradhar</span></p>
        <img className="w-16" src="/Logo.png" alt="" />
      </div>
        </div>
    </div>
  );
};

export default Footer;
