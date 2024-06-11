import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";


const AddSony = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const previousPrice = e.target.previousPrice.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;

        const newdata = {name, brand, type, price,previousPrice, description, photo}
        console.log(newdata);


        fetch('https://brand-shop-side-server.vercel.app/sonyData',  {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newdata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <NavLink to={'/'} className='font-bold text-3xl text-[#374151] flex gap-3 items-center max-w-6xl mx-auto mt-6'>
                Left Icon
                <h1 >Back To Home</h1>
            </NavLink>
           <form onSubmit={handleAddProduct} className="py-10">
            <div className="max-w-6xl mx-auto bg-[#F4F3F0] p-7 rounded-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl text-[#374151] font-bold text-center mb-4">Add A New Product</h1>
                    <p className="text-justify mb-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-5 justify-center">
                    <div>
                        <h1 className="font-semibold mb-2">Name</h1>
                        <input type="text" name="name" placeholder="Enter Product Name" className="border-2 border-gray-300 bg-white p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]" />
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2">Brand Name</h1>
                        <input type="text" name="brand" placeholder="Enter Brand Name" className="border-2 border-gray-300 bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-5 justify-center">
                    <div>
                        <h1 className="font-semibold mb-2">Product Tpye</h1>
                        <input type="text" name="type" placeholder="Enter Product Type" className="border-2 border-gray-300 bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <h1 className="font-semibold mb-2">Current Price</h1>
                            <input type="text" name="price" placeholder="Enter The Product Price" className="border-2 border-gray-300 bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]" />
                        </div>
                        <div>
                            <h1 className="font-semibold mb-2">Previous Price</h1>
                            <input type="text" name="previousPrice" placeholder="Enter Previous Price" className="border-2 border-gray-300 bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]" />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-5 justify-center">
                    <div className='col-span-2'>
                        <h1 className="font-semibold mb-2">Description</h1>
                        <input type="text" name="description" placeholder="Enter Your Products's Short Description" className="border-2 border-gray-300 bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-5 justify-center">
                    <div className='col-span-2'>
                        <h1 className="font-semibold mb-2">Photo URL</h1>
                        <input type="text" name="photo" placeholder="Enter You product Photo URL" className="border-2 border-gray-300 bg-white  p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-[#e48e5c] transition duration-300 ease-in-out hover:border-[#8d5839]" />
                    </div>
                </div>
                <h1 className="font-semibold mb-2">Rating</h1>
                <div className="rating rating-md mb-6">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-5 justify-center">
                    <div className='col-span-2'>
                        <input type="submit" value="Add Product" className="p-2 border border-[#331A15] rounded-md w-full bg-[#D2B48C] font-semibold btn" />
                    </div>
                </div>
            </div>
                
           </form>
        </div>
        </div>
    );
};

export default AddSony;