import ResponseGenerator from "../interfaces/responseGenerator"
import { Category } from "../models"
import { Order } from "../models/Order"
import { orderActions } from "../redux/orderSlice"
import axiosClient from "./axiosClient"


const orderApi = {
    async getAllOrder(dispatch: any, token: string) {
        dispatch(orderActions.getOrders_init())
        try {
            const url = '/order/list'
            const res = await axiosClient({
                method: "get",
                url: url,
                headers: {
                    "authorization": `Bearer ${token}`,
                }
            })
            dispatch(orderActions.getOrders_success(res.data))
        }
        catch (err) {
            dispatch(orderActions.getOrders_error())
        }
    },
    async comfirmOrder(orderId: string, admin: string, dispatch: any, orders: Order[], token: string) {
        dispatch(orderActions.getOrders_init())
        try {
            const url = '/order'
            const dataForm = new URLSearchParams();
            dataForm.append("orderId", orderId)
            dataForm.append("admin", admin)
            const res = await axiosClient({
                method: "put",
                url: url,
                headers: {
                    "authorization": `Bearer ${token}`,
                },
                data: dataForm
            })
            dispatch(orderActions.getOrders_success(res.data))
        }
        catch (err) {
            dispatch(orderActions.getOrders_error())
        }
    }
}

export default orderApi