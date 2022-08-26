import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom'
import orderApi from '../../api/orderApi';
import { Order } from '../../models/Order';
import jwt_decode from "jwt-decode";
import { MyToken } from '../../models';



const ComfirmOrder = () => {
    const orders: Order[] = useAppSelector((state) => state.order.orders)
    const token: string = useAppSelector((state) => state.user.login.token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        orderApi.getAllOrder(dispatch, token)
    }, [])
    const comfirmOrderAdmin = (id: string) => {
        orderApi.comfirmOrder(id, jwt_decode<MyToken>(localStorage.token).username, dispatch, orders, token)
    }
    const viewDetailOrder = (orderId: string) => {
        navigate(`/viewdetail/${orderId}`)
    }
    return (
        <>
            <div className="container mt-5 mb-3 d-flex flex-column justify-content-evenly ">
                <div className="d-flex flex-row justify-content-evenly">
                    <p>STT</p>
                    <p>Đơn hàng</p>
                    <p>Tên khách hàng</p>
                    <p>Xác nhận</p>
                    <p>Edit</p>
                    <p>View</p>

                </div>
                <div>
                    {orders && orders.map((item, index) => {
                        return (<div className="d-flex flex-row justify-content-evenly" key={index}>
                            <p>{index + 1}</p>
                            <p>{item._id}</p>
                            <p>{item.customer}</p>
                            {item.isComfirm ?
                                <>
                                    <p>Đã xác nhận</p>
                                    <i className="fa-solid fa-check"></i>
                                </>
                                :
                                <>
                                    <p>Chưa xác nhận</p>
                                    <i onClick={() => comfirmOrderAdmin(String(item._id))} className="fa-solid fa-pen-to-square hover"></i>
                                </>
                            }
                            <i onClick={() => viewDetailOrder(String(item._id))} className="fa-regular fa-eye hover"></i>
                        </div>)
                    })}
                </div>

            </div>
        </>
    );
}

export default ComfirmOrder;    