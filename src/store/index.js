import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart'
import favoriteReducer from '../features/favorites'

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer
  },
})