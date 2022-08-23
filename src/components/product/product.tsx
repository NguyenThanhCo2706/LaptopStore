import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import productApi from '../../api/productApi';
import { Product } from '../../models/index'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import jwt_decode from "jwt-decode";
import './style.css'
const img1 = require('./1.jpg');
const img2 = require('./2.jpg');
const img3 = require('./3.jpg');
const img4 = require('./4.jpg');
const img5 = require('./5.jpg');


interface MyToken {
    username: string;
    admin: boolean;
}

const Products = () => {
    const products: Product[] = useAppSelector((state) => state.product.products.allProducts)
    console.log(products)
    const token: string = useAppSelector((state) => state.user.login.token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        productApi.getAll(dispatch)
    }, [])

    const removeProduct = (id: string) => {
        productApi.removeProduct(id, localStorage.token, dispatch, products)
    }
    return (
        <>
            <div className="container mb-5">
                <div id="carouselExampleControls" className="carousel slide container mt-3 mb-3" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval='1'>
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval='1'>
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval='1'>
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval='1'>
                            <img src={img4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval='1'>
                            <img src={img5} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="block-line">
                    <h2 className="block-line-text">SẢN PHẨM MỚI NHẤT</h2>
                </div>

                <div className="bg-light p-3">
                    <div className="row row-cols-2 row-cols-xl-4 row-cols-md-3 g-4">
                        {products?.map((item, index) => {
                            return (
                                <div className="col block-item" key={index}>
                                    <div className="card">
                                        <img src={"/public/uploads/" + item.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title">{item.name}</p>
                                            <p className="card-text">{item.CPU}, {item.hardDrive}, {item.ram}, {item.operatingSystem}, {item.card}</p>
                                            <h3 className="card-price text-center">{item.price}</h3>

                                            <div className="card-btn d-flex justify-content-center">
                                                <div className="card-update">
                                                    <Link to={`/product/detail/${item._id}`}>
                                                        <button type="button" className="btn btn-success">View</button>
                                                    </Link>
                                                    {token && jwt_decode<MyToken>(token).admin
                                                        ?
                                                        <>
                                                            <Link to={`/product/update/${item._id}`}>
                                                                <button type="button" className="btn btn-success m-1">Update</button>
                                                            </Link>
                                                            <button onClick={() => removeProduct(String(item._id))} type="button" className="btn btn-success">Delete</button>
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

export default Products;