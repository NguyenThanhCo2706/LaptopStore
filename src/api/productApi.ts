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
    async getProductByCategory(category: any, dispatch: any) {
        dispatch(productActions.getAllProduct_init())
        try {
            const url = '/product/category'
            const res = await axiosClient.get(url, { params: { category: category } })
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
    },
    async searchProduct(name: string, dispatch: any) {
        dispatch(productActions.getProductSearch_init())
        if (name === '') {
            dispatch(productActions.getProductSearch_success(undefined))
            return
        }
        try {
            const url = '/product/search'
            const res = await axiosClient.get(url, { params: { name: name } })
            dispatch(productActions.getProductSearch_success(res.data))
        }
        catch (err) {
            dispatch(productActions.getProductSearch_error())
        }
    },
    async removeProduct(id: string, token: string, dispatch: any, products: Product[]) {
        dispatch(productActions.getAllProduct_init())
        try {
            const url = '/product/'
            await axiosClient.delete(url, {
                params: { id: id },
                headers: {
                    "authorization": `Bearer ${token}`,
                }
            })
            dispatch(productActions.getAllProduct_success(products.filter(product => product._id !== id)))
        }
        catch (err) {
            dispatch(productActions.getAllProduct_error())
        }
    }
}

export default productApi