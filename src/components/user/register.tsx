import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../api/axiosClient';
import { Link } from 'react-router-dom';
const img = require('../../public/img/laptop-login.png');



const Register = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')
    const navigate = useNavigate()
    const handleUserClick = async () => {
        if (password !== rePassword) {
            alert('Mật khẩu nhập lại không khớp')
            return
        }
        const registerForm = new URLSearchParams();
        registerForm.append("username", username)
        registerForm.append("password", password)
        try {
            await axiosClient({
                method: "post",
                url: "/user/register",
                data: registerForm
            });
            navigate('/')
        } catch (error) {
            alert('Đăng kí tài khoản thất bại')
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center m-5">
                <div className="card flex-row  justify-content-center input-login-parent">
                    <div className="d-md-block d-none">
                        <img src={img} className="card-img-login" alt="..." />
                    </div>
                    <div className="d-flex flex-column justify-content-center  p-3 input-login-child">
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <div id="emailHelp" className="form-text">Username phải có ít nhất 6 kí tự.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div id="emailHelp" className="form-text">Password phải có ít nhất 6 kí tự.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Re-Password</label>
                            <input type="password" className="form-control" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                        </div>
                        <button className="btn btn-primary btn-lg mt-2" onClick={handleUserClick}>Đăng kí</button>
                        <div className="d-flex justify-content-center mt-3">
                            <Link className="" to="/user/login">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Register;