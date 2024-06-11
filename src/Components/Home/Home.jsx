
import Ad1 from "../Ad/Ad1";
import Ad2 from "../Ad/Ad2";
import Banner from "../Banner/Banner";
import Customers from "../Customers/Customers";
// import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import HotCategories from "../HotCategories/HotCategories";
import Navbar2 from "../Navbar/Navbar2";
import Slider from "../Slider";
// import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div className="bg-slate-50 dark:bg-gradient-to-r from-slate-500 to-slate-800">
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Navbar2></Navbar2>
            <Slider></Slider>
            <Ad1></Ad1>
            <HotCategories></HotCategories>
            <Customers></Customers>
            <Ad2></Ad2>
            
            
            {/* <Categories></Categories> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;