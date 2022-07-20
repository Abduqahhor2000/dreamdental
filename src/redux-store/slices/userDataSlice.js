import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    value: 0
  },
  reducers: {
    addUserData: (state, action) => {
      state.value += action.payload
    },
    clearUserData: (state) => {
      state.value = 0
    },
  },
})

export const { addUserData, clearUserData } = userDataSlice.actions

export default userDataSlice.reducer