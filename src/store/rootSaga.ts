import {fork, takeEvery} from "redux-saga/effects";
import ACTION from "./actionName";
import {loadLoginAndGetCode} from "./sagaFetchAction";


//2
// function* loadLoginAndGetCode() {
//     try {
//         const res: ResLoginType<true> = yield call(logInFetch)
//         yield put(setUserAction(user))
//     } catch (e) {
//         yield put(logOutAction())
//     }


function* loadUser() {
    yield takeEvery(ACTION.LOG_IN, loadLoginAndGetCode)
}

export const rootSaga = function* () {
    console.log('rootSaga')
    yield fork(loadUser)
}
