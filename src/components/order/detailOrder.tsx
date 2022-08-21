import { useEffect, useState } from 'react';
import detailOrderApi from '../../api/detailOrderApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { DetailOrder } from '../../models/detailOder';
import jwt_decode from "jwt-decode";
import axiosClient from '../../api/axiosClient';
import { detailOrderActions } from '../../redux/detailOrderSlice';

interface MyToken {
    username: string;
    admin: boolean;
}


const DetailOrderCPN = () => {
    let detailOrders: DetailOrder[] = useAppSelector((state) => state.detailOrder.detailOrders)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.token) {
            detailOrderApi.getOrderDetailAsync(jwt_decode<MyToken>(localStorage.token).username, dispatch)
        }
    }, [])
    const handleConfirmUser = () => {
        if (!detailOrders.length) {
            alert('Giõ hàng trống')
            return
        }
        try {
            axiosClient.get('/order/init', {
                params: { customerId: jwt_decode<MyToken>(localStorage.token).username }
            })
        }
        catch (error) {

        }
    }
    const removeDetailOrder = (id: any) => {
        axiosClient.delete('/detailOrder', {
            params: { id: id }
        })
        detailOrders = detailOrders.filter(detail => detail._id !== id)
        dispatch(detailOrderActions.getDetailOrders_success(detailOrders))
    }
    return (
        <>
            <div className="container mt-5 d-flex flex-column justify-content-evenly ">
                <div className="d-flex flex-row justify-content-evenly">
                    <p>STT</p>
                    <p>Tên sản phẩm</p>
                    <p>Số lượng</p>
                    <p>Xóa</p>
                </div>
                <div>
                    {detailOrders && detailOrders.map((item, index) => {
                        return (<div className="d-flex flex-row justify-content-evenly" key={index}>
                            <p>{index + 1}</p>
                            <p>{item.productId}</p>
                            <p>{item.amount}</p>
                            <i onClick={() => removeDetailOrder(item._id)} className="fa-solid fa-xmark"></i>
                        </div>)
                    })}
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success m-3" onClick={handleConfirmUser}>Xác nhận mua</button>
                </div>
            </div>
        </>
    );
}

export default DetailOrderCPN;