import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const CartData = ({ data, setWish, wish }) => {
  const { _id, img, name, brand, price, previousPrice, description } = data;

  const handleDelete = (_id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`https://brand-shop-side-server.vercel.app/wishList/${_id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const remaining = data.filter(data => data._id !== _id);
                  setWish(remaining)
            }
        })
        }
      })
}
  return (
    <div className="">
      <div className="max-w-6xl mx-auto py-7 flex justify-between">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 rounded-lg p-4">
          <div>
            <div className="flex gap-6">
              <div>
                <img className="w-56" src={img} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-400">
                  {name}
                </h1>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-semibold">{brand}</h1>
          </div>

          <div>
            <h1 className="font-semibold">{price}</h1>
          </div>

          <div>
            <input
              className="w-32 border bg-white rounded-md p-1.5"
              type="number"
            />
          </div>
          
        </div>
        <div>
            <button onClick={handleDelete}>
                <FaDeleteLeft className="text-red-600 text-3xl"></FaDeleteLeft>
            </button>
          </div>
      </div>

      
    </div>
  );
};

export default CartData;
