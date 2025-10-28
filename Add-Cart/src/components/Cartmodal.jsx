import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";

const CartModal = ({ onClose }) => {
  const carts = useSelector((store) => store.cart.items);

  const totalAmount = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 flex justify-end bg-black bg-opacity-40 z-30">
      <div className="w-96 h-full bg-white shadow-2xl flex flex-col animate-slideInRight">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {carts.length > 0 ? (
            carts.map((item) => <CartItem key={item.id} data={item} />)
          ) : (
            <p className="text-center text-gray-500 mt-10">Cart is empty 🛒</p>
          )}
        </div>

        {carts.length > 0 && (
          <div className="p-4 border-t flex flex-col gap-3">
            <p className="text-lg font-semibold">
              Total: <span className="text-green-600">₹{totalAmount.toFixed(2)}</span>
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
