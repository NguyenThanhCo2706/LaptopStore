import { DetailOrder } from "../models/detailOder"
import { detailOrderActions } from "../redux/detailOrderSlice"
import axiosClient from "./axiosClient"


const detailOrderApi = {
    async getOrderDetailAsync(customer: any, dispatch: any, token: string) {
        dispatch(detailOrderActions.getDetailOrders_init())
        try {
            const url = '/detailOrder/'
            const res = await axiosClient({
                method: "get",
                url: url,
                headers: {
                    "authorization": `Bearer ${token}`,
                },
                params: { customer: customer }
            })
            dispatch(detailOrderActions.getDetailOrders_success(res.data))
        }
        catch (err) {
            dispatch(detailOrderActions.getDetailOrders_error())
        }
    },
    async viewDetailOrder(orderId: any, dispatch: any, token: string) {
        dispatch(detailOrderActions.getDetailOrders_init())
        try {
            const url = '/detailOrder/view'
            const res = await axiosClient({
                method: "get",
                url: url,
                headers: {
                    "authorization": `Bearer ${token}`,
                },
                params: { orderId: orderId }
            })
            dispatch(detailOrderActions.getDetailOrders_success(res.data))
        }
        catch (err) {
            dispatch(detailOrderActions.getDetailOrders_error())
        }
    },
    async comfirmOrderUser(customer: any, dispatch: any, token: string) {
        dispatch(detailOrderActions.getDetailOrders_init())
        try {
            const url = '/order'
            const dataForm = new URLSearchParams();
            dataForm.append("customer", customer)
            await axiosClient({
                method: "post",
                url: url,
                headers: {
                    "authorization": `Bearer ${token}`,
                },
                data: dataForm
            })
            dispatch(detailOrderActions.getDetailOrders_success([]))
        }
        catch (err) {
            dispatch(detailOrderActions.getDetailOrders_error())
        }
    },
    async removeDetailOrder(id: any, dispatch: any, detailOrders: DetailOrder[], token: string) {
        dispatch(detailOrderActions.getDetailOrders_init())
        try {
            const url = '/detailOrder'
            axiosClient({
                method: "delete",
                url: url,
                headers: {
                    "authorization": `Bearer ${token}`,
                },
                params: { id: id }
            })
            detailOrders = detailOrders.filter(detail => detail._id !== id)
            dispatch(detailOrderActions.getDetailOrders_success(detailOrders))
        }
        catch (err) {
            dispatch(detailOrderActions.getDetailOrders_error())
        }
    },
}

export default detailOrderApi