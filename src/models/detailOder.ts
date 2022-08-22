export interface productCart {
    productId: string;
    productName: string;
}

export interface DetailOrder {
    _id?: string,
    product: productCart,
    customer: string,
    amount: number,
}