import ResponseGenerator from "../interfaces/responseGenerator"
import { Category } from "../models"
import { Order } from "../models/Order"
import { orderActions } from "../redux/orderSlice"
import axiosClient from "./axiosClient"







const orderApi = {
    async getAllOrder(dispatch: any) {
        dispatch(orderActions.getOrders_init())
        try {
            const url = '/order/list'
            const res = await axiosClient.get(url)
            dispatch(orderActions.getOrders_success(res.data))
        }
        catch (err) {
            dispatch(orderActions.getOrders_error())
        }
    },
    async comfirmOrder(orderId: string, admin: string, dispatch: any, orders: Order[]) {
        dispatch(orderActions.getOrders_init())
        try {
            const url = '/order'
            const dataForm = new URLSearchParams();
            dataForm.append("orderId", orderId)
            dataForm.append("admin", admin)
            const res = await axiosClient.put(url, dataForm)
            dispatch(orderActions.getOrders_success(res.data))
        }
        catch (err) {
            console.log(err)
            dispatch(orderActions.getOrders_error())
        }
    }
}

export default orderApi