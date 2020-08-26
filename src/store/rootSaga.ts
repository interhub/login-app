import {fork, takeEvery} from "redux-saga/effects";
import ACTION from "./actionName";
import {
    loadCodeVerify,
    loadGetToken,
    loadGetUserData,
    loadLoginAndGetCode,
    loadRegistarationAndGetCode
} from "./sagaFetchAction";
import {getUserDataAction} from "./actions";

function* loadActions() {
    yield takeEvery(ACTION.LOG_IN, loadLoginAndGetCode)
    yield takeEvery(ACTION.REGISTRATION, loadRegistarationAndGetCode)
    yield takeEvery(ACTION.CODE_VERIFY, loadCodeVerify)
    yield takeEvery(ACTION.GET_TOKEN, loadGetToken)
    yield takeEvery(ACTION.GET_USER, loadGetUserData)
}

export const rootSaga = function* () {
    yield fork(loadActions)
}
