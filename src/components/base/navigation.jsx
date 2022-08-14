import './style.css'

const Navigation = () => {
    return (
        <>
            <div className="container bg-light">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <div className="me-5">
                            <i className="fa-solid fa-list"></i> Danh Mục sản phẩm
                        </div>
                        <div className="collapse navbar-collapse justify-content-center">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Trang chủ</a>
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