import { useState } from 'react';
import userApi from '../../api/userApi';
import { useAppDispatch } from '../../app/hooks';
import { User } from '../../models'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const img = require('../../public/img/laptop-login.png');



const Login = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleUserClick = async () => {
        try {
            const user: User = {
                username: username,
                password: password
            }   
            await userApi.login(user, dispatch, navigate)
        }
        catch (error) {
            alert("Tài khoản hoặc mật khẩu không đúng")
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
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-primary btn-lg mt-2" onClick={handleUserClick}>Login</button>
                        <div className="d-flex justify-content-center mt-3">
                            <span>You don't have an account? <Link className="" to="/user/register"> Register</Link></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;