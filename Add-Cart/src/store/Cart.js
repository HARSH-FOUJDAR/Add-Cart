import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // [{ productId, quantity }]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Product add karna (agar pehle se hai to quantity badhao)
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.productId === productId);

      if (index >= 0) {
        // Pehle se product hai — quantity badha do
        state.items[index].quantity += quantity;
      } else {
        // Naya product add karo
        state.items.push({ productId, quantity });
      }
    },

    // ✅ Product ki quantity update karna
    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.productId === productId);

      if (index >= 0) {
        if (quantity > 0) {
          state.items[index].quantity = quantity;
        } else {
          // Agar quantity 0 ho jaye to item remove kar do
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
