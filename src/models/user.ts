export interface User {
    id?: string;
    username: string,
    password: string,
    role?: boolean,
}

export interface DataResLogin {
    token: string,
    username: string
}