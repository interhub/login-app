import {
    codeVerifyActionType,
    logInActionType,
    registrationActionType,
    setLoadingAction,
    showTopMessage
} from "./actions";
import {call, put} from "redux-saga/effects";
import {LOADING_STATE_NAME} from "../variable/LOADING_STATE";
import {
    BodyConfirmType,
    BodyLoginType,
    BodyRegType,
    ResConfirmType,
    ResLoginType,
    ResRegType
} from "../../server/types/types";
import {RouteParamsFromCodeScreen} from "../types/types";
import HISTORY from "../variable/HISTORY";
import ROUTES from "../variable/ROUTES";
import LOCATION from "../variable/LOCATION";

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

// LOGIN
export const loadLoginAndGetCode = function* ({login}: logInActionType) {
    let body: BodyLoginType = {login}

    const logInFetch = (): Promise<ResLoginType<true>> =>
        fetch(LOCATION + '/account/profile/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((r) => r.json())
    try {
        yield put(setLoadingAction(LOADING_STATE_NAME.PROCESS))
        const res: ResLoginType<true> = yield call(logInFetch)
        if (res.result) {
            yield put(setLoadingAction(LOADING_STATE_NAME.SUCCESS))
            alert(res.code + ' СМС код с сервера')
            yield call(delay, 1500)
            let params: RouteParamsFromCodeScreen = {login, registration: false}
            yield put(setLoadingAction(LOADING_STATE_NAME.HIDE))
            HISTORY.push({pathname: ROUTES.CODE, state: params});
        } else {
            throw new Error(res.message || 'Ошибка')
        }
    } catch (e) {
        yield put(setLoadingAction(LOADING_STATE_NAME.ERROR))
        yield put(showTopMessage({message: {isRed: true, text: e.message || 'Ошибка', visible: true}}))
    }
}

//REGISTRATION
export const loadRegistarationAndGetCode = function* ({login}: registrationActionType) {
    let body: BodyRegType = {login, confirmationGDPRDate: Date.now()}
    const regFetch = (): Promise<ResRegType> =>
        fetch(LOCATION + '/account/profile', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((r) => r.json())

    try {
        yield put(setLoadingAction(LOADING_STATE_NAME.PROCESS))
        const res: ResRegType = yield call(regFetch)
        if (res.result) {
            localStorage.setItem('attemptId', res.attemptId)
            yield put(setLoadingAction(LOADING_STATE_NAME.SUCCESS))
            alert(res.code + ' СМС код с сервера')
            let params: RouteParamsFromCodeScreen = {login, registration: true}
            yield call(delay, 1500)
            yield put(setLoadingAction(LOADING_STATE_NAME.HIDE))
            HISTORY.push({pathname: ROUTES.CODE, state: params});
        } else {
            throw new Error(res.message || 'Ошибка')
        }
    } catch (e) {
        yield put(setLoadingAction(LOADING_STATE_NAME.ERROR))
        yield put(showTopMessage({message: {isRed: true, text: e.message || 'Ошибка', visible: true}}))
    }
}

//CODE VERIFY
export const loadCodeVerify = function* ({code}: codeVerifyActionType) {
    let attemptId = localStorage.getItem('attemptId') || ''
    let body: BodyConfirmType = {attemptId, code}
    const verifyFetch = (): Promise<ResConfirmType> =>
        fetch(LOCATION + '/account/profile/login/confirm', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((r) => r.json())

    try {
        yield put(setLoadingAction(LOADING_STATE_NAME.PROCESS))
        const res: ResConfirmType = yield call(verifyFetch)
        if (res.success) {
            yield put(setLoadingAction(LOADING_STATE_NAME.SUCCESS))
            yield call(delay, 1500)
            yield put(setLoadingAction(LOADING_STATE_NAME.HIDE))
            console.log('SUCCESS CODE')
            // HISTORY.push({pathname: ROUTES.CODE, state: params});
        } else {
            throw new Error(res.message || 'Ошибка')
        }
    } catch (e) {
        yield put(setLoadingAction(LOADING_STATE_NAME.ERROR))
        yield put(showTopMessage({message: {isRed: true, text: e.message || 'Ошибка', visible: true}}))
    }
}


//2
// function* loadLoginAndGetCode() {
//     try {
//         const res: ResLoginType<true> = yield call(logInFetch)
//         yield put(setUserAction(user))
//     } catch (e) {
//         yield put(logOutAction())
//     }
