import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import { postApi } from '../service/postApi'
import { productsApi } from '../service/productsApi'

export const store = configureStore({
  reducer: {
    loginReducer,
    [postApi.reducerPath]: postApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware,productsApi.middleware),
})