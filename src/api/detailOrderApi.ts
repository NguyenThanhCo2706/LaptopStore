import ResponseGenerator from "../interfaces/responseGenerator"
import { Category } from "../models"
import { detailOrderActions } from "../redux/detailOrderSlice"
import axiosClient from "./axiosClient"







const detailOrderApi = {
    async getOrderDetailAsync(customerId: any, dispatch: any) {
        dispatch(detailOrderActions.getDetailOrders_init())
        try {
            const url = '/detailOrder/'
            const res = await axiosClient.get(url, { params: { customerId: customerId } })
            dispatch(detailOrderActions.getDetailOrders_success(res.data))
        }
        catch (err) {
            dispatch(detailOrderActions.getDetailOrders_error())
        }
    },
}

export default detailOrderApi