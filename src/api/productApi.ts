import ResponseGenerator from "../interfaces/responseGenerator"
import { Product } from "../models"
import { productActions } from "../redux/productSlice"
import axiosClient from "./axiosClient"







const productApi = {
    async getAll(dispatch: any) {
        dispatch(productActions.getAllProduct_init())
        try {
            const url = '/product/list'
            const res = await axiosClient.get(url)
            dispatch(productActions.getAllProduct_success(res.data))
        }
        catch (err) {
            dispatch(productActions.getAllProduct_error())
        }
    },
    async getProductById(params: any, dispatch: any, navigate: any) {
        dispatch(productActions.getProduct_init())
        try {
            const url = '/product/'
            const res = await axiosClient.get(url, { params: { id: params } })
            dispatch(productActions.getProduct_success(res.data))
        }
        catch (err) {
            dispatch(productActions.getProduct_error())
            navigate('/')
        }

        return
    },
    addProduct(product: Product) {
        const json = JSON.stringify(product);
        console.log(json)
        const url = '/product'
        axiosClient.post(url, json)
    },
    updateProduct(product: Product) {

    }
}

export default productApi