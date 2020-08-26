import {
    codeVerifyActionType,
    getTokenAction,
    getTokenActionType,
    logInActionType,
    registrationActionType,
    setLoadingAction,
    setUserAction,
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
    ResProfileType,
    ResRegType,
    ResReportType,
    TokenType
} from "../../server/types/types";
import {BodyGuest, RouteParamsFromCodeScreen} from "../types/types";
import HISTORY from "../variable/HISTORY";
import ROUTES from "../variable/ROUTES";
import LOCATION from "../variable/LOCATION";
import formatPhone from "../func/formatPhone";

const udid: (appName: string) => string = require('udid')

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

// LOGIN
export const loadLoginAndGetCode = function* ({login}: logInActionType) {
    let body: BodyLoginType = {login: formatPhone(login)}

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
    let body: BodyRegType = {login: formatPhone(login), confirmationGDPRDate: Date.now()}
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
export const loadCodeVerify = function* ({code, login, registration}: codeVerifyActionType) {
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
            if (registration) {
                let params: RouteParamsFromCodeScreen = {login, registration: true}
                HISTORY.push({pathname: ROUTES.LOG_IN, state: params});
            } else {
                //INSTANT LOGIN GET TOKEN
                yield put(showTopMessage({message: {isRed: false, text: 'Выполняется вход', visible: true}}))
                yield put(getTokenAction(login))
            }
        } else {
            throw new Error(res.message || 'Ошибка')
        }
    } catch (e) {
        yield put(setLoadingAction(LOADING_STATE_NAME.ERROR))
        yield put(showTopMessage({message: {isRed: true, text: e.message || 'Ошибка', visible: true}}))
    }
}

//GET USER DATA
export const loadGetUserData = function* ({login}: getTokenActionType) {
    let {token} = JSON.parse(localStorage.getItem('tokens') || "{}") || {token: ''}
    const getUserFetch = (): Promise<ResConfirmType> =>
        fetch(LOCATION + '/account/profile', {
            method: 'get',
            headers: {
                token
            }
        }).then((r) => r.json())
    try {
        yield put(setLoadingAction(LOADING_STATE_NAME.PROCESS))
        const res: ResProfileType & ResReportType | any = yield call(getUserFetch)
        console.log(res, 'RESPONSE')
        if (res.result) {
            yield put(setUserAction(res))
            yield put(setLoadingAction(LOADING_STATE_NAME.HIDE))
        } else {
            throw new Error('Ошибка')
        }
    } catch (e) {
        yield put(setLoadingAction(LOADING_STATE_NAME.ERROR))
        yield put(showTopMessage({message: {isRed: true, text: e.message || 'Ошибка', visible: true}}))
        HISTORY.push({pathname: ROUTES.LOG_IN});
        yield call(delay, 1500)
        yield put(setLoadingAction(LOADING_STATE_NAME.HIDE))
        console.log('GET USER DATA ERR')
    }
}

//GET TOKEN
export const loadGetToken = function* ({login}: getTokenActionType) {
    let body = {...BodyGuest, login: formatPhone(login), udid: udid('login-app') || ''}
    const verifyFetch = (): Promise<ResConfirmType> =>
        fetch(LOCATION + '/session/guest', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((r) => r.json())
    try {
        yield put(setLoadingAction(LOADING_STATE_NAME.PROCESS))
        const res: TokenType = yield call(verifyFetch)
        if (res.token) {
            //TODO ADD TOKENS TO COOKIES
            localStorage.setItem('tokens', JSON.stringify(res))
            yield put(setLoadingAction(LOADING_STATE_NAME.SUCCESS))
            yield call(delay, 1500)
            yield put(setLoadingAction(LOADING_STATE_NAME.HIDE))
            HISTORY.push({pathname: ROUTES.PROFILE});
        } else {
            throw new Error('Ошибка')
        }
    } catch (e) {
        yield put(setLoadingAction(LOADING_STATE_NAME.ERROR))
        yield put(showTopMessage({message: {isRed: true, text: e.message || 'Ошибка', visible: true}}))
        console.log('GET TOKEN ERR')
    }
}

//LOGOUT EXITE
export const loadLogOut = function* () {
    localStorage.removeItem('tokens')
    HISTORY.push({pathname: ROUTES.START});
}



