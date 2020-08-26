import {fork, takeEvery} from "redux-saga/effects";
import ACTION from "./actionName";
import {
    loadCodeVerify,
    loadGetToken,
    loadGetUserData,
    loadLoginAndGetCode,
    loadLogOut,
    loadRegistarationAndGetCode
} from "./sagaFetchAction";

function* loadActions() {
    yield takeEvery(ACTION.LOG_IN, loadLoginAndGetCode)
    yield takeEvery(ACTION.REGISTRATION, loadRegistarationAndGetCode)
    yield takeEvery(ACTION.CODE_VERIFY, loadCodeVerify)
    yield takeEvery(ACTION.GET_TOKEN, loadGetToken)
    yield takeEvery(ACTION.GET_USER, loadGetUserData)
    yield takeEvery(ACTION.LOG_OUT, loadLogOut)
}

export const rootSaga = function* () {
    yield fork(loadActions)
}
