import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../models";


export interface LoginPayload {
    username: string,
    password: string
}

export interface UserState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}

const initialState: UserState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.logging = false;
            state.currentUser = action.payload
            state.isLoggedIn = true;
        },
        loginFailure(state) {
            state.logging = false;
        },

        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        }
    }
})


export const userActions = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;