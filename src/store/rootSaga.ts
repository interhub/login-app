import {call, fork, put, takeEvery} from "redux-saga/effects";
import ACTION from "./actionName";
import {UserType} from "../types/types";
import {logOutAction, setUserAction} from "./actions";


//3
const getString = (): Promise<string> => fetch('https://dog.ceo/api/breeds/image/random').then((r) => r.json())

//2
function* loadUserAndSet() {
    try{
        console.log('setUser')
        const user: UserType = yield call(getString)
        console.log(user,'NEW USER')
        yield put(setUserAction(user))
    }catch (e) {
        yield put(logOutAction())
    }
}

//1
function* loadUser() {
    yield takeEvery(ACTION.LOG_IN, loadUserAndSet)
}

export const rootSaga = function* () {
    console.log('rootSaga')
    yield fork(loadUser)
}
