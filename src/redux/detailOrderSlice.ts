import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Category, Product } from '../models';
import { DetailOrder } from "../models/detailOder";



export interface DetailOrderState {
    isFetching: boolean;
    detailOrders: DetailOrder[];
    error: boolean;
}

const initialState: DetailOrderState = {
    isFetching: false,
    detailOrders: [],
    error: false,
}

const detailOrderSlice = createSlice({
    name: 'detailOrder',
    initialState,
    reducers: {
        getDetailOrders_init(state) {
            state.isFetching = true;
        },
        getDetailOrders_success(state, action) {
            state.isFetching = false;
            state.detailOrders = action.payload;
            state.error = false;

        },
        getDetailOrders_error(state) {
            state.error = true;
        },

    }
})


export const detailOrderActions = detailOrderSlice.actions;

const detailOrderReducer = detailOrderSlice.reducer;

export default detailOrderReducer;