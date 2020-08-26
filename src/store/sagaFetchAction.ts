import {logInActionType, setLoadingAction, showTopMessage} from "./actions";
import {call, put} from "redux-saga/effects";
import {LOADING_STATE_NAME} from "../variable/LOADING_STATE";
import {ResLoginType} from "../../server/types/types";
import {RouteParamsFromCodeScreen} from "../types/types";
import HISTORY from "../variable/HISTORY";
import ROUTES from "../variable/ROUTES";
import LOCATION from "../variable/LOCATION";




export const loadLoginAndGetCode = function* ({login}: logInActionType) {
    const logInFetch = (login: string): Promise<ResLoginType<true>> => fetch(LOCATION + '/account/profile/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login})
    }).then((r) => r.json())
    try {
        yield put(setLoadingAction(LOADING_STATE_NAME.PROCESS))
        const res: ResLoginType<true> = yield call(logInFetch, login)
        if (res.result) {
            let params: RouteParamsFromCodeScreen = {login, registration: false}
            HISTORY.push({pathname: ROUTES.CODE, state: params});
            alert(res.code + 'СМС код с сервера')
            yield put(setLoadingAction(LOADING_STATE_NAME.SUCCESS))
        } else {
            throw new Error(res.message || 'Ошибка')
        }
    } catch (e) {
        yield put(setLoadingAction(LOADING_STATE_NAME.ERROR))
        yield put(showTopMessage({message: {isRed: true, text: e.message || 'Ошибка', visible: true}}))
    }
}