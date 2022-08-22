import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from '../models';



export interface ProductState {
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
    productsSearch: {
        isFetching: boolean;
        allProducts: Product[];
        error: boolean;
    }
}

const initialState: ProductState = {
    product: {
        isFetching: false,
        currentProduct: undefined,
        error: false,
    },
    products: {
        isFetching: false,
        allProducts: [],
        error: false,
    },
    productsSearch: {
        isFetching: false,
        allProducts: [],
        error: false,
    },
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProduct_init(state) {
            state.products.isFetching = true;
            state.products.allProducts = [];

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
            state.product.currentProduct = undefined;
            state.product.error = false;
        },
        getProduct_success(state, action) {
            state.product.isFetching = false;
            state.product.currentProduct = action.payload;
            state.product.error = false;
        },
        getProduct_error(state) {
            state.product.isFetching = false;
            state.product.currentProduct = undefined;
            state.product.error = true;
        },


        getProductSearch_init(state) {
            state.productsSearch.isFetching = true;
        },
        getProductSearch_success(state, action) {
            state.productsSearch.isFetching = false;
            state.productsSearch.allProducts = action.payload;
            state.productsSearch.error = false;
        },
        getProductSearch_error(state) {
            state.productsSearch.error = true;
        },
    }
})


export const productActions = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;