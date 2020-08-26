import ACTION from "./actionName";
import {LoadingType, MessageType, UserType} from "../types/types";
import {LOADING_STATE_NAME, loadingStateMachine} from "../variable/LOADING_STATE";

export type logInActionType = { type: ACTION.LOG_IN, login: string }
export const logInAction = (login: string): logInActionType => ({
    type: ACTION.LOG_IN,
    login
})

export type setUserActionType = { type: ACTION.SET_USER, user: UserType }
export const setUserAction = (user: UserType): setUserActionType => ({
    type: ACTION.SET_USER,
    user
})

export type logOutActionType = { user: null, type: ACTION.LOG_OUT }
export const logOutAction = (): logOutActionType => ({
    type: ACTION.LOG_OUT,
    user: null
})

export type showTopMessageType = { type: ACTION.SHOW_TOP_MESSAGE, message: MessageType }
export const showTopMessage = ({message}: { message: MessageType }): showTopMessageType => ({
    type: ACTION.SHOW_TOP_MESSAGE,
    message
})

export type setLoadingActionType = { type: ACTION.SET_LOADING, loading: LoadingType }
export const setLoadingAction = (state_name: LOADING_STATE_NAME): setLoadingActionType => ({
    type: ACTION.SET_LOADING,
    loading: loadingStateMachine(state_name)
})


export type registrationActionType = { type: ACTION.REGISTRATION, login: string }
export const registrationAction = (login: string): registrationActionType => ({
    type: ACTION.REGISTRATION,
    login
})