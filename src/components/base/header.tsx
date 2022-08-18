import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { DataResLogin } from "../../models";
import jwt_decode from "jwt-decode";
import { userActions } from "../../redux/userSlice";

interface MyToken {
    username: string;
    exp: number;
}

const Header = () => {

    const token: string = useAppSelector((state) => state.user.login.token)
    console.log(token)
    if (token) {
        localStorage.setItem('token', token)
    }

    let navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleRegister = () => {
        navigate('user/register')
    }
    const handleLogout = () => {
        localStorage.clear()
        dispatch(userActions.logout())
        navigate('/')
    }
    const navigateHome = () => {
        navigate('/')
    }
    useEffect(() => {
        if (localStorage.token) {
            dispatch(userActions.login_success(localStorage.token))
        }
    }, [])

    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row justify-content-md-between fs-1 text-white p-3">
                    <div className="col-lg-4 col-md-6" onClick={navigateHome}>
                        LaptopStore
                    </div>
                    <div className="align-self-center col-lg-4 col-md-6">
                        <input type="text" className="form-control" placeholder='Nhập tên sản phẩm, từ khóa cần tìm,...' />
                    </div>
                    <div className="d-lg-flex justify-content-center align-items-center align-self-center col-lg-4 d-none fs-5">
                        <i className="fa-solid fa-circle-user fs-1 me-2"></i>
                        <div className="d-flex flex-column">
                            <span>Tai Khoan</span>
                            <div>
                                {token ?
                                    <>
                                        <Link to={`/user/login`}>{jwt_decode<MyToken>(token).username}</Link>
                                        <span> | </span>
                                        <span onClick={handleLogout}>Log out</span>
                                    </>
                                    :
                                    <>
                                        <Link to={`/user/login`}>Đăng nhập</Link>
                                        <span> | </span>
                                        <Link to={`/user/register`}>Đăng kí</Link>
                                    </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;