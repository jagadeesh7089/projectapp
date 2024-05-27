import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import { postApi } from '../service/postApi'
export const store = configureStore({
  reducer: {
    loginReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})