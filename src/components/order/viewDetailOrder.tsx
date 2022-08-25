import { useEffect } from 'react';
import detailOrderApi from '../../api/detailOrderApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate, useParams } from 'react-router-dom'
import { DetailOrder } from '../../models/detailOder';


const ViewDetailOrder = () => {
    let detailOrders: DetailOrder[] = useAppSelector((state) => state.detailOrder.detailOrders)
    const token: string = useAppSelector((state) => state.user.login.token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { orderId } = useParams()
    useEffect(() => {
        if (localStorage.token) {
            detailOrderApi.viewDetailOrder(orderId, dispatch, token)
        }
    }, [])
    return (
        <>
            <div className="container mt-5 d-flex flex-column justify-content-evenly ">
                <div className="d-flex flex-row justify-content-evenly">
                    <p>STT</p>
                    <p>Tên sản phẩm</p>
                    <p>Số lượng</p>
                </div>
                <div>
                    {detailOrders && detailOrders.map((item, index) => {
                        return (<div className="d-flex flex-row justify-content-evenly" key={index}>
                            <p>{index + 1}</p>
                            <p>{item.product?.productName}</p>
                            <p>{item.amount}</p>
                        </div>)
                    })}
                </div>
                <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-secondary" onClick={() => { navigate('/comfirmorder') }}>Back</button>
                </div>
            </div>
        </>
    );
}

export default ViewDetailOrder;