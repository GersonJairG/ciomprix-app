import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserPublic } from '@/types/user'
import { RootState } from 'store'

export interface AuthState {
  user: UserPublic | null
}

const initialState: AuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPublic>) => {
      state.user = action.payload
    },
    logOut: (state) => {
      state.user = null
    }
  },
})

export const { setUser, logOut } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer