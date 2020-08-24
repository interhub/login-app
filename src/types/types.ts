import {logInActionType, logOutActionType, setUserActionType, showTopMessageType} from "../store/actions";
import {RouterState} from "connected-react-router";
import React from "react";

export type StateType<T> = {
    user: T extends UserType ? UserType : null,
    token: TokenType,
    message: MessageType
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

export type ActionType =
    logInActionType |
    setUserActionType |
    logOutActionType |
    showTopMessageType

export type Body = { login: string }

export type onInputType = React.ChangeEvent<HTMLInputElement>
