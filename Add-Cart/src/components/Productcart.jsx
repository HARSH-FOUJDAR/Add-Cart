import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";

const ProductCart = ({ data }) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const { id, title, price, image, description, category, rating } = data;
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addToCart({
      product: id,
      quantity: 1
    }))
  };

  // 5️⃣ UI render
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-all">
      <Link to={`/${slug}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover object-top rounded-xl shadow-md hover:scale-105 transition-transform"
        />
      </Link>

      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{category}</p>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-bold">₹{price}</span>
        <span className="flex items-center gap-1 text-yellow-500">
          <FaStar /> {rating?.rate}
        </span>
      </div>

      <button
        className="mt-3 bg-blue-500 text-white flex items-center justify-center gap-2 p-3 cursor-pointer rounded-lg hover:bg-blue-600 transition-all w-full"
        onClick={handleAddCart}
      >
        <FaCartPlus /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCart;
