import { createSlice } from '@reduxjs/toolkit'

export const manageUserCart = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },

  reducers: {
    addToCart: (state, item) => {
        console.log(item)
    },
    removeToCart: (state, idx) => {
        console.log(idx)
    }
  },
})

export const { addToCart, removeToCart } = manageUserCart.actions

export default manageUserCart.reducer