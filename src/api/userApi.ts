import { DataResLogin, User } from "../models"
import axiosClient from "./axiosClient"







const userApi = {
    async login(user: User): Promise<DataResLogin> {
        const loginFormData = new URLSearchParams();
        loginFormData.append("username", user.username)
        loginFormData.append("password", user.password)
        const url = '/user/login'
        return await axiosClient.post(url, loginFormData)

    },
    getUserById(params: string): Promise<User> {
        const url = '/auth/users/' + params
        return axiosClient.get(url)
    },
    addUser(user: User) {
        const json = JSON.stringify(user);
        console.log(json)
        const url = '/auth/users'
        axiosClient.post(url, json)
    },
    updateUser(user: User) {
        const url = `/auth/users/${user.id}`
        delete user['id']
        const json = JSON.stringify(user);
        console.log(json)
        axiosClient.put(url, json)
    }
}

export default userApi