import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Category, Product } from '../models';
import { Order } from "../models/Order";



export interface Orderstate {
    isFetching: boolean;
    orders: Order[];
    error: boolean;
}

const initialState: Orderstate = {
    isFetching: false,
    orders: [],
    error: false,
}

const orderslice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getOrders_init(state) {
            state.isFetching = true;
            state.error = false;
        },
        getOrders_success(state, action) {
            state.isFetching = false;
            state.orders = action.payload;
            state.error = false;

        },
        getOrders_error(state) {
            state.isFetching = false;
            state.orders = [];
            state.error = true;
        },

    }
})


export const orderActions = orderslice.actions;

const orderReducer = orderslice.reducer;

export default orderReducer;