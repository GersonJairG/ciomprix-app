import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Status } from 'types'
import { RootState } from 'store'

export interface AlertState {
  msgAlert: string
  showAlert: boolean
  typeAlert: Status
}

const initialState: AlertState = {
  msgAlert: '',
  showAlert: false,
  typeAlert: 'info',
}

export const alertState = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    renderErrorAlert: (state, action: PayloadAction<string>) => {
      state.msgAlert = action.payload
      state.typeAlert = 'error'
      state.showAlert = true
    },
    renderWarningAlert: (state, action: PayloadAction<string>) => {
      state.msgAlert = action.payload
      state.typeAlert = 'warning'
      state.showAlert = true
    },
    renderInfoAlert: (state, action: PayloadAction<string>) => {
      state.msgAlert = action.payload
      state.typeAlert = 'info'
      state.showAlert = true
    },
    renderSuccessAlert: (state, action: PayloadAction<string>) => {
      state.msgAlert = action.payload
      state.typeAlert = 'success'
      state.showAlert = true
    },
    dismountAlert: (state) => {
      state.msgAlert = initialState.msgAlert
      state.showAlert = initialState.showAlert
      state.typeAlert = initialState.typeAlert
    },
  },
})

export const {
  renderErrorAlert,
  renderWarningAlert,
  renderInfoAlert,
  renderSuccessAlert,
  dismountAlert,
} = alertState.actions

export const selectShowAlert = (state: RootState) => state.alert.showAlert
export const selectMsgAlert = (state: RootState) => state.alert.msgAlert
export const selectTypeAlert = (state: RootState) => state.alert.typeAlert

export default alertState.reducer
