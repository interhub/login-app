import ACTION from "./actionName";
import {ActionType, StateType, UserType} from "../types/types";
import State from "./state";

const reducer: any = (state: StateType<UserType> | StateType<null> = {...State}, action: ActionType): StateType<UserType> | StateType<null> => {
    switch (action.type) {
        case ACTION.SET_USER:
            return {...state, user: action.user};
        case ACTION.LOG_OUT:
            return {...state, user: null};
        case ACTION.SHOW_TOP_MESSAGE:
            return {...state, message: action.message};
        default:
            return state;
    }
};
export default reducer