import { createSlice } from '@reduxjs/toolkit';
import { TInitialSate } from '../../../Utils/Utils';
import { toast } from 'sonner';

const initialState: TInitialSate = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const selectedProduct = state.cart.find(
        (item) => item._id === product._id
      );
      if (!selectedProduct) {
        state.cart.push({
          ...product,
          quantity: 1,
        });
        toast.success('Product added to cart');
      } else {
        if (selectedProduct.quantity! < product.availableQuantity) {
          selectedProduct.quantity! += 1;
          toast.success('Product added to cart');
        } else {
          toast.error('Cannot add more, exceeds available quantity');
        }
      }
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      if (product.quantity > 1) {
        const selectedProduct = {
          ...product,
          quantity: product.quantity - 1,
        };
        state.cart = state.cart.filter((item) => item._id !== product._id);
        state.cart.push(selectedProduct);
      } else {
        state.cart = state.cart.filter(
          (product) => product._id !== product._id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
