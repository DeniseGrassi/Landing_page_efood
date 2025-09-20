import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import { efoodApi } from '../services/efoodApi'
import uiReducer from './reducers/ui'   

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    carrinho: carrinhoReducer,
    [efoodApi.reducerPath]: efoodApi.reducer
  },
  middleware: (getDefault) => getDefault().concat(efoodApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
