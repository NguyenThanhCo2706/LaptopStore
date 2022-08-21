import { useEffect, useState } from 'react';
import userApi from '../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { User } from '../../models'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import orderApi from '../../api/orderApi';
import { Order } from '../../models/Order';
import jwt_decode from "jwt-decode";


interface MyToken {
    username: string;
    admin: boolean;
}


const ComfirmOrder = () => {
    const orders: Order[] = useAppSelector((state) => state.order.orders)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleUserClick = () => {

    }
    useEffect(() => {
        orderApi.getAllOrder(dispatch)
    }, [])
    const comfirmOrderAdmin = (id: string) => {
        orderApi.comfirmOrder(id, jwt_decode<MyToken>(localStorage.token).username, dispatch, orders)
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
                                </>}
                        </div>)
                    })}
                </div>
            </div>
        </>
    );
}

export default ComfirmOrder;    