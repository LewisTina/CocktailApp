import { createSlice } from '@reduxjs/toolkit'

export const manageUserFavorite = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },

  reducers: {
    addToFavorite: (state, item) => {
        if (!state.list.some(favorite => favorite.idDrink === item.payload.idDrink)) {
          state.list.push(item.payload);
        }
    },
    removeFromFavorite: (state, idx) => {
      state.list = state.list.filter((item) => item.idDrink !== idx.payload);
    }
  },
})

export const { addToFavorite, removeFromFavorite } = manageUserFavorite.actions

export default manageUserFavorite.reducer