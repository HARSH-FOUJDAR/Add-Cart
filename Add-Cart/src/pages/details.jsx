import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/Cart"; // ✅ Redux action import
import { Product } from "../product";

const Details = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(1);

  // ✅ Redux se cart items lena
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Slug ke base par product find karna
  useEffect(() => {
    const findDetails = Product.find(
      (product) =>
        product.slug === slug ||
        product.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (findDetails) {
      setDetail(findDetails);
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  // ✅ Quantity functions
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(Math.max(1, quantity - 1));

  // ✅ Add to Cart handler
  const handleAddToCart = () => {
    const alreadyInCart = cartItems.find((item) => item.ProductId === detail.id);

    if (alreadyInCart) {
      alert("Item already added to the cart!");
      return;
    }

    dispatch(
      addToCart({
        ProductId: detail.id,
        quantity,
      })
    );

    alert("Product added to cart successfully!");
  };

  return (
    <>
      <h2 className="text-3xl text-center font-bold mt-5">PRODUCT DETAILS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-5">
        {/* ✅ Left: Product Image */}
        <div>
          <img
            src={detail.image}
            alt={detail.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* ✅ Right: Product Info */}
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.title}</h1>
          <p className="text-gray-500 text-lg">{detail.category}</p>
          <p className="text-gray-700 text-base">{detail.description}</p>

          <p className="font-bold text-3xl text-green-600">₹{detail.price}</p>

          {/* ✅ Quantity Controls */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={decreaseQty}
              className="bg-gray-300 px-4 py-2 rounded-lg text-xl font-bold hover:bg-gray-400"
            >
              -
            </button>

            <span className="text-xl font-semibold">{quantity}</span>

            <button
              onClick={increaseQty}
              className="bg-gray-300 px-4 py-2 rounded-lg text-xl font-bold hover:bg-gray-400"
            >
              +
            </button>
          </div>

          {/* ✅ Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white mt-4 px-5 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
