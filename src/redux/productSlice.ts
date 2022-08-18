import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from '../models';



export interface UserState {
    product: {
        isFetching: boolean;
        currentProduct?: Product;
        error: boolean;
    };
    products: {
        isFetching: boolean;
        allProducts: Product[];
        error: boolean;
    }
}

const initialState: UserState = {
    product: {
        isFetching: false,
        currentProduct: undefined,
        error: false,
    },
    products: {
        isFetching: false,
        allProducts: [],
        error: false,
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProduct_init(state) {
            state.products.isFetching = true;
        },
        getAllProduct_success(state, action) {
            state.products.isFetching = false;
            state.products.allProducts = action.payload;
            state.products.error = false;

        },
        getAllProduct_error(state) {
            state.products.error = true;
        },


        getProduct_init(state) {
            state.product.isFetching = true;
        },
        getProduct_success(state, action) {
            state.product.isFetching = false;
            state.product.currentProduct = action.payload;
            state.product.error = false;

        },
        getProduct_error(state) {
            state.product.error = true;
        },
    }
})


export const productActions = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;