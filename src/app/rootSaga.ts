import userSaga from '../components/user/userSaga'
import { all } from 'redux-saga/effects'


export default function* rootSaga(){
    console.log('rootSaga')
    yield all([userSaga()])
}