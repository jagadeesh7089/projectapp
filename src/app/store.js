import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import { postApi } from '../service/postApi'
import { productsApi } from '../service/productsApi'
import { loanApi } from '../service/loanAPI'
import { intrestApi } from '../service/intrestApi'

export const store = configureStore({
  reducer: {
    loginReducer,
    [postApi.reducerPath]: postApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [loanApi.reducerPath]: loanApi.reducer,
    [intrestApi.reducerPath]: intrestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware,productsApi.middleware,loanApi.middleware,intrestApi.middleware),
})