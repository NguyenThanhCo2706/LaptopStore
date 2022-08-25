import { useEffect } from 'react';
import detailOrderApi from '../../api/detailOrderApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { DetailOrder } from '../../models/detailOder';
import jwt_decode from "jwt-decode";
import { MyToken } from '../../models';


const CartCustomer = () => {
    let detailOrders: DetailOrder[] = useAppSelector((state) => state.detailOrder.detailOrders)
    const token: string = useAppSelector((state) => state.user.login.token)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.token) {
            detailOrderApi.getOrderDetailAsync(jwt_decode<MyToken>(localStorage.token).username, dispatch, token)
        }
    }, [])
    const handleConfirmUser = () => {
        if (!detailOrders.length) {
            alert('Giõ hàng trống')
            return
        }
        detailOrderApi.comfirmOrderUser(jwt_decode<MyToken>(localStorage.token).username, dispatch, token)
    }
    const removeDetailOrder = (id: any) => {
        detailOrderApi.removeDetailOrder(id, dispatch, detailOrders, token)
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
                            <p>{item.product?.productName}</p>
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

export default CartCustomer;