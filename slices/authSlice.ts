import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserPublic } from '@/types/user'
import { RootState } from 'store'

export interface AuthState {
  user: UserPublic | null
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  loading: false
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
    },
    changeLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
})

export const { setUser, logOut, changeLoading } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user
export const selectLoading = (state: RootState) => state.auth.loading

export default authSlice.reducer