import {logInActionType, logOutActionType, setUserActionType} from "../store/actions";
import {RouterState} from "connected-react-router";
import React from "react";

export type StateType<T> = {
    user: T extends UserType ? UserType : null,
    token: TokenType
}

export type TokenType = string

export type UserType = {
    name: string
    id: number
    token: TokenType
}

export type AllState={
    router: RouterState
    saga: StateType<UserType>
}

export type ActionType =
    logInActionType |
    setUserActionType |
    logOutActionType

export type Body = { login: string }

export type onInputType=React.ChangeEvent<HTMLInputElement>
