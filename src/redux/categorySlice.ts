import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Category, Product } from '../models';



export interface CategoryState {
    product: {
        isFetching: boolean;
        currentProduct?: Product;
        error: boolean;
    };
    categories: {
        isFetching: boolean;
        allCategory: Category[];
        error: boolean;
    }
}

const initialState: CategoryState = {
    product: {
        isFetching: false,
        currentProduct: undefined,
        error: false,
    },
    categories: {
        isFetching: false,
        allCategory: [],
        error: false,
    }
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getAllCategory_init(state) {
            state.categories.isFetching = true;
        },
        getAllCategory_success(state, action) {
            state.categories.isFetching = false;
            state.categories.allCategory = action.payload;
            state.categories.error = false;

        },
        getAllCategory_error(state) {
            state.categories.error = true;
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


export const categoryActions = categorySlice.actions;

const categoryReducer = categorySlice.reducer;

export default categoryReducer;