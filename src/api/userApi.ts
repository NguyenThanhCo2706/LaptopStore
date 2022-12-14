import { AxiosResponse } from "axios";
import { userActions } from "../redux/userSlice";
import { DataResLogin, User } from "../models"
import axiosClient from "./axiosClient"


const userApi = {
    async login(user: User, dispatch: any, navigate: any) {
        dispatch(userActions.login_init())
        try {
            const loginFormData = new URLSearchParams();
            loginFormData.append("username", user.username)
            loginFormData.append("password", user.password)
            const url = '/user/login'
            const res = await axiosClient.post(url, loginFormData)
            dispatch(userActions.login_success(res.data))
            navigate('/')
        }
        catch (err) {
            alert("Tài khoản hoặc mật khẩu không đúng")
            dispatch(userActions.login_error())
            navigate('/user/login')
        }
    },
    async register(user: User) {
        const registerFormData = new URLSearchParams();
        registerFormData.append("username", user.username)
        registerFormData.append("password", user.password)
        const url = '/user/register'
        try {
            await axiosClient.post(url, registerFormData)
        }
        catch (error) {
            alert('Xảy ra lỗi khi đăng kí tài khoản')
        }
    },
}

export default userApi