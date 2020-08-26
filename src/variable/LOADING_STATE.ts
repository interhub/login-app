import {LoadingType} from "../types/types";

export enum LOADING_STATE_NAME {
    PROCESS = 'PROCESS',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    HIDE = 'HIDE'
}

const loadin_object: LoadingType = {process: false, error: false, success: false, visible: true}
export const loadingStateMachine = (state_name: LOADING_STATE_NAME): LoadingType => {
    switch (state_name) {
        case LOADING_STATE_NAME.PROCESS:
            return {...loadin_object, process: true};
        case LOADING_STATE_NAME.ERROR:
            return {...loadin_object, error: true};
        case LOADING_STATE_NAME.SUCCESS:
            return {...loadin_object, success: true};
        case LOADING_STATE_NAME.HIDE:
            return {...loadin_object, visible: false};
    }
}
