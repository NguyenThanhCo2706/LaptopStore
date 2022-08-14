const Header = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row justify-content-md-between fs-1 text-white p-3">
                    <div className="col-lg-4 col-md-6">
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
                                <span>Đăng nhập | </span>
                                <span>Đăng kí </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;