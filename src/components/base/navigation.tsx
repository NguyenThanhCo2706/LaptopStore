import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import categoryApi from '../../api/categoryApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Category } from '../../models';
import { categoryActions } from '../../redux/categorySlice';
import { userActions } from '../../redux/userSlice';


const Navigation = () => {
    const categories: Category[] = useAppSelector((state) => state.category.categories.allCategory)
    const [category, setCategory] = useState(false)
    let navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleMouseEnter = () => {
        setCategory(!category)
    }
    const handleMouseLeave = () => {
        setCategory(false)
    }
    const navigateProduct = (id: any) => {
        navigate(`/product/category/${id}`)
    }
    useEffect(() => {
        categoryApi.getAll(dispatch)
    }, [])

    return (
        <>
            <div className="container bg-light position-relative">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <div className="me-5 p-3 position-relative hover" onClick={handleMouseEnter}>
                            <div >
                                <i className="fa-solid fa-list"></i> Danh Mục sản phẩm
                            </div>
                            <div className="d-flex flex-column position-absolute border bg-white w-100 z-index" onClick={handleMouseEnter}>
                                {category && categories?.map((item, index) => {
                                    return (
                                        <div key={index} className="p-2 hover" onClick={() => navigateProduct(item._id)}>{item.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="collapse navbar-collapse justify-content-center">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={`/`} className="nav-link" >Trang chủ</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Giới thiệu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sản phẩm</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Phản hồi</a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse justify-content-center fs-4">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/nguyen.t.co.31" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.instagram.com/nguyen.t.co.31/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa-brands fa-skype"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            <div className="line"></div>
        </>
    );
}

export default Navigation;