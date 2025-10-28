import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../store/cartSlice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 mb-3 rounded-lg shadow-sm">
      <div className="flex gap-3 items-center">
        <img src={data.image} alt={data.title} className="w-12 h-12 rounded-md" />
        <div>
          <h3 className="text-sm font-semibold">{data.title}</h3>
          <p className="text-xs text-gray-600">₹{data.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            dispatch(
              changeQuantity({ id: data.id, quantity: data.quantity - 1 })
            )
          }
          className="bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center text-sm font-bold"
        >
          −
        </button>
        <span>{data.quantity}</span>
        <button
          onClick={() =>
            dispatch(
              changeQuantity({ id: data.id, quantity: data.quantity + 1 })
            )
          }
          className="bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center text-sm font-bold"
        >
          +
        </button>

        <button
          onClick={() => dispatch(removeFromCart(data.id))}
          className="ml-2 text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
