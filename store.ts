import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import alertReducer from '@/slices/alertSlice'
import authReducer from '@/slices/authSlice'

const persistConfig = {
  timeout: 1000,
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer
})

const persistReducerRoot = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistReducerRoot,
  middleware: [thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
