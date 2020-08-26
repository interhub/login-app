import {fork, takeEvery} from "redux-saga/effects";
import ACTION from "./actionName";
import {loadCodeVerify, loadLoginAndGetCode, loadRegistarationAndGetCode} from "./sagaFetchAction";

function* loadActions() {
    yield takeEvery(ACTION.LOG_IN, loadLoginAndGetCode)
    yield takeEvery(ACTION.REGISTRATION, loadRegistarationAndGetCode)
    yield takeEvery(ACTION.CODE_VERIFY, loadCodeVerify)
}

export const rootSaga = function* () {
    yield fork(loadActions)
}
