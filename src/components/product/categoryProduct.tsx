import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import productApi from '../../api/productApi';
import { MyToken, Product } from '../../models/index'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import jwt_decode from "jwt-decode";



const CategoryProducts = () => {
    const products: Product[] = useAppSelector((state) => state.product.products.allProducts)
    const token: string = useAppSelector((state) => state.user.login.token)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        productApi.getProductByCategory(id, dispatch)
    }, [id])

    return (
        <>
            <div className="container mb-5">
                <div className="block-line">
                    <h2 className="block-line-text">SẢN PHẨM MỚI NHẤT</h2>
                </div>

                <div className="bg-light p-3">
                    <div className="row row-cols-2 row-cols-xl-4 row-cols-md-3 g-4">
                        {products?.map((item, index) => {
                            return (
                                <div className="col block-item" key={index}>
                                    <div className="card">
                                        <img src={"https://laptopstore-api.herokuapp.com/public/uploads/" + item.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title">{item.name}</p>
                                            <p className="card-text">{item.CPU}, {item.hardDrive}, {item.ram}, {item.operatingSystem}, {item.card}</p>
                                            <h3 className="card-price text-center">{item.price}</h3>

                                            <div className="card-btn d-flex justify-content-center">
                                                <div className="card-update">
                                                    <Link to={`/product/detail/${item._id}`}>
                                                        <button type="button" className="btn btn-success m-2">View</button>
                                                    </Link>
                                                    {token && jwt_decode<MyToken>(token).admin
                                                        ?
                                                        <>
                                                            <Link to={`/product/update/${item._id}`}>
                                                                <button type="button" className="btn btn-success m-2">Update</button>
                                                            </Link>
                                                        </>
                                                        :
                                                        <></>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {token && jwt_decode<MyToken>(token).admin
                    ?
                    <div className="d-flex justify-content-center mt-3">
                        <Link to={`/product/add`}><button type="button" className="btn btn-success p-3">Create</button></Link>
                    </div>
                    :
                    <></>
                }
            </div>

        </>
    );
}

export default CategoryProducts;