import {
    logInActionType,
    logOutActionType,
    setLoadingActionType,
    setUserActionType,
    showTopMessageType
} from "../store/actions";
import {RouterState} from "connected-react-router";
import React from "react";

export type StateType<T> = {
    user: T extends UserType ? UserType : null,
    token: TokenType,
    message: MessageType,
    loading: LoadingType
}

export type TokenType = string

export type UserType = {
    name: string
    id: number
    token: TokenType
}

export type AllState = {
    router: RouterState
    saga: StateType<UserType>
}

export type MessageType = {
    text: string
    isRed: boolean
    visible: boolean
}


export type LoadingType = {
    process: boolean
    success: boolean
    error: boolean
    visible: boolean
}

export type ActionType =
    logInActionType |
    setUserActionType |
    logOutActionType |
    showTopMessageType |
    setLoadingActionType

export type Body = { login: string }

export type RouteParamsFromCodeScreen= {login: string, registration: boolean}

export type onInputType = React.ChangeEvent<HTMLInputElement>

export const BodyGuest = {
    "appVersion": "Web",
    "brandName": "Web",
    "lang": "ru",
    "model": "Web",
    "osVersion": "Web",
    "platform": "web",
    "screenResolution": "Web",
    udid: "65eeaed8-ce5e-414f-9193-5246b913bdec"
}
export type BodyGuestType = typeof BodyGuest & { udid: string }
