import { Product } from "../models"
import axiosClient from "./axiosClient"







const productApi = {
    getAll(): Promise<Array<Product>> {
        const url = '/product/list'
        return axiosClient.get(url)
    },
    getProductById(params: string): Promise<Product> {
        const url = '/product/' + params
        return axiosClient.get(url)
    },
    addProduct(product: Product) {
        const json = JSON.stringify(product);
        console.log(json)
        const url = '/product'
        axiosClient.post(url, json)
    },
    updateProduct(product: Product) {
        const url = `/product/${product.id}`
        delete product['id']
        const json = JSON.stringify(product);
        console.log(json)
        axiosClient.put(url, json)
    }
}

export default productApi