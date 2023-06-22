import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartCounterSlice = createSlice({
  name: 'cartCounter',
  initialState,
  reducers: {
    incCartCount: (state) => {
      state.value += 1
    },
    decCartCount: (state) => {
      state.value -= 1
    }
  },
})

export const { incCartCount,decCartCount } = cartCounterSlice.actions

export default cartCounterSlice.reducer