import { createSlice } from '@reduxjs/toolkit'

export const manageUserCart = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },

  reducers: {
    addToCart: (state, item) => {
      if (!state.list.some(i => i.ingredient === item.payload)) {
        state.list.push({ ingredient: item.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, content) => {
      const idx = state.list.findIndex((item) => item.ingredient === content.payload);
      state.list[idx].quantity += 1;
    },
    decrementQuantity: (state, content) => {
      const idx = state.list.findIndex((item) => item.ingredient === content.payload);
      state.list[idx].quantity -= 1;
    },
    removeFromCart: (state, name) => {
      state.list = state.list.filter((item) => item.ingredient !== name.payload);
    }
  },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = manageUserCart.actions

export const cartList = (state) => state.cart.list

export default manageUserCart.reducer