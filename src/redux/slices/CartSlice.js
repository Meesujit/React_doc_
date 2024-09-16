import {createSlice, createSelector} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        // Adding feature to add item in cart
        addItem: (state, action) => {
            //state is immutable, so we can't directly push the item in state
            state.push(action.payload)
        } 
    }
});

export const getItemSelector = createSelector(
    (state) => state.cart,
    (state) => state
)

export const {addItem} = cartSlice.actions

export default cartSlice.reducer;

