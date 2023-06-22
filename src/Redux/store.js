import { configureStore } from '@reduxjs/toolkit'
import cartCounter from './Slices/cartCounterSlice'
import products from './Slices/productsSlice'

export const store = configureStore({
  reducer: {
    cartCounter,
    products
  },
})
export default store