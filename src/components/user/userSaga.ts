import { fork, take, takeLatest, put, call, delay } from 'redux-saga/effects';
import { userActions, LoginPayload } from './userSlice';
import { useNavigate } from "react-router-dom"
import { User, DataResLogin } from '../../models'
import { PayloadAction } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import { push } from 'connected-react-router';


function* handlelogin(payload: User) {
    try {
        userApi.login(payload).then((data) => {
            console.log(data.token)
            localStorage.setItem('token', data.token)
        })
        yield put(userActions.loginSuccess(payload))
    }
    catch (err) {
        yield put(userActions.loginFailure())
    }
}

function* handlelogout() {
    localStorage.removeItem('token')
    yield put(userActions.logout())
}

function* loginFLow() {
    while (true) {
        const check = Boolean(localStorage.getItem('token'))
        if (!check) {
            console.log('login')
            const action: PayloadAction<User> = yield take(userActions.login.type)
            yield fork(handlelogin, action.payload)
        }

        yield take(userActions.logout.type)
        yield fork(handlelogout)
        console.log('logout')
    }
}

export default function* userSaga() {
    yield fork(loginFLow)
}