import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams, useNavigate } from "react-router-dom";
import { Product } from '../../models'
import productApi from '../../api/productApi';




const DetailProduct = () => {
    const product: Product = useAppSelector((state) => state.product.product.currentProduct) || {} as Product
    console.log(product)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const convertMoney = (x: number) => {
        if (x) {
            return (x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
        }
        return '0'
    }
    useEffect(() => {
        console.log(id)
        productApi.getProductById(id, dispatch, navigate)
    }, [])
    return (
        <>
            <div className="container mt-1 mb-5">
                <div className="mb-2">
                    <h4 className="p-2">{product.name}</h4>
                    <span className="px-2"></span>(0) lượt đánh giá)<span />
                    <span className="px-5"></span>
                    <span className="">Bảo hành: 12 Tháng</span>
                </div>
                <div className="mb-2 line-bottom"></div>
                <div className="card">
                    <div className="row">
                        <div className="col-4 d-flex flex-column">
                            {/* <div className="d-flex"> */}
                            <img src={"/public/uploads/" + product.img} className="card-img-detail" alt="..." />
                            <ul className="card-body">
                                <li className="card-text"><b>CPU:</b> {product.CPU}</li>
                                <li className="card-text"><b>ROM:</b> {product.hardDrive}</li>
                                <li className="card-text"><b>RAM:</b> {product.ram}</li>
                                <li className="card-text"><b>Hệ điều hành:</b> {product.operatingSystem}</li>
                                <li className="card-text"><b>Card:</b> {product.card}</li>
                            </ul>
                            <div className="mb-5">
                                <h3 className="card-price text-center">{convertMoney(product.price)}</h3>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-4">
                            <div className="p-2">
                                <div>
                                    <h6 className="p-3 bg-success text-white">Khuyến mãi - Quà tặng</h6>
                                    <ul>
                                        <li>Balo laptop hoặc túi xách Laptop trị giá 350.000</li>
                                        <li>Đến tản nhiệt có quạt làm mát Laptop N192 trị giá 190.000</li>
                                        <li>Chuột không dây trị giá 170.000 </li>
                                        <li>Bộ dụng cụ vệ sinh laptop trị giá 50.000 </li>
                                        <li>Tấm lót chuột cao cấp P03 </li>
                                        <li>Giảm 10% khi mua phụ kiện kèm theo như: túi chống sốc, túi xách, ba lô, quạt tản nhiệt
                                            laptop, bàn phím, chuột, tai nghe, các loại đầu chuyển, cáp chuyển. Mức giảm tối đa
                                            200.000/1 sản phẩm </li>
                                        <li>Trả góp lãi suất 0% áp dụng cho thẻ tín dụng Sacombank, VPbank. Trả góp lãi suất ưu đãi
                                            áp dụng cho nhà tài chính HD Saison và ACS. Trả góp lãi suất uư đãi thông qua cổng MPOS
                                            áp dụng cho thẻ tín dụng: Citibank, Eximbank, HSBC, MSB, Techcombank, Nam Á, Shinhan
                                            bank, TP bank, Seabank, Kiên Long bank, OCB, VIB, ACB, MB, Vietcombank, SHB...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <ul>
                                    <h4>Trợ giúp:</h4>
                                    <li><a  >Hướng dẫn mua hàng nhanh chóng</a></li>
                                    <li><a  >Chính sách bảo hành</a></li>
                                    <li><a  >Chính sách đổi hàng</a></li>
                                </ul>
                                <ul>
                                    <h4>Điện thoại tư vấn - đặt hàng:</h4>
                                    <li>Phan Văn Bình - 0935 81 87 31</li>
                                    <li>Nguyễn Thanh Cơ - 0903 555 310</li>
                                    <li>Lê Văn Huy - 0932 678 771</li>
                                </ul>
                                <ul>
                                    <h4>Địa chỉ mua hàng:</h4>
                                    <li>54 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng</li>
                                </ul>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.5580573595416!2d108.21084147865716!3d16.061009620781476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2sus!4v1652886590405!5m2!1svi!2sus"
                                    width="100%" height="200" style={{ border: "0" }} ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default DetailProduct;