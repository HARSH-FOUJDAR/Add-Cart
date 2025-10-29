import { useState, useEffect } from "react";
import { Product } from "../product";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/Cart";
const Cartitem = ({ data }) => {
  const { productid, quantity } = data;
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // Product details find kar rahe hain id se
    const findDetails = Product.find((p) => p.id === productid);
    if (findDetails) setDetails(findDetails);
  }, [productid]);
  const Handelminusquantity = () => {
    dispatch(changeQuantity({
    productid:productid,
    quantity : productid -1,
  }))
  }
  const Handelplusquantity=()=>{
  dispatch(changeQuantity({
    productid:productid,
    quantity : productid +1,
  }))

}

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-3 border-b border-slate-700 rounded-md shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={details.image}
          alt={details.title}
          className="w-12 h-12 object-cover rounded-md"
        />
        <h3 className="text-sm font-medium">{details.title}</h3>
      </div>

      <p className="font-semibold text-sm">₹{(details.price || 0) * quantity}</p>

      <div className="w-20 flex justify-between items-center">
        <button className="bg-gray-200 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold" onClick={Handelminusquantity}>
          -
        </button>
        <span className="text-sm">{quantity}</span>
        <button className="bg-gray-200 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold" onClick={Handelplusquantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default Cartitem;
