import { useEffect, useState } from 'react';
import userApi from '../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userActions } from './userSlice'
import { User } from '../../models'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const handleUserClick = () => {
        const user: User = {
            username: username,
            password: password
        }
        dispatch(userActions.login(user))
        navigation('/')
        
    }
    return (
        <div className="container">
            <div className="mb-3 w-25">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleUserClick}>Click</button>
        </div>
    );
}

export default Login;