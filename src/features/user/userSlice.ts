import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  token: string | null
}

const initialState: UserState = {
  token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuthenticated: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    userLoggedOut: (state) => {
      state.token = null
    }
  }
})

export const { userAuthenticated, userLoggedOut } = userSlice.actions
export default userSlice.reducer
