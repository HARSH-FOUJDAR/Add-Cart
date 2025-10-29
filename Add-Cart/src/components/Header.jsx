import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity || 1));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <>
      <header className="flex justify-between items-center mb-5 px-4 py-3 shadow-md bg-white sticky top-0 z-20">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          FlipClone 🛍️
        </Link>

        <div
          onClick={() => setIsCartOpen(true)}
          className="relative w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer"
        >
          <FaCartPlus className="text-xl" />
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
              {totalQuantity}
            </span>
          )}
        </div>
      </header>

      {/* Cart Drawer */}
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Header;
