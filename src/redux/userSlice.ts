import { createSlice } from "@reduxjs/toolkit"
import { DataResLogin, User } from '../models';



export interface UserState {
    login: {
        isFetching: boolean;
        token: string;
        error: boolean;
    };
    register: {
        isFetching: boolean;
        error: boolean;
    }
}

const initialState: UserState = {
    login: {
        isFetching: false,
        token: '',
        error: false,
    },
    register: {
        isFetching: false,
        error: false,
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login_init(state) {
            state.login.isFetching = true;
        },
        login_success(state, action) {
            console.log('da logiing')
            state.login.isFetching = false;
            state.login.token = action.payload;
            state.login.error = false;
        },
        login_error(state) {
            state.login.error = true;
        },

        logout(state) {
            state.login.token = '';
        },
    }
})


export const userActions = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;