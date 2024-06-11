import { useEffect, useState } from "react";
import CategorySectionCard from "./CategorySectionCard";


const CategorySection = () => {
    const [data, setData] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
  
    // Fetch data from the API
    useEffect(() => {
      fetch('https://brand-shop-side-server.vercel.app/card')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data: ', error));
    }, []);
  
    // Filter data by brand
    const filteredData = selectedBrand
      ? data.filter(item => item.brand === selectedBrand)
      : data;
  
    // Replace 'brandList' with the actual list of brand names from your data
    const brandList = Array.from(new Set(data.map(item => item.brand)));
  
    const handleBrandFilter = brand => {
      setSelectedBrand(brand);
    };
  
    const clearFilters = () => {
      setSelectedBrand(null);
    };
    return (
        <div className="grid grid-cols-3 gap-32 px-20">
            <div>
                <button onClick={() => handleBrandFilter("Samsung")} className="focus:outline-none h-12 w-full p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
                    Samsung
                </button>
                <button onClick={() => handleBrandFilter("Apple")} className="focus:outline-none h-12 w-full px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
                 Apple
                </button>
                <button onClick={() => handleBrandFilter("Google")} className="focus:outline-none h-12 w-full p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
                Google
                </button>
                <button onClick={() => handleBrandFilter("Sony")} className="focus:outline-none h-12 w-full px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
                Sony
                </button>
                <button onClick={() => handleBrandFilter("Huawei")} className="focus:outline-none h-12 w-full p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
                 Huawei
                </button>
                <button onClick={() => handleBrandFilter("Xiomi")} className="focus:outline-none h-12 w-full px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
                 Xiomi
                </button>
            </div>


            <div className="col-span-2">
            <div className="grid grid-cols-2">
                    {
                        filteredData.map(product => <CategorySectionCard key={product._id} product ={product}></CategorySectionCard>)
                    }
            </div>
            </div>
        </div>
    );
};

export default CategorySection;









































// import { useEffect, useState } from "react";
// import CategorySectionCard from "./CategorySectionCard";


// const CategorySection = () => {
//     const [allProduct, setAllProduct] = useState([]);

//     const filteredresult = (catItems) => {
//         const result = allProduct.filter((product) => {
//             return product.brand === catItems;
//         });
//         setAllProduct(result)

//     }
    

//     useEffect( () => {
//         fetch('https://brand-shop-side-server.vercel.app/card')
//         .then(res => res.json())
//         .then(data => {
//             setAllProduct(data);
//         })
//     }, [])

//     return (
//         <div className="grid grid-cols-3 gap-32 px-20">
//             <div>
//                 <button onClick={() => filteredresult("Samsung")} className="focus:outline-none h-12 w-full p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
//                     Samsung
//                 </button>
//                 <button onClick={() => filteredresult("Apple")} className="focus:outline-none h-12 w-full px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
//                  Apple
//                 </button>
//                 <button onClick={() => filteredresult("Google")} className="focus:outline-none h-12 w-full p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
//                 Google
//                 </button>
//                 <button onClick={() => filteredresult("Sony")} className="focus:outline-none h-12 w-full px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
//                 Sony
//                 </button>
//                 <button onClick={() => filteredresult("Huawei")} className="focus:outline-none h-12 w-full p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
//                  Huawei
//                 </button>
//                 <button onClick={() => filteredresult("Xiomi")} className="focus:outline-none h-12 w-full px-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5">
//                  Xiomi
//                 </button>
//             </div>


//             <div className="col-span-2">
//             <div className="grid grid-cols-2">
//                     {
//                         allProduct.map(product => <CategorySectionCard key={product._id} product ={product}></CategorySectionCard>)
//                     }
//             </div>
//             </div>
//         </div>
//     );
// };

// export default CategorySection;