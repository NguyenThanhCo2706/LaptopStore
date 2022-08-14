const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row justify-content-md-between fs-6 text-white p-3">
                    <div className="col col-lg-4">
                        <h5>Thông tin chung</h5>
                        <ul className="no-decoration">
                            <li>Giới thiệu chung</li>
                            <li>Tin tức</li>
                            <li>Khách hàng, doanh nghiệp</li>
                            <li>Liên hệ góp ý</li>
                        </ul>
                    </div>
                    <div className="col col-lg-4">
                        <h5>Hỗ trợ khách hàng</h5>
                        <ul className="no-decoration">
                            <li>Hỗ trợ mua bán trả góp</li>
                            <li>Chính sách giao hàng vận chuyển</li>
                            <li>Bảo hành, đổi trả</li>
                            <li>Bảo mật khách hàng</li>
                        </ul>
                    </div>
                    <div className="col col-lg-4">
                        <h5>Liên hệ với chúng tôi</h5>
                        <ul className="no-decoration">
                            <li>Số điện thoại: 0941383449</li>
                            <li>Email: conguyen.270601@gmail.com</li>
                            <li>Địa chỉ: Duy Thành - Duy Xuyên - Quảng Nam</li>
                            <li>Thời gian: 8:00 - 17:30</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="d-flex justify-content-center text-white p-3 fw-bold">
                Được xây dựng và phát triển bởi Cơ
            </div>
        </div>

    );
}

export default Footer;