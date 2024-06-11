import { useEffect, useState } from "react";
import CartData from "./CartData";
import Navbar from "../Navbar/Navbar";


const MyCart = () => {
    const [wish, setWish] = useState([]);

    useEffect( () => {
        fetch('https://brand-shop-side-server.vercel.app/wishList')
        .then(res => res.json())
        .then(data => setWish(data))
    }, [])
    return (
        <div className="">
            <div>
                <Navbar></Navbar>
            <header className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-5">
                <h1 className="text-3xl font-bold text-orange-400 text-center">My Cart Data</h1>
            </header>

            <div className="max-w-6xl mx-auto py-7">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 bg-orange-400 rounded-lg p-4">
                    <p className="text-white font-semibold">Product Details</p>
                    <p className="text-white font-semibold">Brand</p>
                    <p className="text-white font-semibold">Price</p>
                    <p className="text-white font-semibold">Quantity</p>
                </div>
            </div>
            

        </div>
            <div>
                {
                    wish.map(data => <CartData key={data._id} data = {data} wish={wish} setWish={setWish}></CartData>)
                }
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="bg-orange-400 h-0.5 w-full rounded-lg"></div>
            </div>

            <div className="max-w-6xl mx-auto mt-5 mb-10 flex justify-end">
                <div>
                <div className="flex gap-10">
                <div>
                    <p className="mb-2 font-semibold">Subtotal : </p>
                    <p className="mb-2  font-semibold">Delivery Cost : </p>
                    <p className="mb-2  font-semibold">Total Price : </p>
                </div>

                <div>
                    <p className="mb-2 font-semibold">$300</p>
                    <p className="mb-2  font-semibold">$10</p>
                    <p className="mb-2 text-xl text-orange-400 font-semibold">$310</p>
                </div>
            </div>
                <div>
                    <button className="px-3 py-2 bg-orange-400 w-auto rounded-md text-white mt-3 font-semibold">Place Order</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;