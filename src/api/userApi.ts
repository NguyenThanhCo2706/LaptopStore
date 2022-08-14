import { ListResponse, User } from "../models"
import axiosClient from "./axiosClient"







const userApi = {
    getAll(): Promise<ListResponse<User>> {
        const url = '/auth/users'
        return axiosClient.get(url)
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