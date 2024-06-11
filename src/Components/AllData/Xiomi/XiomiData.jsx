import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import Swal from "sweetalert2";


const XiomiData = ({card}) => {
    const {_id, img, name, price, brand, previousPrice, description} = card;
    const [toggle, setToggle] = useState(1)
    const toogleTabs = (id) => {
        setToggle(id)
      }

      const newData = {_id, img, brand, name, price, previousPrice, description}
      const handleSubmit = () => {
        fetch('https://brand-shop-side-server.vercel.app/wishList',  {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newData)
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
            
            <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-orange-600 mb-3">
            {name}
          </h1>
          <div className="flex gap-3 items-center mb-3">
            <p className="text-xl text-orange-600 font-bold">{price}</p>
            <p className="text-sm text-gray-500 line-through">{previousPrice}</p>
          </div>

          <div className="flex items-center gap-6 mb-3">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-orange-600 font-semibold">(5 reviews)</p>
          </div>

          <p className="mb-5">
          {description}
          </p>
          <div className="flex gap-10">
            <button onClick={handleSubmit}
              to={"/"}
              className="focus:outline-none h-12 w-auto p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5 gap-2"
            >
              Add To Cart
              <BsFillCartCheckFill className="text-2xl"></BsFillCartCheckFill>
            </button>
            <Link
              to={"/"}
              className="focus:outline-none h-12 w-auto p-3 border border-gray-400 rounded-md bg-slate-100 font-semibold hover:bg-[#e6e7f5] transition duration-300 flex items-center justify-center mb-5 gap-2"
            >
              Add To Wish List <AiFillHeart className="text-2xl"></AiFillHeart>
            </Link>
          </div>

          <div className="flex gap-10">
            <div className="">
              <p className="mb-2">
                Category :{" "}
                <span className="text-orange-600 font-semibold mb2-">
                  Smartphone
                </span>
              </p>
              <p>
                MFG :{" "}
                <span className="text-orange-600 font-semibold">
                  12/03/2023
                </span>
              </p>
            </div>
            <div className="">
              <p className="mb-2">
                Tags :{" "}
                <span className="text-orange-600 font-semibold">
                  Samsung, Smartphone
                </span>
              </p>
              <p>
                Stock :{" "}
                <span className="text-orange-600 font-semibold">
                  5 items available
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-5 items-center mb-10">
          <div>
            <ul className="flex flex-wrap gap-5 font-bold text-xl">
              <li>
                <Link
                  onClick={() => toogleTabs(1)}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 underline"
                      : ""
                  }
                >
                  <span className="hover:text-blue-600">Description</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toogleTabs(2)}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 underline"
                      : ""
                  }
                >
                  <span className="hover:text-blue-600">Specifiction</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toogleTabs(3)}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 underline"
                      : ""
                  }
                >
                  <span className="hover:text-blue-600">Reviews</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>




        <div  className={toggle === 1 ? "block" : "hidden"} >
                          {/* Workshop Data */}
              <div className="grid md:grid-cols-2 gap-10">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque architecto, accusantium facilis fugit ipsa quas, natus, quibusdam ducimus consequatur voluptates iure ipsum inventore aperiam optio dolorem laudantium officia similique delectus maxime magnam incidunt culpa! Enim aut possimus sed illum vel in delectus nemo quo pariatur, voluptatum ut incidunt fugiat, fuga sit eum culpa nam numquam mollitia quis non ad, perferendis ipsum magnam voluptates. Illo, doloribus ea magnam voluptatem fugiat, dolore tempore optio quos ipsa eos quis accusamus voluptatibus nisi maiores quaerat esse temporibus dignissimos illum placeat cupiditate eligendi molestiae? Nihil, facilis distinctio. Magni deserunt natus porro asperiores similique quae enim, autem quo saepe cupiditate? Quia aliquid, beatae, quos facere debitis ducimus in odit quod unde sit corporis aliquam quidem maxime veritatis optio pariatur adipisci, voluptates cupiditate nobis. Quos quo, ipsum perspiciatis cum ad rerum, dolores officia reprehenderit, sed adipisci soluta laborum quis minus. Et harum, maxime earum nemo molestias cumque ad alias sed culpa quis aliquam eaque voluptas? Magnam labore accusamus quo suscipit? In debitis voluptas atque. Pariatur aperiam quo itaque, voluptatem modi tempora perferendis est perspiciatis voluptate soluta nesciunt doloremque beatae nemo sequi obcaecati optio ut debitis nobis! Sequi fugiat quis architecto est id aspernatur debitis laborum omnis accusantium.</p>
              </div>
        </div>

        <div  className={toggle === 2 ? "block" : "hidden"} >
                          {/* Workshop Data */}
              <div className="grid md:grid-cols-2 gap-10">
                  <p>Lorem ipsum, dolor sit amet.</p>
              </div>
        </div>
        <div  className={toggle === 3 ? "block" : "hidden"} >
                          {/* Workshop Data */}
              <div className="grid md:grid-cols-2 gap-10">
                  <p>Lorem ipsum, doloprehenderit, sed adipisci soluta laborum quis minus. Et harum, maxime earum nemo molestias cumque ad alias sed culpa quis aliquam eaque voluptas? Magnam labore accusamus quo suscipit? In debitis voluptas atque. Pariatur aperiam quo itaque, voluptatem modi tempora perferendis est perspiciatis voluptate soluta nesciunt doloremque beatae nemo sequi obcaecati optio ut debitis nobis! Sequi fugiat quis architecto est id aspernatur debitis laborum omnis accusantium.</p>
              </div>
        </div>
      </div>
        </div>
    );
};

export default XiomiData;