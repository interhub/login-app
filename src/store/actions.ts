import ACTION from "./actionName";
import {UserType} from "../types/types";

export type logInActionType = { type: ACTION.LOG_IN, login: string }
export const logInAction = (login: string): logInActionType => ({
    type: ACTION.LOG_IN,
    login
})

export type setUserActionType = { type: string, user: UserType }
export const setUserAction = (user: UserType): setUserActionType => ({
    type: ACTION.SET_USER,
    user
})

export type logOutActionType = { user: null, type: ACTION.LOG_OUT }
export const logOutAction = (): logOutActionType => ({
    type: ACTION.LOG_OUT,
    user: null
})