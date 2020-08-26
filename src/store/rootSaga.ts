import {call, fork, put, takeEvery} from "redux-saga/effects";
import ACTION from "./actionName";
import {logInActionType, showTopMessage} from "./actions";
import LOCATION from "../variable/LOCATION";
import {ResLoginType} from "../../server/types/types";


//3
const logInFetch = (login: string): Promise<ResLoginType<true>> => fetch(LOCATION + '/account/profile/login', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({login})
}).then((r) => r.json())

//2
// function* loadLoginAndGetCode() {
//     try {
//         const res: ResLoginType<true> = yield call(logInFetch)
//         yield put(setUserAction(user))
//     } catch (e) {
//         yield put(logOutAction())
//     }


function* loadLoginAndGetCode({login}: logInActionType) {
    try {
        const res: ResLoginType<true> = yield call(logInFetch, login)
        console.log(res, 'res')
        if (res.result) {
            alert(res.code + 'СМС код с сервера')
        } else {
            yield put(showTopMessage({message: {isRed: true, text: res.message || 'Ошибка', visible: true}}))
        }
    } catch (e) {
        console.log(e)
    }
}

//1
function* loadUser() {
    yield takeEvery(ACTION.LOG_IN, loadLoginAndGetCode)
}

export const rootSaga = function* () {
    console.log('rootSaga')
    yield fork(loadUser)
}
