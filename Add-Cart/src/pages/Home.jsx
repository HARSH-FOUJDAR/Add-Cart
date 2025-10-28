import React from "react";
import { Product } from "../product";
import Productcart from "../components/Productcart";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Product.map((item) => (
        <Productcart key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Home;
