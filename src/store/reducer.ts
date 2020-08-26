import ACTION from "./actionName";
import {ActionType, StateType, UserType} from "../types/types";
import State from "./state";
import {Reducer} from "redux";

const reducer: Reducer<any, ActionType> = (state: StateType<UserType> | StateType<null> = {...State}, action: ActionType): StateType<UserType> | StateType<null> => {
    switch (action.type) {
        case ACTION.SET_USER:
            return {...state, user: action.user};
        case ACTION.LOG_OUT:
            return {...state, user: null};
        case ACTION.SHOW_TOP_MESSAGE:
            return {...state, message: action.message};
        case ACTION.SET_LOADING:
            return {...state, loading: action.loading};
        default:
            return state;
    }
};
export default reducer