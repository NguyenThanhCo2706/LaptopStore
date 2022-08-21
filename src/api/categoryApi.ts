import ResponseGenerator from "../interfaces/responseGenerator"
import { Category } from "../models"
import { categoryActions } from "../redux/categorySlice"
import axiosClient from "./axiosClient"







const categoryApi = {
    async getAll(dispatch: any) {
        dispatch(categoryActions.getAllCategory_init())
        try {
            const url = '/category'
            const res = await axiosClient.get(url)
            dispatch(categoryActions.getAllCategory_success(res.data))
        }
        catch (err) {
            dispatch(categoryActions.getAllCategory_error())
        }
    },
    
}

export default categoryApi