import {configureStore} from '@reduxjs/toolkit'
// import cartReducer from './slices/CartSlice'
import todoReducer from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        todo: todoReducer,
    },
    devTools: true
})