import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { DataResLogin, Product } from "../../models";
import jwt_decode from "jwt-decode";
import { userActions } from "../../redux/userSlice";
import productApi from "../../api/productApi";

interface MyToken {
    username: string;
    admin: boolean;
}

const Header = () => {
    const token: string = useAppSelector((state) => state.user.login.token)
    const [searchProduct, setSearchProduct] = useState('')
    const products: Product[] = useAppSelector((state) => state.product.productsSearch.allProducts)
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
    const handleSearch = (e: any) => {
        setSearchProduct(e.target.value)
        productApi.searchProduct(e.target.value, dispatch)
    }
    const navigateProduct = (str: any) => {
        setSearchProduct('')
        navigate('/product/detail/' + str)
    }
    const cartClick = () => {
        try {
            if (jwt_decode<MyToken>(localStorage.token).admin) {
                navigate('/comfirmorder')
            }
            else navigate('/cart')
        }
        catch (error) {

        }
    }
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row justify-content-md-between fs-1 text-white p-3">
                    <div className="col-lg-4 col-md-6 hover d-lg-block " onClick={navigateHome}>
                        LaptopStore
                    </div>
                    <div className="position-relative align-self-center col-lg-4 col-md-6">
                        <input type="text" className="form-control" placeholder='Nhập tên sản phẩm, từ khóa cần tìm,...' value={searchProduct} onChange={handleSearch} />
                        <div className="position-absolute border text-dark  z-index fs-6 bg-light me-md-2">
                            {searchProduct && products?.map((item, index) => {
                                return (
                                    <div key={index} className="p-2 hover" onClick={() => navigateProduct(item._id)}>{item.name}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center align-self-center col-lg-4 fs-5">
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

                        <div className="ms-5">
                            <i onClick={cartClick} className="fa-solid fa-cart-shopping fs-2 hover"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;